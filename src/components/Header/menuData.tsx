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
    title: "About Talent Box",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Leadership",
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
        path: "/diversity",
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
        path: "/rpo",
        newTab: false,
      },
      {
        id: 52,
        title: "Executive and Professional Search",
        path: "/executive",
        newTab: false,
      },
      {
        id: 53,
        title: "Simple Outsourcing",
        path: "/simple",
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
        id: 31,
        title: "Healthcare",
        path: "/healthcare",
        newTab: false,
      },
      {
        id: 32,
        title: "Banking and Financial",
        path: "/banking",
        newTab: false,
      },
      {
        id: 33,
        title: "Pharma Manufacturing",
        path: "/pharma",
        newTab: false,
      },
      {
        id: 34,
        title: "Data Analytics, Engineering, and Technology",
        path: "/datanalytics",
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
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
