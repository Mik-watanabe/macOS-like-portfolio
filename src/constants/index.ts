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
    id: string;
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