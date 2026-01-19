type NavLinkType = {
    id: number;
    name: string;
}

const navLinks: NavLinkType[] = [
    { id: 1, name: "Portfolio" },
    { id: 2, name: "Contact" },
    { id: 3, name: "Projects" }
]

type NavIconType = {
    id: number;
    img: string;
}

const navIcons: NavIconType[] = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

type dockAppType = {
    id: WindowId | "trash";
    name: string;
    icon: string;
    canOpen: boolean;
}
const dockApps: dockAppType[] = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

export { navLinks, navIcons, dockApps };

const INITIAL_Z_INDEX = 1000;

type WindowState<T = unknown> = {
    isOpen: boolean;
    zIndex: number;
    data: T | null;
}

type WindowId = "finder" | "contact" | "resume" | "safari" | "photos" | "terminal" | "txtfile" | "imgfile";
type WindowConfig = Record<WindowId, WindowState>;

const WINDOW_CONFIG: WindowConfig = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG, type WindowConfig, type WindowState, type WindowId };

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "Vue.js"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Chakra", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS", "Ruby on Rails", "supabase"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

export { techStack }