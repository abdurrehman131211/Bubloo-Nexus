import imgChemistry from "@/assets/img-chemistry.jpg";
import imgBiology from "@/assets/img-biology.jpg";
import imgTech from "@/assets/img-tech.jpg";
import imgSpace from "@/assets/img-space.jpg";
import imgCreative from "@/assets/img-creative.jpg";
import heroVisual from "@/assets/hero-visual.jpg";

export const SITE = {
  name: "Bubloo Scientist",
  tagline: "Explore. Learn. Create.",
  description:
    "Discover science, technology, creativity and ideas that turn curiosity into knowledge.",
  legacyUrl: "https://www.bublooscientist.com",
  whatsappChannel: "https://whatsapp.com/channel/0029VbCF7Kx4Spk7XHI0sU1e",
  contactPage: "https://www.bublooscientist.com/contact/",
  quizzes: "https://www.bublooscientist.com/quiz-and-survey/",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61574031254178",
    instagram: "https://www.instagram.com/abdurrehmansiddiqui2011/",
  },
};

export const IMAGES = { heroVisual, imgChemistry, imgBiology, imgTech, imgSpace, imgCreative };

export type SubjectSlug =
  | "physics"
  | "chemistry"
  | "biology"
  | "mathematics"
  | "computer-science";

export type Subject = {
  slug: SubjectSlug;
  name: string;
  icon: "atom" | "flask" | "dna" | "sigma" | "code";
  short: string;
  description: string;
  topics: string[];
  image: string;
};

export const SUBJECTS: Subject[] = [
  {
    slug: "physics",
    name: "Physics",
    icon: "atom",
    short: "Forces, energy, motion and the laws of the universe.",
    description:
      "Explore forces, energy, motion, electricity, space and the laws governing our universe.",
    topics: ["Motion & Forces", "Energy", "Electricity", "Light & Waves", "Space & Gravity"],
    image: heroVisual,
  },
  {
    slug: "chemistry",
    name: "Chemistry",
    icon: "flask",
    short: "Matter, reactions, elements and everyday chemistry.",
    description:
      "Discover matter, reactions, elements, compounds and the chemistry behind everyday life.",
    topics: ["States of Matter", "Atoms & Elements", "Reactions", "Acids & Bases", "Compounds"],
    image: imgChemistry,
  },
  {
    slug: "biology",
    name: "Biology",
    icon: "dna",
    short: "Cells, genetics, ecosystems and life itself.",
    description: "Explore living organisms, cells, genetics, ecosystems and life itself.",
    topics: [
      "Characteristics of Life",
      "Cells",
      "Digestion & Nutrition",
      "Genetics",
      "Ecosystems",
    ],
    image: imgBiology,
  },
  {
    slug: "mathematics",
    name: "Mathematics",
    icon: "sigma",
    short: "Concepts, problems and logical reasoning.",
    description: "Build mathematical thinking through concepts, problems and logical reasoning.",
    topics: ["Numbers", "Algebra", "Geometry", "Problem Solving", "Logic"],
    image: imgTech,
  },
  {
    slug: "computer-science",
    name: "Computer Science",
    icon: "code",
    short: "Coding, AI, websites and emerging technology.",
    description:
      "Explore coding, programming, artificial intelligence, websites and emerging technologies.",
    topics: ["Python Basics", "Web Development", "AI & Chatbots", "Algorithms", "New Tech"],
    image: imgTech,
  },
];

export type Resource = {
  title: string;
  category: string;
  description: string;
  minutes: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  href: string;
  external?: boolean;
};

export const RESOURCES: Resource[] = [
  {
    title: "What is Chemistry?",
    category: "Chemistry",
    description:
      "A student's honest look at what chemistry really studies, written after five years with the subject.",
    minutes: 6,
    level: "Beginner",
    href: "/blogs/what-is-chemistry",
  },
  {
    title: "Characteristics of Living Things",
    category: "Biology",
    description:
      "The seven characteristics shared by every living organism, with clear examples including mutation.",
    minutes: 5,
    level: "Beginner",
    href: "/blogs/characteristics-of-living-things",
  },
  {
    title: "Digestion and Absorption",
    category: "Biology",
    description:
      "How large, insoluble food molecules become smaller, soluble ones — and the types of digestion.",
    minutes: 7,
    level: "Intermediate",
    href: "/blogs/digestion-and-absorption",
  },
  {
    title: "Creating New Things With Code",
    category: "Computer Science",
    description: "Notes from learning Python and shipping a first working program.",
    minutes: 4,
    level: "Beginner",
    href: "/blogs/creating-new-with-coding",
  },
  {
    title: "Science Quizzes & Surveys",
    category: "Quizzes",
    description: "Test what you know and tell us which topics we should cover next.",
    minutes: 10,
    level: "Beginner",
    href: SITE.quizzes,
    external: true,
  },
  {
    title: "Ask the Science Companion",
    category: "AI Chatbot",
    description:
      "Our chatbot explains difficult science ideas in simple language, whenever you get stuck.",
    minutes: 2,
    level: "Beginner",
    href: "/chatbot",
  },
];

