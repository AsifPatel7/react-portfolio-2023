import {
    mobile,
    backend,
    web,
    javascript,
    bootstrap,
    sass,
    html,
    css,
    reactjs,
    ror,
    ruby,
    php,
    git,
    gitlab,
    canva,
    tu,
    tgs,
    innobits,
    threejs,
    udemy,
    bmi,
    wix,
    editorx,
    enstore,
    otpxpress,
    techunicorns,
    chopserve,
    mkretail,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "SaSS",
      icon: sass,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Ruby",
      icon: ruby,
    },
    {
      name: "Ruby on Rails",
      icon: ror,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Wix",
      icon: wix,
    },
    {
      name: "Editor X",
      icon: editorx,
    },
    {
      name: "gitlab",
      icon: gitlab,
    },
    {
      name: "Canva",
      icon: canva,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Tricky Global Solutions",
      icon: tgs,
      iconBg: "#383E56",
      date: "March 2019 - May 2020",
      points: [
        "Learned creating web applications using Php, html, css.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Technovation Unicorns",
      icon: tu,
      iconBg: "#383E56",
      date: "October 2019 - October 2020",
      points: [
        "Developing and maintaining web applications using HTML5, CSS3, PHP, Bootstrap, JavaScript",
        "Learned responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Innobits Solutions",
      icon: innobits,
      iconBg: "#E6DEDD",
      date: "Feb 2021 - Present",
      points: [
        "Developing and maintaining web applications using Ruby on Rails, JavaScript, Bootstrap, Sass and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Udemy",
      description:
        "Web-based platform that allows users to search, purchase, and manage educational courses for learning purpose.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: udemy,
      source_code_link: "https://github.com/Asifpatel07/ols",
    },
    {
      name: "BMI-Calculator-Flutter",
      description:
        "Mobile application that check BMI of your body.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
      ],
      image: bmi,
      source_code_link: "https://github.com/Asifpatel07/BMI-Calculator-Flutter",
    },
    {
      name: "Techunicorns",
      description:
        "Technovation Unicorns is a technology conglomerate which is committed to address the real world challenges around the people & industries by putting best in class technology solutions & human touch.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image: techunicorns,
      source_code_link: "techunicorns.in",
    },
    {
      name: "Otpxpress",
      description:
        "Platform offering farm-fresh vegetables. It offers onion, potatoes, tomatoes, and more. The company provides doorstep delivery in 30 mins",
      tags: [
        {
          name: "Wix Platform",
          color: "blue-text-gradient",
        },
      ],
      image: otpxpress,
      website_link: "otpxpress.in",
    },
    {
      name: "Enstore",
      description:
        "enstore is the Unified Omnichannel Commerce Platform providing seamless shopping experience on web, mobile, whatsapp and in the stores with fully integrated live inventory, procurement & production and intelligent analytics with offers, promotions & multichannel marketing.",
      tags: [
        {
          name: "Editorx Platform",
          color: "blue-text-gradient",
        },
      ],
      image: enstore,
      source_code_link: "enstore.com",
    },
    {
      name: "Chopserve",
      description:
        "We aim to offer fresh, clean meat at the right price to all customers. We work directly with fishermen and farmers across India to ensure freshness and quality of the produce",
      tags: [
        {
          name: "Ruby on Rails",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        
      ],
      image: chopserve,
      source_code_link: "chopserve.com",
    },
    {
      name: "MK Retail",
      description:
        "With more than 12,000 items and over 1000 brands on our list, you will discover all that you are searching for.<br/> Appropriate from new Fruits and Vegetables, Rice and Lentils, Spices and Seasonings to Packaged items, Beverages, Stationery, Plasticware, Kitchenware, Personal consideration items- We have everything with Superfast Delivery",
      tags: [
        {
          name: "Ruby on Rails",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        
      ],
      image: mkretail,
      source_code_link: "mkretail.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };