export const siteUrl = "https://jakemonton.com"

export const siteConfig = {
  name: "Jake Monton",
  role: "Software Engineer & Product Lead",
  location: "Brisbane, Australia",
  email: "hello@jakemonton.com",
  linkedin: "https://www.linkedin.com/in/jake-monton-0881373b/",
  github: "https://github.com/jakemonton",
}

// Replace with the real Calendly/Cal.com event URLs once set up —
// see the implementation notes for the two event types to create.
export const bookingLink = {
  project: "https://cal.com/jake-monton-mlq6dt/project-call", // 20-minute "Project call" — homepage + AV page
  quickChat: "https://cal.com/jake-monton-mlq6dt/quick-chat", // 15-minute "Quick chat" — fit-out page
}

// Contact form submissions go to Web3Forms (https://web3forms.com), which emails
// them to you. Get a free access key there and paste it below. Until it's set,
// the form opens the visitor's email app with their answers pre-filled instead.
export const contactForm = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey: "768f37a6-674d-479b-bfcf-cde91c0ccf33",
  subject: "New enquiry from jakemonton.com",
}

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "What I do", href: "/#industries" },
  { label: "About", href: "/#about" },
]

export const footerLinks = [
  { label: "Work", href: "/#work" },
  { label: "Custom software", href: "/custom-software" },
  { label: "AV industry", href: "/av" },
]

export const hero = {
  eyebrow: "Brisbane, Australia · Available for new projects",
  headline: "I build the software businesses",
  headlineAccent: "run on.", // set in italic serif
  subheadline:
    "I'm Jake, a Brisbane engineer and product lead with 15+ years' experience. I help businesses replace clunky processes with software that fits how they work.",
  primaryCta: { label: "Book a call", href: bookingLink.project },
  secondaryCta: { label: "See my work", href: "#work" },
}

// "What I do": the two pillars on the homepage (section id stays #industries)
export const industriesHeading = "Practical software, built around your work."

export const industries = [
  {
    title: "Automate manual work",
    description:
      "Spreadsheets, re-keying and copy-paste workflows turned into software that scales with your team.",
    // Fit-out page is parked in app/_fit-out-quoting. To publish it, rename the
    // folder to app/fit-out-quoting and point this card back to "/fit-out-quoting".
    cta: "See what I can build",
    href: "/custom-software",
  },
  {
    title: "Software for AV",
    description:
      "Touch-panel apps, cloud licensing, device discovery and drivers for AV manufacturers and integrators.",
    cta: "See AV work",
    href: "/av",
  },
]

// "Selected work"
export const work = [
  {
    title: "Touch-panel app suite for a global AV manufacturer",
    description:
      "A suite of meeting-room touch-panel apps covering setup and settings, room booking, kiosk and control, including a modernised 10+ year-old Android room-booking app.",
    role: "Tech lead, then product manager",
  },
  {
    title: "Hybrid-classroom video app rebuild",
    description:
      "A video-distribution app for hybrid university classrooms, rebuilt with automatic NDI discovery. Launch time dropped from 3–5 seconds to under one, with zero reported crashes.",
    role: "Lead developer",
  },
  {
    title: "AES70 device discovery and provisioning",
    description:
      "A local gateway and configurator app that discover AES70 pro-audio devices on a venue's network and connect them to the cloud, so settings like gain can be changed and monitored remotely.",
    role: "Lead developer",
    href: "/work/aes70-device-discovery",
  },
  {
    title: "Product licensing platform",
    description:
      "A licensing platform supporting 300+ active licence seats and around $150K in annual revenue.",
    role: "Full-stack developer, team project",
  },
]

export const services = [
  {
    title: "Custom tools and automation",
    description:
      "Still running on spreadsheets, paper or disconnected software? I build tools that replace the manual work: quoting, scheduling, intake, inventory, reporting, whatever's slowing you down.",
  },
  {
    title: "Product and platform development",
    description:
      "Web apps and cloud platforms, plus desktop and mobile apps for iOS, Android, Windows and Mac, built to be easy to maintain long after launch.",
  },
  {
    title: "Architecture and modernisation",
    description:
      "System design, legacy rebuilds and cloud migrations, with senior support when a product or platform needs to scale.",
  },
  {
    title: "AI prototype to production",
    description:
      "Built something fast with an AI tool? I'll turn it into a secure, reliable product your users can depend on.",
  },
]

