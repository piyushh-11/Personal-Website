import { useEffect, useRef, useState } from 'react'

type WeatherState = {
  label: string
  loading: boolean
}

const POINTS_URL = 'https://api.weather.gov/points/30.601389,-96.314445'
const USER_AGENT = 'PiyushOS (hole.piyu@gmail.com)'
const HEADERS = {
  'User-Agent': USER_AGENT,
  Accept: 'application/geo+json',
}

function formatWeatherLabel(temperature: number, unit: string) {
  return `College Station, Texas     ${temperature}°${unit}`
}

function useWeather() {
  const [state, setState] = useState<WeatherState>({ label: 'CStat …', loading: true })
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const fetchWeather = async () => {
      try {
        const pointsResponse = await fetch(POINTS_URL, {
          headers: HEADERS,
          signal: controller.signal,
        })
        if (!pointsResponse.ok) throw new Error('points fetch failed')
        const pointsData = await pointsResponse.json()
        const forecastUrl =
          pointsData?.properties?.forecastHourly ?? pointsData?.properties?.forecast
        if (!forecastUrl) throw new Error('forecast url missing')

        const forecastResponse = await fetch(forecastUrl, {
          headers: HEADERS,
          signal: controller.signal,
        })
        if (!forecastResponse.ok) throw new Error('forecast fetch failed')
        const forecastData = await forecastResponse.json()
        const period = forecastData?.properties?.periods?.[0]
        if (!period) throw new Error('forecast period missing')

        const temperature = period.temperature
        const unit = period.temperatureUnit
        if (typeof temperature !== 'number' || !unit) throw new Error('invalid data')

        if (isMounted) {
          setState({ label: formatWeatherLabel(temperature, unit), loading: false })
        }
      } catch (error) {
        if (!isMounted) return
        setState({ label: 'CStat —', loading: false })
      }
    }

    fetchWeather()
    intervalRef.current = window.setInterval(fetchWeather, 10 * 60 * 1000)

    return () => {
      isMounted = false
      controller.abort()
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [])

  return state
}

export default useWeather

