// gitprofile.config.js

const config = {
  github: {
    username: 'jjnanthakumar', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'nanthakumarjj',
    twitter: '',
    facebook: '',
    instagram: 'jjnanthakumar',
    dribbble: '',
    behance: '',
    medium: 'jjnanthakumar',
    dev: '',
    website: 'https://jjnanthakumar.github.io',
    phone: '',
    email: 'jjnanthakumar477@gmail.com',
  },
  skills: [
    'Python',
    'C#',
    'Git',
    'JavaScript',
    'React.js',
    'Node.js',
    'SQL',
    'Docker',
    'CSS3',
    'HTML5',
    'Bootstrap',
  ],
  experiences: [
    {
      company: "UB Technology Innovations",
      position: "Junior Software Engineer",
      description: "Currently Working on Azure DevOps and Azure Synapse Solution.",
      location: "Remote",
      status: "COMPLETED",
      from: "October 2021",
      to: "March 2022",
      credentialid: "None",
      credentialurl: null
    },
    {
      company: "UB Technology Innovations",
      position: "Software Engineer Trainee",
      description: "Worked on Analytics in a Day Event, Azure Devops and Hackathon Solution.",
      location: "Remote",
      status: "COMPLETED",
      from: "July 2021",
      to: "September 2021",
      credentialid: "None",
      credentialurl: null
    },
    {
      company: "UB Technology Innovations",
      position: "Internship Trainee",
      description: "Worked on Azure Synapse Hackathon and implemented Devops for Azure Synapse.",
      location: "Remote",
      status: "COMPLETED",
      from: "March 2021",
      to: "June 2021",
      credentialid: "None",
      credentialurl: null
    },
    {
      company: "Piblitz",
      position: "Django Developer",
      description: "I have worked on simple and complex tasks in which I gained a lot of knowledge and communication skills. They gave me all kinds of tasks like backend and also front end, before getting into work I thought that JavaScript is not necessary when we work on Django Framework, then after getting into work I realized that JavaScript is necessary for developing Interactive Websites. It was an amazing journey.",
      location: "Remote",
      status: "COMPLETED",
      from: "November 2020",
      to: "January 2021",
      credentialid: "None",
      credentialurl: "https://github.com/jjnanthakumar/Certificates-softcopy/blob/main/Piblitz%20Intern%20cert.pdf"
    },
    {
      company: "Tech Nerds",
      position: "Campus Ambassador",
      description: "Learned digital and social media marketing.",
      location: "Remote",
      status: "COMPLETED",
      from: "November 2020",
      to: "December 2020",
      credentialid: "None",
      credentialurl: "https://github.com/jjnanthakumar/Certificates-softcopy/blob/main/Tech%20Nerds%20CA.pdf"
    },
    {
      company: "COLCO",
      position: "Campus Ambassador",
      description: "Learned digital and social media marketing.",
      location: "Remote",
      status: "COMPLETED",
      from: "October 2020",
      to: "November 2020",
      credentialid: "None",
      credentialurl: "https://github.com/jjnanthakumar/Certificates-softcopy/blob/main/Campus%20Ambassador%20Intern%20COLCO.pdf"
    },
    {
      company: "Networkz System",
      position: "Intern",
      description: "Got an Wonderful Experience in Networkz System. In that company I worked on some mini projects using Arduino(Robotics)",
      location: "Madurai",
      status: "COMPLETED",
      from: "November 2018",
      to: "December 2018",
      credentialid: "None",
      credentialurl: "https://github.com/jjnanthakumar/Certificates-softcopy/blob/main/networkz%20system%20intern.pdf"
    }
  ],
  education: [
    {
      institution: 'Panimalar Engineering College',
      degree: 'Bachelor of Engineering',
      from: '2017',
      to: '2021',
    },
    {
      institution: 'Tagore Vidyalayam Matriclation Hr. Sec. School',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2016',
      to: '2017',
    },
    {
      institution: 'Tagore Vidyalayam Matriclation Hr. Sec. School',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      from: '2014',
      to: '2015',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'jjnanthakumar',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