export const about = {
  heading: "About me.",
  paragraphs: [
    "Based in Brisbane, I've spent 15+ years building software, most recently as a technical lead and product manager for enterprise AV products, leading distributed teams of 10+ engineers across Australia, the Philippines and Ukraine.",
    "I work best with businesses that know something is slowing them down but aren't sure what the right software looks like yet. I start by understanding how the work actually happens, then build the smallest thing that fixes it properly.",
  ],
}

export const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Custom business tools, product and platform builds, legacy rebuilds and integrations. My deepest experience is in AV software and in replacing spreadsheet-based workflows like quoting.",
  },
  {
    question: "Are you available for contract work?",
    answer:
      "Yes. I take on fixed-scope projects and ongoing contracts, remotely or on-site around Brisbane.",
  },
  {
    question: "Do you work with existing teams, or end-to-end?",
    answer:
      "Both. I can own a project from discovery to launch, or join your team as senior engineering or product capacity.",
  },
  {
    question: "What's your tech stack?",
    answer:
      "TypeScript, React, Next.js, NestJS and Node.js on the web; Kotlin, Flutter, Tauri and Electron for mobile and desktop; PostgreSQL, MySQL, AWS and Docker behind them. I pick tools to fit the problem, not the other way round.",
  },
  {
    question: "Not sure what you need yet?",
    answer:
      "That's fine. I can help you work out whether an idea is feasible, what it should include and roughly what it would cost before anything gets built.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a 20-minute call. We'll talk through what's slowing you down, and I'll tell you honestly whether I'm the right fit.",
  },
]

export const contact = {
  heading: "Let's talk.",
  description:
    "Tell me what's slowing your business down, whether it's a spreadsheet that's outgrown itself, a product that needs building, or a system that needs modernising. I'll get back to you within one business day.",
  cta: { label: "Book a call", href: bookingLink.project },
}