export type Discovery = {
  title: string;
  category: "Space" | "Human Body" | "Physics" | "Chemistry" | "Technology" | "Nature";
  fact: string;
  image?: string;
};

export const DISCOVERIES: Discovery[] = [
  {
    title: "Rings Are Temporary",
    category: "Space",
    fact: "Planetary rings are made of countless ice and rock fragments, and slowly rain down onto the planet over millions of years.",
    image: imgSpace,
  },
  {
    title: "Your Cells Rebuild You",
    category: "Human Body",
    fact: "Billions of cells in your body are replaced every day, so much of the material in you is only weeks old.",
    image: imgBiology,
  },
  {
    title: "Light Is Both",
    category: "Physics",
    fact: "Light behaves as a wave and as a stream of particles, depending on how you choose to measure it.",
  },
  {
    title: "Water Is Strange",
    category: "Chemistry",
    fact: "Almost every substance shrinks when it freezes. Water expands, which is why ice floats and lakes freeze from the top.",
    image: imgChemistry,
  },
  {
    title: "Models That Learn",
    category: "Technology",
    fact: "Modern AI systems are not programmed with rules — they adjust millions of numbers until their predictions get better.",
    image: imgTech,
  },
  {
    title: "Trees Talk",
    category: "Nature",
    fact: "Forests exchange nutrients and chemical signals through underground fungal networks connecting their roots.",
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  href: string;
  image?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "motorsports-website",
    name: "Motorsports Website",
    category: "Web Development",
    description:
      "A dedicated motorsports site built from scratch — layout, content and publishing handled in-house by the Bubloo team.",
    tech: ["Web Design", "Content", "CSS"],
    href: "https://www.bublooscientist.com/2025/07/14/motorsports-website/",
    image: imgTech,
    featured: true,
  },
  {
    slug: "science-chatbot",
    name: "Science Chatbot",
    category: "AI",
    description:
      "A chatbot built to help readers understand science topics and answer questions about the website.",
    tech: ["AI", "Chatbot"],
    href: "/chatbot",
    image: imgCreative,
  },
  {
    slug: "my-new-project",
    name: "My New Project",
    category: "Experiment",
    description: "A new build shared with the community as it was being developed.",
    tech: ["Web", "Prototype"],
    href: "https://www.bublooscientist.com/2025/02/14/my-new-project/",
    image: imgChemistry,
  },
  {
    slug: "entrepreneurship-series",
    name: "Entrepreneurship Series",
    category: "Business",
    description:
      "A four-part written journey documenting starting a business, from first idea to final reflection.",
    tech: ["Writing", "Business"],
    href: "https://www.bublooscientist.com/my-business/",
    image: imgSpace,
  },
  {
    slug: "python-programs",
    name: "Python Programs",
    category: "Coding",
    description: "Small Python programs written while learning to code, shared openly on the blog.",
    tech: ["Python"],
    href: "/blogs/creating-new-with-coding",
    image: imgBiology,
  },
];

export type CreativeItem = {
  title: string;
  kind: string;
  image: string;
  span?: "tall" | "wide" | "normal";
};

export const CREATIVE: CreativeItem[] = [
  { title: "Light & Refraction Study", kind: "Design", image: imgCreative, span: "tall" },
  { title: "Molecular Lattice Render", kind: "Science Visual", image: heroVisual, span: "normal" },
  { title: "Data Wave", kind: "Technology", image: imgTech, span: "wide" },
  { title: "Reaction Macro", kind: "Experiment", image: imgChemistry, span: "normal" },
  { title: "Helix Composition", kind: "Digital Creation", image: imgBiology, span: "normal" },
  { title: "Deep Field", kind: "Science Visual", image: imgSpace, span: "wide" },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  links: { label: string; href: string }[];
};

export const TEAM: TeamMember[] = [
  {
    name: "Abdur Rehman Siddiqui",
    role: "CEO",
    bio: "Founder of Bubloo Scientist. Writes about science, builds projects and leads the team.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/abdurrehmansiddiqui2011/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61574031254178" },
    ],
  },
  {
    name: "Ayaan Hassan Khan",
    role: "Web Developer",
    bio: "Builds and maintains the website and its technical features.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/ayaanhassankha/" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61575751319881" },
    ],
  },
  {
    name: "Sadaat Furqan",
    role: "Marketer",
    bio: "Brings new readers to Bubloo Scientist and grows the community.",
    links: [{ label: "Instagram", href: "https://www.instagram.com/sadaat_furqan/" }],
  },
  {
    name: "Muhammad Mustafa Khan",
    role: "Lead Designer",
    bio: "Leads the visual direction of the platform and its creative work.",
    links: [{ label: "Instagram", href: "https://www.instagram.com/mmk28882025/" }],
  },
  {
    name: "Muhammad Huzaifa Khan",
    role: "Web Designer",
    bio: "Designs pages and writes for the chemistry and science sections.",
    links: [],
  },
  {
    name: "Saim Ahmed",
    role: "Social Media Manager",
    bio: "Runs the social channels and shares the team's latest work.",
    links: [{ label: "Instagram", href: "https://www.instagram.com/panjiro_ahmed/" }],
  },
  {
    name: "Daniyal Faraz",
    role: "AI Bot Manager",
    bio: "Looks after the science chatbot and improves how it answers questions.",
    links: [],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: string[];
  source: string;
  image?: string;
  author?: string;
};

