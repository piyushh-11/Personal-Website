import headshotImg from '../assets/headshot.jpg'
import galleryKodak from '../assets/gallery-kodak-portra.jpg'
import galleryMutualFund from '../assets/gallery-mutual-fund.jpg'

export const profile = {
  name: 'Piyush Hole',
  classification: 'Computer Science (Honors), Math + Stats Minors',
  school: 'Texas A&M University • B.S. Computer Science (Honors)',
  location: 'College Station, TX',
  headshotSrc: headshotImg,
  headshotAlt: 'Portrait of Piyush Hole smiling in natural light',

  about: {
    headline: 'Building systems that feel clear, reliable, and a little human.',
    paragraphs: [
      'I’m a Texas A&M CS Honors student (Math + Stats minors, May 2027, GPA 3.74) who likes turning complex infrastructure into experiences people can actually trust. On paper, I’ve built pipelines that handle 40k cases/month at Palo Alto Networks, tuned a high‑throughput mail system for Formula Electric, and helped a research team reach 86% accuracy on BRD detection with LSTMs. In practice, I’m happiest when the interface matches the intent—like my Kodak Portra emulation app where the preview feels as honest as the film.',
    ],
  },

  whyHci: {
    title: 'Why HCI',
    paragraphs: [
      'I’m drawn to HCI because I’ve seen how great engineering can still fall flat when the human story is missing. At Palo Alto Networks, I worked on a Customer 360 analytics platform in Python and React TS, and the hardest part wasn’t throughput—it was making the data feel coherent and actionable for teams handling 40k cases a month. On the Formula Electric team, a mailing system only works if the status, bounces, and queues are legible. Same with the Design Build Fly work: scraping 3,000+ configs and fusing sensors with a Kalman Filter is only valuable if the results can be understood and used.',
      'This class is a chance to connect those dots—pairing my systems background with intentional interaction design. I want to learn how to ask better questions, prototype faster, and validate what users actually experience, not just what my logs say. That shift matters for where I’m headed: I’m joining Citadel’s Commodities engineering team next summer, and I want to build tools where market data feels explorable instead of intimidating.',
    ],
    settings: [
      { label: 'Program', value: 'Texas A&M CS Honors + Math/Stats minors' },
      { label: 'Graduation', value: 'May 2027 • GPA 3.74' },
      { label: 'Location', value: 'College Station, TX' },
    ],
  },

  courseStack: {
    title: 'Course Stack',
    items: [
      {
        name: 'Computer science foundations',
        howItConnects:
          'My CS coursework grounds me in building reliable systems, which is the backbone of responsive, trustworthy interfaces.',
      },
      {
        name: 'Math + statistics minors',
        howItConnects:
          'Stats keeps me honest about evidence and uncertainty—skills that translate directly to user research and evaluation.',
      },
      {
        name: 'Undergraduate research (LSTM BRD detection)',
        howItConnects:
          'Training models to 86% accuracy taught me to balance signal with interpretability, a mindset I want in HCI.',
      },
      {
        name: 'Design Build Fly engineering',
        howItConnects:
          'Scraping 3,000+ configs and applying Kalman Filter fusion showed me how real-world data needs careful presentation.',
      },
      {
        name: 'Formula Electric systems',
        howItConnects:
          'Building a high‑throughput mailing system with Postfix + SPF/DKIM/DMARC made reliability visible, not just real.',
      },
    ],
  },

  careerPath: {
    title: 'Career Path',
    sections: [
      {
        label: 'Now',
        text: 'I’m focused on becoming a stronger product‑minded engineer—someone who can ship high‑scale systems and still sweat the feel of the UI. Recent work spans analytics throughput at Palo Alto Networks, systems reliability for Formula Electric, and research‑grade modeling. I want to pair those strengths with better design instincts and clearer user empathy.',
      },
      {
        label: 'Next',
        text: 'As an incoming Citadel Commodities engineering intern, I’ll be building infrastructure and analytics around market data. My goal is to make those tools more legible and interactive so traders and analysts can move from raw data to confident decisions faster.',
      },
      {
        label: 'North Star',
        text: 'Long term, I want to build products where advanced systems feel approachable—think complex data made calm, precise, and trustworthy. I’m especially interested in developer tools and analytical platforms that respect attention and help people reason clearly.',
      },
    ],
  },

  gallery: {
    title: 'Gallery',
    items: [
      {
        src: galleryKodak,
        alt: 'Screenshot of the Kodak Portra film emulation app interface',
        caption:
          'Kodak Portra film emulation app (Swift/SwiftUI) with real‑time preview pipeline.',
      },
      {
        src: galleryMutualFund,
        alt: 'Screenshot of the Mutual Fund Dashboard web app interface',
        caption:
          'Mutual Fund Dashboard (React/Node/Mongo/Auth0), 1st place at Goldman Sachs EELS.',
      },
    ],
  },

  links: {
    email: 'hole.piyu@gmail.com',
    github: 'github.com/piyushh-11',
    linkedin: 'linkedin.com/in/piyush-hole',
  },
}