export const avPage = {
  meta: {
    title: "Software for the AV Industry | Jake Monton",
    description:
      "Brisbane engineer and product lead building AV software: touch-panel apps, cloud licensing, device discovery and custom tools for AV teams.",
  },
  hero: {
    eyebrow: "Software for the AV industry · Brisbane, Australia",
    headline: "I build the software behind",
    headlineAccent: "AV products.", // set in italic serif
    subheadline:
      "A decade building software for enterprise AV: touch-panel apps, room booking, device discovery and provisioning, cloud licensing and device drivers. I understand both the code and how AV projects actually get delivered.",
    primaryCta: { label: "Book a call", href: bookingLink.project },
    secondaryCta: { label: "See AV work", href: "#av-work" },
  },
  manufacturerPoints: [
    "Companion and control apps for iOS, Android and Windows touch panels",
    "Cloud platforms for licensing, device management, configuration and RMA",
    "Device drivers and integrations, including AI-assisted driver development",
    "Modernising legacy apps that are slow, crash-prone or hard to maintain",
    "Senior product and technical leadership for your roadmap",
  ],
  integratorPoints: [
    "Custom tools that replace spreadsheets for quoting, commissioning and handover",
    "Device discovery, provisioning and monitoring workflows",
    "Documentation and project data that doesn't live in ten different files",
    "Integrations between the systems your team already uses",
  ],
  work: [
    {
      title: "Touch-panel app suite for a global AV manufacturer",
      description:
        "A suite of meeting-room touch-panel apps covering setup and settings, room booking, kiosk and control, including a modernised 10+ year-old Android room-booking app.",
      role: "Tech lead, then product manager",
      stack: "Kotlin · Jetpack Compose",
    },
    {
      title: "Touch-panel control app rebuild",
      description:
        "A single Flutter codebase replacing the older control apps on iOS, Android and Windows. It's easier to maintain and extend, and part of a wider product refresh that connects the apps to the unified cloud platform below.",
      stack: "Flutter",
    },
    {
      title: "Unified AV cloud platform",
      description:
        "One platform consolidating four legacy systems: licensing, authentication, users, files and device configuration. It's the cloud side of the same product refresh.",
      role: "Architect, team project",
      stack: "Next.js · NestJS · Keygen · AWS",
    },
    {
      title: "Hybrid-classroom video app rebuild",
      description:
        "A video-distribution app for hybrid university classrooms, rebuilt with automatic NDI discovery. Launch time dropped from 3–5 seconds to under one, streams started near-instantly in university testing (previously 5–10 seconds, or not at all), and there were zero reported crashes.",
      role: "Lead developer",
      stack: "Electron · React · NDI",
    },
    {
      title: "AES70 device discovery and provisioning",
      description:
        "A local gateway and configurator app that discover AES70 pro-audio devices on a venue's network and connect them to the cloud, so settings like gain can be changed and monitored remotely.",
      role: "Lead developer",
      stack: "Tauri · React · AES70",
      href: "/work/aes70-device-discovery",
    },
    {
      title: "Product licensing platform",
      description:
        "A licensing platform supporting 300+ active licence seats and around $150K in annual revenue.",
      role: "Full-stack developer, team project",
      stack: "NestJS · Prisma · React",
    },
  ],
  engagement: {
    heading: "How we'd work together.",
    description: "Start with something clearly defined, so you can see how I work before committing to more.",
    steps: [
      {
        title: "An intro call",
        detail: "Free · 20 minutes",
        description:
          "Tell me what you're building and where it's stuck. I'll be straight with you about whether I'm the right fit.",
      },
      {
        title: "A scoped first project",
        detail: "Fixed scope · agreed up front",
        description:
          "A clearly defined piece of work, such as an app rebuild, a device driver or a platform feature, with scope and price agreed before anything starts.",
      },
      {
        title: "Ongoing support",
        detail: "As needed",
        description:
          "Keep me on as hands-on engineering capacity, or as technical or product lead for your roadmap.",
      },
    ],
  },
  howIWork: {
    heading: "Engineer and product lead, in one.",
    description:
      "I've led distributed teams of 10+ engineers, owned roadmaps across six concurrent streams, and been the main client contact turning Statements of Work into release plans. I can join as hands-on engineering capacity, as technical or product lead, or own a project from discovery to release.",
  },
  cta: {
    heading: "Working on an AV product or workflow?",
    description:
      "Whether it's an app that needs rebuilding, a platform that needs scaling, or a manual process your team is sick of, let's talk it through. And if you're an integrator, I'd love to hear what slows your projects down, even if you're not looking to build anything yet.",
    button: { label: "Book a call", href: bookingLink.project },
  },
}

