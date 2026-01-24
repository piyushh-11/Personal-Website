import headshotImg from '../assets/headshot.jpg'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'

export const profile = {
  name: 'Piyush Hole',
  classification: 'Computer Science, Math + Stats Minors',
  school: 'Texas A&M University',
  location: 'College Station, TX',
  headshotSrc: headshotImg,
  headshotAlt: 'Portrait of Piyush Hole smiling in natural light',

  about: {
    headline: 'Turning ideas into reality through Software Engineering',
    paragraphs: [
      'I’m a Junior Texas Computer Science student who likes turning complex infrastructure into experiences people can actually trust. On paper, I’ve built pipelines that handle 40k cases/month at Palo Alto Networks, tuned a high‑throughput mail system for Formula Electric, and helped a research team reach 86% accuracy on BRD detection with LSTMs.',
    ],
  },

  whyHci: {
    title: 'Why HCI',
    paragraphs: [
      'I’m drawn to HCI because I’ve seen how great engineering can still fall flat when the human story is missing. At Palo Alto Networks, I worked on a Customer 360 analytics platform in Python and React TS, and the hardest part wasn’t throughput,it was making the data feel coherent and actionable for teams handling 40k cases a month. On the Formula Electric team, a mailing system only works if the status, bounces, and queues are legible. Same with the Design Build Fly work: scraping 3,000+ configs and fusing sensors with a Kalman Filter is only valuable if the results can be understood and used.',
      'This class is a chance to connect those dots, pairing my systems background with intentional interaction design. I want to learn how to ask better questions, prototype faster, and validate what users actually experience, not just what my logs say. That shift matters for where I’m headed: I’m joining Citadel’s Commodities engineering team next summer, and I want to build tools where market data feels explorable instead of intimidating.',
    ],
    settings: [
      { label: 'Program', value: 'Texas A&M CS Honors' },
      { label: 'Graduation', value: 'May 2027' },
      { label: 'Location', value: 'College Station, TX' },
    ],
  },

  courseStack: {
    title: 'Course Stack',
    items: [
      {
        name: 'CSCE 412: Cloud Computing',
        howItConnects:
          'Building for global scale in Singapore taught me how distributed systems form the backbone of seamless user experiences, regardless of geography.',
      },
      {
        name: 'CSCE 331: Software Engineering',
        howItConnects:
          'This was where I learned to bridge the gap between technical rigor and user requirements, treating software as a service for people rather than just a set of specs.',
      },
      {
        name: 'CSCE 420: AI',
        howItConnects:
          'Exploring artificial intelligence allows me to think about the next frontier of interfaces: moving from static tools to agentic systems that anticipate and assist.',
      },
    ],
  },

  careerPath: {
    title: 'Career Path',
    sections: [
      {
        label: 'Now',
        text: 'I’m focused on becoming a stronger product‑minded engineer,someone who can ship high‑scale systems and still sweat the feel of the UI. Recent work spans analytics throughput at Palo Alto Networks, systems reliability for Formula Electric, and research‑grade modeling. I want to pair those strengths with better design instincts and clearer user empathy.',
      },
      {
        label: 'Next',
        text: 'As an incoming Citadel Commodities engineering intern, I’ll be building infrastructure and analytics around market data. My goal is to make those tools more legible and interactive so traders and analysts can move from raw data to confident decisions faster.',
      },
      {
        label: 'North Star',
        text: 'Long term, I want to build products where advanced systems feel approachable,think complex data made calm, precise, and trustworthy. I’m especially interested in developer tools and analytical platforms that respect attention and help people reason clearly.',
      },
    ],
  },

  gallery: {
    title: 'Photo Gallery',
    items: [
      {
        src: photo1,
        alt: '',
        caption:
          'The Cologne Cathedral in Germany',
      },
      {
        src: photo2,
        alt: '',
        caption:
          'Vacation Huts in Rajasthan, India',
      },
      {
        src: photo3,
        alt: '',
        caption:
          'The Spree River in Berlin, Germany',
      },
      {
        src: photo4,
        alt: '',
        caption:
          'A cool photo I forgot the name of :)',
      }
    ],
  },

  links: {
    email: 'hole.piyu@gmail.com',
    github: 'github.com/piyushh-11',
    linkedin: 'linkedin.com/in/piyush-hole',
  },
}

