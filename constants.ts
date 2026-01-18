
import { EraYear, EraMetadata, QuizQuestion } from './types';

export const ERAS: EraMetadata[] = [
  {
    year: 1995,
    title: "The Web 1.0 Dawn",
    description: "The internet was a collection of static pages, connected by blue links on gray backgrounds.",
    techKeywords: ["HTML 2.0", "Dial-up", "GIFs", "Netscape"],
    vibe: "Brutalist & Functional",
    techStack: ["CGI-BIN", "Perl", "Tables for Layout", "Image Maps"],
    milestones: ["Amazon.com launches", "JavaScript (LiveScript) created", "Windows 95 released"],
    popularSites: ["Yahoo!", "Altavista", "AOL", "Geocities"],
    funFacts: ["The first banner ad had a 44% click-through rate.", "Google was still a research project called BackRub."],
    designPalette: ["#c0c0c0", "#000080", "#ffffff", "#000000"]
  },
  {
    year: 2000,
    title: "The Y2K Boom",
    description: "The era of the dot-com bubble, flashy animations, and the rise of the personal home page.",
    techKeywords: ["Flash", "ASP", "Geocities", "IE 5.5"],
    vibe: "Techno-Optimism",
    techStack: ["ActionScript 1.0", "ColdFusion", "Classic ASP", "DHTML"],
    milestones: ["The Dot-com Bubble bursts", "Google becomes top search engine", "First camera phone"],
    popularSites: ["MSN", "eBay", "Napster", "Hotmail"],
    funFacts: ["The Y2K bug cost the world roughly $300 billion to 'fix'.", "Google handled 100 million searches a day."],
    designPalette: ["#e0eafc", "#001f3f", "#39cccc", "#ff851b"]
  },
  {
    year: 2005,
    title: "Web 2.0 & Social",
    description: "The web became a platform. User-generated content and social networks changed everything.",
    techKeywords: ["AJAX", "RSS", "Ruby on Rails", "jQuery"],
    vibe: "Glossy & Interactive",
    techStack: ["PHP 5", "Prototype.js", "MySQL", "XML"],
    milestones: ["YouTube founded", "Facebook opens to public", "Reddit launches"],
    popularSites: ["MySpace", "Flickr", "Digg", "Wikipedia"],
    funFacts: ["The first YouTube video was 'Me at the zoo'.", "The term 'Web 2.0' was popularized by Tim O'Reilly."],
    designPalette: ["#f0f0f0", "#1e5799", "#7db9e8", "#ff6600"]
  },
  {
    year: 2010,
    title: "The Mobile Shift",
    description: "Smartphones changed the web forever. Responsive design became the new standard.",
    techKeywords: ["HTML5", "Responsive Design", "Bootstrap", "Webfonts"],
    vibe: "Grid-Based & Corporate",
    techStack: ["CSS3 Media Queries", "jQuery 1.4", "Backbone.js", "Sass"],
    milestones: ["Instagram launches", "First iPad released", "Chrome overtakes Firefox"],
    popularSites: ["Twitter", "Pinterest", "Tumblr", "Netflix"],
    funFacts: ["Instagram hit 1 million users in just two months.", "Mobile web traffic overtook desktop for the first time in some regions."],
    designPalette: ["#ffffff", "#007bff", "#1a1a1a", "#f8f9fa"]
  },
  {
    year: 2015,
    title: "Material & Flat",
    description: "Minimalism, bold colors, and unified design languages like Google's Material Design.",
    techKeywords: ["React", "Flexbox", "Material Design", "Flexibility"],
    vibe: "Minimalist & Clean",
    techStack: ["React 0.14", "Webpack", "Babel", "Gulp"],
    milestones: ["ES6 released", "Apple Watch launched", "HTTPS becomes standard"],
    popularSites: ["Slack", "Uber", "Airbnb", "Spotify"],
    funFacts: ["Over 50% of web traffic was now mobile.", "The 'hamburger menu' became a polarizing design icon."],
    designPalette: ["#fafafa", "#6200ee", "#03dac6", "#3700b3"]
  },
  {
    year: 2020,
    title: "Dark Mode & Glass",
    description: "Immersive experiences, glassmorphism, and the rise of remote-first digital tools.",
    techKeywords: ["Next.js", "Tailwind", "Vercel", "WASM"],
    vibe: "Modern & Immersive",
    techStack: ["Next.js 10", "Tailwind CSS 2.0", "TypeScript", "ESLint"],
    milestones: ["Remote work explosion", "Rise of TikTok", "GPT-3 released"],
    popularSites: ["Zoom", "Discord", "Notion", "Figma"],
    funFacts: ["Tailwind CSS became the most-loved CSS framework.", "Dark mode became a default feature for almost all apps."],
    designPalette: ["#020617", "#6366f1", "#d946ef", "#f8fafc"]
  },
  {
    year: 2025,
    title: "AI-Native Web",
    description: "The web is now a collaborative canvas between humans and AI agents.",
    techKeywords: ["AI Agents", "Bento Grid", "Vibe Coding", "LLMs"],
    vibe: "Futuristic & Adaptive",
    techStack: ["Vibe Coding", "Edge RAG", "WebGPU", "Agentic UI"],
    milestones: ["First fully AI-generated web app", "AR replaces smartphones", "Real-time web translation"],
    popularSites: ["ChatGPT-5", "Claude.ai", "Perplexity", "Midjourney"],
    funFacts: ["90% of web code is now generated or assisted by AI.", "Websites now adapt their entire layout to the user's intent in real-time."],
    designPalette: ["#ffffff", "#000000", "#f5f5f7", "#6e6e73"]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    year: 1995,
    question: "Which browser dominated the market in 1995?",
    options: ["Chrome", "Netscape Navigator", "Internet Explorer", "Opera"],
    correctAnswer: 1,
    explanation: "Netscape Navigator was the king of the early web before the Browser Wars truly began."
  },
  {
    id: 2,
    year: 1995,
    question: "What was the most common background color for websites in 1995?",
    options: ["White", "Black", "Gray (#c0c0c0)", "Blue"],
    correctAnswer: 2,
    explanation: "Standard browser defaults set the background to a light gray, which became the 'look' of Web 1.0."
  },
  {
    id: 3,
    year: 1995,
    question: "What tag was notoriously used to make text move across the screen in 1995?",
    options: ["<move>", "<marquee>", "<slide>", "<animate>"],
    correctAnswer: 1,
    explanation: "The <marquee> tag was a non-standard HTML element which caused text to scroll horizontally across the screen."
  },
  {
    id: 4,
    year: 2000,
    question: "What service allowed users to create personal 'homesteads' in themed neighborhoods?",
    options: ["GeoCities", "MySpace", "Blogger", "Wix"],
    correctAnswer: 0,
    explanation: "GeoCities was huge, allowing users to host sites in 'neighborhoods' like SiliconValley or Hollywood."
  },
  {
    id: 5,
    year: 2000,
    question: "Which animation technology made web menus 'come alive' in 2000?",
    options: ["Flash", "SVG", "Canvas", "WebGL"],
    correctAnswer: 0,
    explanation: "Macromedia Flash was the industry standard for animations and interactive intros."
  },
  {
    id: 6,
    year: 2000,
    question: "The 'Y2K Bug' was a fear that computers wouldn't handle which transition?",
    options: ["1999 to 2000", "Windows 95 to 98", "Dial-up to DSL", "Analog to Digital"],
    correctAnswer: 0,
    explanation: "There was widespread fear that software storing years as two digits would fail when transitioning from 99 to 00."
  },
  {
    id: 7,
    year: 2005,
    question: "What does AJAX stand for?",
    options: ["Advanced JavaScript and XML", "Asynchronous JavaScript and XML", "All JavaScript and XSLT", "Auto-update JavaScript and XHTML"],
    correctAnswer: 1,
    explanation: "AJAX allowed web pages to update content without a full page refresh."
  },
  {
    id: 8,
    year: 2005,
    question: "Which social network was the most popular in the world in 2005?",
    options: ["Facebook", "MySpace", "Friendster", "LinkedIn"],
    correctAnswer: 1,
    explanation: "Before Facebook went global, MySpace was the dominant social force on the web."
  },
  {
    id: 9,
    year: 2005,
    question: "Which video sharing site was founded in 2005?",
    options: ["Vimeo", "YouTube", "DailyMotion", "Metacafe"],
    correctAnswer: 1,
    explanation: "YouTube was founded in February 2005 and quickly became the internet's video hub."
  },
  {
    id: 10,
    year: 2010,
    question: "What CSS feature allowed designs to adapt to screen sizes in 2010?",
    options: ["Flexbox", "CSS Grid", "Media Queries", "Tables"],
    correctAnswer: 2,
    explanation: "Media queries are the backbone of Responsive Web Design."
  },
  {
    id: 11,
    year: 2010,
    question: "Which browser finally overtook Internet Explorer in usage during this era?",
    options: ["Firefox", "Safari", "Chrome", "Edge"],
    correctAnswer: 2,
    explanation: "Google Chrome's speed and simplicity led it to dominate the market by the early 2010s."
  },
  {
    id: 12,
    year: 2010,
    question: "Steve Jobs famously wrote an open letter 'Thoughts on...' which web technology?",
    options: ["Silverlight", "Java", "Flash", "HTML5"],
    correctAnswer: 2,
    explanation: "His letter explained why Apple would not support Flash on iOS, accelerating its decline."
  },
  {
    id: 13,
    year: 2015,
    question: "Google's 2014 design language, which used shadows and cards, is called what?",
    options: ["Flat Design", "Material Design", "Metro UI", "Glassmorphism"],
    correctAnswer: 1,
    explanation: "Material Design introduced a physical metaphor to digital interfaces."
  },
  {
    id: 14,
    year: 2015,
    question: "Which JavaScript library became the most popular for building UIs around 2015?",
    options: ["jQuery", "React", "AngularJS", "Vue"],
    correctAnswer: 1,
    explanation: "React's component-based architecture and Virtual DOM changed frontend development."
  },
  {
    id: 15,
    year: 2015,
    question: "The term 'Single Page Application' (SPA) refers to a site that...",
    options: ["Only has one page ever", "Never updates content", "Rewrites the current page rather than loading new ones", "Is built with only HTML"],
    correctAnswer: 2,
    explanation: "SPAs like those built with React/Vue provide a smoother, app-like experience by only updating parts of the DOM."
  },
  {
    id: 16,
    year: 2020,
    question: "The trend of using background blur and transparency in UI is known as...",
    options: ["Neumorphism", "Skeuomorphism", "Glassmorphism", "Brutalism"],
    correctAnswer: 2,
    explanation: "Glassmorphism creates a 'frosted glass' look that became very popular in macOS and Windows."
  },
  {
    id: 17,
    year: 2020,
    question: "Which utility-first CSS framework exploded in popularity during 2020?",
    options: ["Sass", "Bootstrap", "Tailwind CSS", "Bulma"],
    correctAnswer: 2,
    explanation: "Tailwind CSS changed how developers think about styling by using utility classes."
  },
  {
    id: 18,
    year: 2020,
    question: "Which design tool became the industry standard for UI/UX during this time?",
    options: ["Photoshop", "Sketch", "Figma", "InVision"],
    correctAnswer: 2,
    explanation: "Figma's web-based collaborative features made it the dominant choice for design teams."
  },
  {
    id: 19,
    year: 2025,
    question: "What is 'Vibe Coding'?",
    options: ["Coding while listening to Lo-Fi", "Natural language programming with AI", "Color-coded logic", "Emoji-based syntax"],
    correctAnswer: 1,
    explanation: "Vibe coding refers to using LLMs to generate code by describing intent in natural language."
  },
  {
    id: 20,
    year: 2025,
    question: "A layout style inspired by Japanese lunch boxes is called a...",
    options: ["Sushi Grid", "Bento Grid", "Ramen Layout", "Mochi UI"],
    correctAnswer: 1,
    explanation: "The Bento Grid layout uses modular, card-based boxes to organize information beautifully."
  },
  {
    id: 21,
    year: 2025,
    question: "In the 2025 AI-native web, interfaces that change based on user context are called...",
    options: ["Static UI", "Adaptive UI", "Agentic UI", "Frozen UI"],
    correctAnswer: 2,
    explanation: "Agentic UI refers to interfaces that are generated or significantly modified on-the-fly by AI agents."
  }
];
