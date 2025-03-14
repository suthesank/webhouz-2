import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Pricing",
    path: "/#pricing",
    newTab: false,
  },

  {
    id: 4,
    title: "Our Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Custom Website Design",
        path: "/#services",
        newTab: false,
      },
      {
        id: 42,
        title: "E-Commerce Solutions",
        path: "/#services",
        newTab: false,
      },
      {
        id: 43,
        title: "Web Development",
        path: "/#services",
        newTab: false,
      },
      {
        id: 44,
        title: "UI/UX Design",
        path: "/#services",
        newTab: false,
      },
      {
        id: 45,
        title: "SEO & Digital Marketing",
        path: "/#services",
        newTab: false,
      },
      {
        id: 46,
        title: "Website Maintenance",
        path: "/#services",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
