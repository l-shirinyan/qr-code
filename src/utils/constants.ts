import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import { ReactComponent as TelIcon } from "../assets/icons/tel.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedIn.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";

interface ILinks {
  title: string;
  path: string;
}

interface IContact {
  title: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  size: string;
}

export interface IMenuItems {
  name: string;
  description: string;
}

export const staticNavbarLinks: ILinks[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/",
  },
  {
    title: "Solutions",
    path: "/",
  },
  {
    title: "Use Cases",
    path: "/",
  },
  {
    title: "Blog",
    path: "/",
  },
  {
    title: "Contact",
    path: "/",
  },
];

export const menuItems: IMenuItems[] = [
  {
    name: "Blog",
    description: "Learn about tips, product updates and company culture.",
    href: "#",
  },
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "Check out webinars with experts and learn about our annual conference.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];

export const footerProduct: ILinks[] = [
  {
    title: "Feature",
    path: "/",
  },
  {
    title: "Tablet Menu",
    path: "/",
  },
  {
    title: "Dine-in QR Menu",
    path: "/",
  },
  {
    title: "Delivery & Pick-Up Menu",
    path: "/",
  },
];

export const footerBusinessTypes: ILinks[] = [
  {
    title: "Hotels",
    path: "/",
  },
  {
    title: "Cafes & Bakery",
    path: "/",
  },
  {
    title: "Coffee Shop",
    path: "/",
  },
  {
    title: "Food Truck",
    path: "/",
  },
];

export const footerCompany: ILinks[] = [
  {
    title: "Careers",
    path: "/",
  },
  {
    title: "Help Center",
    path: "/",
  },
  {
    title: "Privacy & Terms",
    path: "/",
  },
  {
    title: "Blog",
    path: "/",
  },
];

export const footerContactUs: IContact[] = [
  {
    title:
      "Abu Dhabi, United Arab Emirates, Sheikh Rashid Bin Saeed Street, 114, Second Floor",
    Icon: LocationIcon,
    size: "w-[29px] h-[24px]",
  },
  {
    title: "+961-595-826-234",
    Icon: TelIcon,
    size: "w-[19px] h-[19px]",
  },
  {
    title: "info@yallaapp.com",
    Icon: EmailIcon,
    size: "w-[21px] h-[21px]",
  },
];

export const socialMediaIcons = [
  {
    Icon: FacebookIcon,
  },
  {
    Icon: LinkedInIcon,
  },
  {
    Icon: TwitterIcon,
  },
];
