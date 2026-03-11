const projects = [
  {
    title: "Capstone Project - Mobile App & Cloud Server",
    description: "Cross-platform file syncing app",
    tech: ["React Native", "Flask", "Rclone"],
    tags: ["Client Project", "Mobile", "Full-Stack"],
    featured: true,
    github: "",
    demo: "",
    details: String.raw`
Served as Tech Lead on a full-stack file sync app built for a real-world client, *Sweep*.  
Developed the backend API using Flask, implemented OAuth login with Google and Dropbox, and optimized the Android experience in React Native.

**Tech Stack:**

-   React Native
    
-   Flask
    
-   Rclone
    
-   OAuth2 (Google, Dropbox)
`,
  },
  {
    title: "Chopperbot",
    description: "Self-Hosted Conversational Discord bot with LLM integrations",
    tech: ["Python", "Discord.py", "OpenAI", "KoboldCPP"],
    tags: ["AI", "Backend", "Self-Hosted"],
    featured: false,
    github: "https://github.com/rplasc/ChopperBot",
    demo: "",
    details: `
Created a multipurpose Discord bot in Python with ChatGPT integration.  
Uses local LLM to enable dynamic chat interactions with customizable conversation personalities and a complex memory system.

**Tech Stack:**

-   Python

-   Discord.py

-   KoboldCPP

-   OpenAI API
`,
  },
  {
    title: "Image Editor",
    description: "Image editor developed in C++ and QT Framework",
    tech: ["C++", "Qt Framework"],
    tags: ["Backend"],
    featured: false,
    github: "https://github.com/rplasc/CSE165Project",
    demo: "",
    details:`
Developed an image editor using C++ and the Qt framework.  
Implemented core functionality including cropping, resizing, rotation, and color adjustments with a custom UI.

**Tech Stack:**

-   Qt Framework

-   C++
    `,
  }
];

export default projects;
