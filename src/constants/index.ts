type NavLinkType = {
    id: number;
    name: string;
}

type NavIconType = {
    id: number;
    img: string;
}

const navLinks: NavLinkType[] = [
    { id: 1, name: "Portfolio" },
    { id: 2, name: "Contact" },
    { id: 3, name: "Projects" }
]

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

export { navLinks, navIcons };