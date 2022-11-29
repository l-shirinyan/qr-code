import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as TelIcon } from "../../assets/icons/tel.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedIn.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import Servers from "../../assets/images/servers.png";
import Scalable from "../../assets/images/scalability.png";
import Fast from "../../assets/images/fast-time.png";
import Flexable from "../../assets/images/sugar-cube.png";
import Safe from "../../assets/images/shield.png";
import Compliant from "../../assets/images/gdpr.png";
import AddImage from "../../assets/images/add-image.png";
import BarChart from "../../assets/images/bar-chart.png";
import QrCode from "../../assets/images/qr-code.png";
import Hourglass from "../../assets/images/hourglass.png";
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
  href: string;
}

interface ISolutions {
  name: string;
  description: string;
  src: string;
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

export const solutions: ISolutions[] = [
  {
    name: "Reliable",
    description:
      "99.9% Guaranteed service uptime Hosted in multiple countries on Amazon AWS",
    src: Servers,
  },
  {
    name: "Scalable",
    description:
      "60 billion clicks tracked yearly An infrastructure that’s set up to grow with you",
    src: Scalable,
  },
  {
    name: "Fast",
    description:
      "Create up to 1,000 branded links per second Rapid autoscaling server clusters",
    src: Fast,
  },
  {
    name: "Flexible",
    description:
      "18K+ Developers already using our APIs Thousands of dedicated projects",
    src: Flexable,
  },
  {
    name: "Safe",
    description:
      "Most advanced safety tools like 2FA - internal audits Monitored 24/7 by human and artificial intelligence",
    src: Safe,
  },
  {
    name: "GDPR compliant",
    description:
      "Fully compliant with GDPR - EU privacy Data anonymized prior to database storage",
    src: Compliant,
  },
];

export const posts: ISolutions[] = [
  {
    name: "Add your image or logo",
    description:
      "To get more scans with every QR code you generate, you can upload an image or logo using the Free-QR-Code-Generator and customize your QR code design. Branded QR codes get up to 40% more scans than traditional black and white QR codes. As a way for people to trust your QR code more, adding a logo to it is a necessity for brands.",
    src: AddImage,
  },
  {
    name: "Track instant Data",
    description:
      "Data is an important part of your business operations, without it you will lose many opportunities for your enterprise endeavors. With dynamic QR codes you can always track important scanning information and adjust all your campaigns instantly by updating its content. You can track data as time of scan, number of scan, location and device type (iPhone/ android).",
    src: BarChart,
  },
  {
    name: "Dynamic QR codes",
    description:
      "If you use QR codes to expand your marketing scope, then the use of Dynamic QR codes is the best QR code type that you can apply! With it, you can instantly change the URL or content behind your QR code without needing to create a new set of codes. Thus, making it a great investment that saves you money and time on printing. Many brands already use dynamic QR codes for A/B marketing and to update their marketing campaigns when they need.",
    src: QrCode,
  },
  {
    name: "Lifetime valid QR codes",
    description:
      "Some say nothing lasts forever! But if you create your static QR code using our QR code generator, your QR codes will be valid forever; your QR never will expire and can be used for a lifetime for your brand. All dynamic QR codes come with a paid subscription as you can update your QR codes at any time and can track data with them!",
    src: Hourglass,
  },
];

export const faqs = [
  [
    {
      question: "What is a QR code and why do I need one?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
    {
      question: "What is the difference between a PNG and SVG file?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
    {
      question: "My QR code is not working, what can I do?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
    {
      question: "Can I save QR codes as a template and can delete it?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
    {
      question: "How do I make a QR code in bulk?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
  ],
  [
    {
      question: "How many free static QR codes can I make?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
    {
      question: "What is the best format for the logo of the QR code?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
    {
      question: "Can I make a QR code for a MP3?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
    {
      question: "Can a Wi-Fi QR code be dynamic?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
    {
      question: "How to get your invoice?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
    {
      question: "Which colors should I avoid using in QR codes?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
    {
      question: "Which colors should I avoid using in QR codes?",
      answer:
        "A SVG file is a vector type file that can be used in programs as Illustrator or InDesign. For Photoshop you need to import your SVG file. A SVG file is great for printing at the highest quality. A PNG is a format to use online but can also be printed although a PNG has less quality than a SVG.",
    },
  ],
];
