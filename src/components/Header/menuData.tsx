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
        path: "/#custom-website-design",
        newTab: false,
      },
      {
        id: 42,
        title: "E-Commerce Solutions",
        path: "/#e-commerce-solutions",
        newTab: false,
      },
      {
        id: 43,
        title: "Web Development",
        path: "/#web-development",
        newTab: false,
      },
      {
        id: 44,
        title: "UI/UX Design",
        path: "/#uiux-design",
        newTab: false,
      },
      {
        id: 45,
        title: "SEO & Digital Marketing",
        path: "/#seo-digital-marketing",
        newTab: false,
      },
      {
        id: 46,
        title: "Website Maintenance",
        path: "/#website-maintenance",
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