// Public page for local businesses: /custom-software
export const customSoftwarePage = {
  meta: {
    title: "Custom Software and Automation, Brisbane | Jake Monton",
    description:
      "Brisbane engineer building custom business software: tools that replace spreadsheets and manual workflows, connected to the systems you already use.",
  },
  hero: {
    eyebrow: "Custom software for businesses · Brisbane, Australia",
    headline: "Your business has outgrown",
    headlineAccent: "spreadsheets.", // set in italic serif
    subheadline:
      "I build custom tools that replace manual processes, designed around how your team already works and connected to the systems you use.",
    primaryCta: { label: "Book a call", href: bookingLink.project },
    secondaryCta: { label: "What I can build", href: "#what-i-build" },
  },
  problems: {
    heading: "Sound familiar?",
    points: [
      "The same information gets typed into two or three different places",
      "Only one person really understands how the spreadsheet works",
      "Reports take a day to pull together, and they're out of date by Friday",
      "Jobs, quotes or requests slip through the cracks",
      "Your team spends more time on admin than on the actual work",
      "Off-the-shelf software almost fits, but not quite",
    ],
  },
  build: {
    heading: "What I can build.",
    items: [
      {
        title: "Quoting and estimating",
        description:
          "Templates, pricing rules and margins in one place, so quotes are faster, consistent and easy to revise.",
      },
      {
        title: "Job and project tracking",
        description:
          "One view of every job, from enquiry to invoice, instead of a spreadsheet, a whiteboard and someone's memory.",
      },
      {
        title: "Scheduling and bookings",
        description:
          "Staff, equipment and appointments scheduled without double-ups or back-and-forth emails.",
      },
      {
        title: "Client and supplier portals",
        description:
          "Let clients and suppliers submit requests, check progress and download documents themselves.",
      },
      {
        title: "Reporting and dashboards",
        description:
          "The numbers you need, up to date and available whenever you want them, without building them by hand.",
      },
      {
        title: "Connecting your systems",
        description:
          "Link the software you already use, like your accounting, CRM or job system, so data moves automatically instead of being re-keyed.",
      },
    ],
  },
  engagement: {
    heading: "How we'd work together.",
    description: "Start small with the process that costs you the most time, and build from there.",
    steps: [
      {
        title: "A free intro call",
        detail: "Free · 20 minutes",
        description:
          "Tell me how the work happens today and where it gets stuck. I'll be honest about whether custom software is the right fix.",
      },
      {
        title: "A small first build",
        detail: "Fixed scope · agreed up front",
        description:
          "One clearly defined tool that fixes your biggest bottleneck, with scope and price agreed before anything starts.",
      },
      {
        title: "Grow it from there",
        detail: "As needed",
        description:
          "Add to it as your business changes, with ongoing support so it keeps running smoothly.",
      },
    ],
  },
  faqs: [
    {
      question: "How much does a custom tool cost?",
      answer:
        "It depends on what it needs to do. After an intro call I'll give you a fixed price for a clearly defined first build, so you know the cost before anything starts.",
    },
    {
      question: "Do I have to replace the software I already use?",
      answer:
        "Usually not. Often the best fix is a tool that works alongside what you already have, like your accounting or job system, rather than replacing it.",
    },
    {
      question: "How long does it take?",
      answer:
        "A focused first build usually takes a few weeks. Bigger systems are delivered in stages, so your team gets something useful early instead of waiting months.",
    },
    {
      question: "What if I'm not sure software is the answer?",
      answer:
        "That's what the intro call is for. Sometimes an off-the-shelf tool or a better spreadsheet is the right answer, and I'll tell you if it is.",
    },
    {
      question: "Who owns the software?",
      answer: "You do. Once the project is paid for, the code and your data are yours.",
    },
  ],
  cta: {
    heading: "What's slowing your team down?",
    description:
      "Tell me about the process that eats up the most time. I'll get back to you within one business day with honest thoughts on whether, and how, I can help.",
    button: { label: "Book a call", href: bookingLink.project },
  },
}

// Unlisted page for agency outreach: /agencies. Not linked anywhere on the
// site, kept out of the sitemap and marked noindex. Share the link directly.
export const agencyPage = {
  meta: {
    title: "Senior Engineering for Agencies | Jake Monton",
    description:
      "Brisbane software engineer and product lead available to agencies and studios for overflow builds, project rescues and specialist mobile, desktop and device work.",
  },
  hero: {
    eyebrow: "For agencies and studios · Brisbane, Australia",
    headline: "Senior engineering capacity,",
    headlineAccent: "when you need it.", // set in italic serif
    subheadline:
      "I'm Jake, an engineer and product lead with 15+ years shipping web, mobile, desktop and device software. I slot into your projects for overflow, rescues and the specialist work your team doesn't usually cover.",
    primaryCta: { label: "Book a call", href: bookingLink.project },
    secondaryCta: { label: "See recent work", href: "#agency-work" },
  },
  takeOn: {
    heading: "Where I'm most useful.",
    points: [
      "Overflow builds when your team is at capacity",
      "Projects that are stuck, late or hard to maintain",
      "Architecture, estimates and code review on bigger builds",
      "Mobile and desktop apps: Android, Flutter, Electron and Tauri",
      "Hardware, device and AV integrations most web teams don't touch",
      "Turning an AI-built prototype into a production-ready product",
      "Chatbots and OpenAI API integrations",
      "Pulling data out of documents and files into a searchable knowledge base",
    ],
  },
  howIWork: {
    heading: "Easy to bring in.",
    items: [
      {
        title: "Your client, your process",
        description:
          "White-label or under my own name, whichever suits. I work in your repos, your tickets and your standups, and I never approach your clients directly.",
      },
      {
        title: "Flexible capacity",
        description:
          "Part-time, a short sprint or a few weeks full-time, depending on what the project needs. We agree it up front, so you always know what you're getting.",
      },
      {
        title: "Day rate or fixed scope",
        description:
          "Billed by the day for ongoing help, or a fixed price for a well-defined piece of work, agreed before anything starts.",
      },
    ],
  },
  stack: {
    heading: "What I work in.",
    groups: [
      { title: "Web and backend", items: "TypeScript, React, Next.js, NestJS, Node.js" },
      { title: "Mobile and desktop", items: "Kotlin, Jetpack Compose, Flutter, Electron, Tauri" },
      { title: "Data and cloud", items: "PostgreSQL, MySQL, Prisma, AWS, Docker" },
      { title: "AI", items: "OpenAI API, MCP, Claude Code, Codex" },
    ],
  },
  cta: {
    heading: "Got a project that needs another senior pair of hands?",
    description:
      "Tell me what you're working on and when you need help. I'll let you know within one business day whether I can take it on.",
    button: { label: "Book a call", href: bookingLink.project },
  },
}

