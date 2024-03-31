import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 2,
    title: "About Talent Box",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Leadership- Jeanna and Michael bios",
        path: "/leadership",
        newTab: false,
      },
      {
        id: 22,
        title: "Culture",
        path: "/culture",
        newTab: false,
      },
      {
        id: 23,
        title: "Diversity, Equity & Inclusion (DEI)",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Recruitment Process Outsourcing-(RPO)",
        path: "/leadership",
        newTab: false,
      },
      {
        id: 52,
        title: "Executive and Professional Search",
        path: "/culture",
        newTab: false,
      },
      {
        id: 53,
        title: "Talent Strategy Services",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Industries",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Healthcare",
        path: "/leadership",
        newTab: false,
      },
      {
        id: 52,
        title: "Banking and Financial Services",
        path: "/culture",
        newTab: false,
      },
      {
        id: 53,
        title: "Pharma Manufacturing",
        path: "/",
        newTab: false,
      },
      {
        id: 54,
        title: "Data Analytics, Engineering, and Technology",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Talent",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Secure Talent",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Get Hired",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Find Your Opportunity",
        path: "/blog",
        newTab: false,
      },
    ],
  },
];
export default menuData;
