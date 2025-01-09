import { NavLink } from 'react-router-dom'
import { Linkedin, GitHub } from 'react-feather'
import Polaroid from './Polaroid'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-top space-y-8 items-center pl-4 pt-20 w-1/5 h-screen'>
      <Polaroid />
      <nav className='flex flex-col items-center'>
        {[
          { to: '/', icon: '🏡.png', label: 'Home' },
          { to: '/projects', icon: '👨‍💻.png', label: 'Projects' },
          { to: '/blogs', icon: '📝.png', label: 'Blogs' },
          { to: '/photos', icon: '📸.png', label: 'Photos' },
        ].map((link) => (
            <NavLink 
            key={link.to} 
            to={link.to} 
            end 
            className={({ isActive }) => 
              `flex flex-row justify-between items-center p-1 w-32 text-gray-400 font-nunito ${isActive ? 'font-bold text-gray-900' : ''} hover:scale-105 transition-transform duration-200`
            }
            >
            <img className="w-6" src={`src/assets/icons/${link.icon}`} alt={link.label} />
            <span>{link.label}</span>
            </NavLink>
        ))}
      </nav>
      <div>
        <NavLink 
          to='https://www.linkedin.com/in/piyush-hole' 
          className='flex flex-row justify-between items-center p-1 w-32 font-nunito text-blue-600 hover:scale-105 transition-transform duration-200' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <Linkedin strokeWidth={1.5} className="w-6" />
          <span>LinkedIn</span>
        </NavLink>
        <NavLink 
          to='https://github.com/piyushh-11' 
          className='flex flex-row justify-between items-center p-1 w-32 font-nunito hover:scale-105 transition-transform duration-200' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <GitHub strokeWidth={1.5} className="w-6" />
          <span>GitHub</span>
        </NavLink>
      </div>
      <div className="h-1/2"></div>
      <p className='text-sm font-nunito text-gray-400 justify-self-end pb-4'>Made with ❤️</p>
    
    </div>
  )
}

export default Sidebar