export const fitOutPage = {
  meta: {
    title: "Quoting Systems for Fit-Out Companies | Jake Monton",
    description:
      "Replace your quoting spreadsheet. Quoting systems for commercial kitchen and fit-out companies, with templates, margins, revisions and PDF quotes.",
  },
  hero: {
    eyebrow: "Quoting systems for fit-out companies · Brisbane, Australia",
    headline: "Still building quotes in a spreadsheet that's grown",
    headlineAccent: "out of control?", // set in italic serif
    subheadline:
      "I build quoting systems for fit-out businesses: room and area templates, equipment schedules, margins, revisions and clean PDF quotes, connected to the systems you already use.",
    primaryCta: { label: "Book a 15-minute chat", href: bookingLink.quickChat },
    secondaryCta: { label: "How it works", href: "#how-it-works" },
  },
  problems: [
    "Every quote starts by copying the last one and hoping nothing breaks",
    "Only one or two people really understand how the spreadsheet works",
    "Supplier prices change, and old quotes quietly go out of date",
    "You can't easily see the margin on a job until it's too late",
    "Revisions pile up as v3, v3-final and v3-final-FINAL",
    "Won quotes get retyped into your accounting or job system",
  ],
  howItWorks: [
    {
      title: "Templates for the rooms and areas you build",
      description:
        "Start a commercial kitchen, servery, cool room or bar from a template with the usual equipment and labour already in it, then adjust.",
    },
    {
      title: "One price list, always current",
      description:
        "Products, suppliers and pricing live in one place, so every quote uses the same numbers.",
    },
    {
      title: "Margin you can see",
      description:
        "Cost, sell price and margin per line, per area and per job, before the quote goes out.",
    },
    {
      title: "Revisions without the mess",
      description:
        "Every version is kept and comparable, so you always know what the client saw.",
    },
    {
      title: "Professional quotes in one click",
      description: "Branded PDF quotes with your inclusions, exclusions and terms.",
    },
    {
      title: "Connected to the rest of your business",
      description:
        "Won quotes flow into your accounting, ERP or job management system instead of being retyped.",
    },
  ],
  engagement: {
    heading: "How we'd work together.",
    description: "Small steps, so you only commit once you've seen it working on your own jobs.",
    steps: [
      {
        title: "A quick chat",
        detail: "Free · 15 minutes",
        description:
          "Walk me through how your team puts a quote together today. I'll tell you honestly whether a quoting system would help, and point out where time and margin are slipping either way.",
      },
      {
        title: "A focused pilot",
        detail: "Fixed scope · fixed price",
        description:
          "We pick your most common job type, like a café kitchen, and I build a working quoting tool around it: your price list, your templates, your PDF. Scope and price are agreed up front.",
      },
      {
        title: "Roll it out",
        detail: "When you're ready",
        description:
          "Once your team is quoting with it, we add the rest: more templates, revisions, and connections to your accounting or job system.",
      },
    ],
  },
  proof: {
    heading: "Built for fit-outs, not generic sales.",
    description:
      "I'm currently helping a fit-out company replace a large manual spreadsheet with a more flexible platform, connected to the business systems they already use. It's backed by 15+ years of building production software, including platforms that bring in real revenue.",
  },
  whoItsFor: {
    heading: "Made for project-based fit-out businesses.",
    aside: "Not in fit-outs? The same approach works for any process that's outgrown its spreadsheet.",
    asideLink: { label: "Tell me about yours", href: "#contact" },
    description:
      "Commercial kitchen fit-outs and stainless fabrication, hospitality and food-service equipment suppliers, healthcare and lab fit-outs, and other businesses that quote rooms, equipment and installation as projects.",
  },
  cta: {
    heading: "Let's look at how your team quotes.",
    description:
      "Start with a free 15-minute chat about how your team puts quotes together today and what's painful about it. If there's a fit, we'll talk about a pilot. If not, you'll still leave with a few ideas.",
    button: { label: "Book a 15-minute chat", href: bookingLink.quickChat },
  },
}