export const BLOGS: BlogPost[] = [
  {
    slug: "what-is-chemistry",
    title: "What is Chemistry?",
    category: "Chemistry",
    date: "2025-12-18",
    author: "Muhammad Huzaifa Khan",
    excerpt:
      "In five years of studying chemistry — and eventually choosing it as an optional subject in grade 9 — I have been fascinated by it, and still find parts of it hard to understand.",
    body: [
      "In my 5 years of studying chemistry along with science, and then eventually selecting chemistry as my optional subject in grade 9, I have been fascinated by it yet still don't fully understand it.",
      "This article is part of Huzaifa's Blogs on Bubloo Scientist. Read the complete piece on the original blog.",
    ],
    source: "https://www.bublooscientist.com/2025/12/18/what-is-chemistry/",
    image: imgChemistry,
  },
  {
    slug: "motorsports-website",
    title: "Motorsports Website",
    category: "Projects",
    date: "2025-07-14",
    excerpt: "A new motorsports website built and published by the Bubloo Scientist team.",
    body: [
      "A new motorsports website built and published by the Bubloo Scientist team, covering racing content with a design of its own.",
      "Read the full project write-up on the original blog.",
    ],
    source: "https://www.bublooscientist.com/2025/07/14/motorsports-website/",
    image: imgTech,
  },
  {
    slug: "book-review-the-boy-who-spoke-dog",
    title: "Book Review (The Boy Who Spoke Dog)",
    category: "Book Reviews",
    date: "2025-04-11",
    excerpt:
      "The Boy Who Spoke Dog is an excellent adventure-fantasy read about a boy stranded on an island.",
    body: [
      "The Boy Who Spoke Dog is an excellent book for readers as it is adventurous as well as fantasy. It emphasizes a character, a boy who is stranded on an island.",
      "Read the full review on the original blog.",
    ],
    source: "https://www.bublooscientist.com/2025/04/11/book-review-the-boy-who-spoke-dog/",
    image: imgSpace,
  },
  {
    slug: "my-new-project",
    title: "My New Project",
    category: "Projects",
    date: "2025-02-14",
    excerpt: "Sharing a new project with the community as it takes shape.",
    body: [
      "Sharing a new project with the Bubloo Scientist community as it takes shape.",
      "Read the full post on the original blog.",
    ],
    source: "https://www.bublooscientist.com/2025/02/14/my-new-project/",
    image: imgCreative,
  },
  {
    slug: "characteristics-of-living-things",
    title: "Characteristics of Living Things",
    category: "Biology",
    date: "2024-12-12",
    excerpt:
      "There are 7 characteristics of living things — including mutation, which sometimes forms different types of animals such as the liger.",
    body: [
      "There are 7 characteristics of living things. Mutation in living things: living things sometimes mutate to form different types of animals like the liger. These are rare types of species.",
      "Read the full article on the original blog.",
    ],
    source: "https://www.bublooscientist.com/2024/12/12/characteristics-of-living-things/",
    image: imgBiology,
  },
  {
    slug: "creating-new-with-coding",
    title: "Creating New With Coding",
    category: "Coding & Languages",
    date: "2024-07-20",
    excerpt:
      "Following up on starting Python: a first working program, and what came out of learning to code.",
    body: [
      "Hello guys, I am back with another good news for you. As I told you in the previous post that I had started programming on Python, I have just created something new.",
      "Read the full post on the original blog.",
    ],
    source: "https://www.bublooscientist.com/2024/07/20/creating-new-with-coding/",
    image: imgTech,
  },
  {
    slug: "digestion-and-absorption",
    title: "Digestion and Absorption",
    category: "Food & Nutrition",
    date: "2023-12-21",
    excerpt:
      "Digestion is the process in which large, complex and insoluble food molecules are converted into smaller, simpler and soluble ones.",
    body: [
      "What is digestion? Digestion is a process in which large, complex and insoluble food molecules are converted into smaller, simpler and soluble ones. There are different types of digestion, each with its own description.",
      "Read the full article on the original blog.",
    ],
    source: "https://www.bublooscientist.com/2023/12/21/digestion-and-absorbption/",
    image: imgChemistry,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Your website is fantastic and I wish that there was a button in which I could donate to the website.",
    name: "Website viewer",
    role: "Reader feedback",
  },
];

export const STATS = [
  { label: "Articles published", value: BLOGS.length, suffix: "+" },
  { label: "Projects shipped", value: PROJECTS.length, suffix: "" },
  { label: "Subjects covered", value: SUBJECTS.length, suffix: "" },
  { label: "Team members", value: TEAM.length, suffix: "" },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Learn", to: "/learn" },
  { label: "Explore", to: "/explore" },
  { label: "Creative", to: "/creative" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
  { label: "About", to: "/about" },
] as const;

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