// Case study: /work/aes70-device-discovery. Client details kept anonymous.
export const aes70CaseStudy = {
  meta: {
    title: "AES70 Device Discovery Case Study | Jake Monton",
    description:
      "How a local gateway and configurator app discover AES70 pro-audio devices on a venue network and connect them to the cloud for remote control.",
  },
  eyebrow: "Case study · AV",
  title: "AES70 device discovery",
  titleAccent: "and cloud control.",
  summary:
    "A local gateway that finds AES70 pro-audio devices on a venue's network and connects them to a cloud platform, so the team can adjust and monitor them from anywhere.",
  facts: [
    { label: "Role", value: "Lead developer" },
    { label: "Built", value: "Local gateway, configurator app and cloud integration" },
    { label: "Stack", value: "Tauri · React · AES70" },
    { label: "Industry", value: "Professional audio and AV" },
  ],
  problem: {
    heading: "The devices were only reachable on site.",
    paragraphs: [
      "Professional-audio devices like DSPs, amplifiers and microphone arrays speak AES70, a control protocol that works on the local network they're installed on.",
      "That meant checking a device or adjusting a setting like gain needed someone on that network with the right software. The goal was to make those devices visible and controllable from a cloud platform instead.",
    ],
  },
  solution: {
    heading: "A local gateway that bridges the network to the cloud.",
    paragraphs: [
      "I built a gateway that runs on the venue's network. It scans for AES70-compatible devices, then registers and provisions each one with the cloud platform.",
      "Alongside it, I built a configurator app for setting the gateway up on site: its network settings, starting and stopping it, and its connection to the device cloud platform.",
      "From there, the cloud platform can monitor the devices and send changes back through the gateway, which applies them to the device over AES70.",
    ],
  },
  diagram: {
    caption: "How a device gets from the venue network to remote control.",
  },
  steps: [
    {
      title: "Set up and discover",
      description:
        "On site, the configurator sets up the gateway's network and cloud connection. The gateway then scans the local network and finds every AES70-compatible device on it.",
    },
    {
      title: "Register and provision",
      description: "Each device is published to the cloud platform, so it appears in one place, ready to manage.",
    },
    {
      title: "Control and monitor remotely",
      description:
        "Changes made in the cloud, like adjusting a gain, are sent through the gateway and applied to the device. Its status flows back the same way.",
    },
  ],
  outcome: {
    heading: "What it made possible.",
    description:
      "Devices on a venue's network could be monitored and adjusted from the cloud platform, without someone on site or connected to that network.",
  },
  cta: {
    heading: "Working on connected AV devices?",
    description:
      "Discovery, provisioning, remote control and monitoring are problems I've solved before. Let's talk about yours.",
    button: { label: "Book a call", href: bookingLink.project },
  },
}

