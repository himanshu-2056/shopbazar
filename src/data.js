import banner1 from "../src/img/banner1.png";
import banner2 from "../src/img/banner2.png";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GrRotateRight } from "react-icons/gr";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiOutlineTrophy } from "react-icons/ai";
import menscloathing from "../src/img/mensclothing.jpeg";
import womenscloating from "../src/img/womenscloathing.webp";
import jwellery from "../src/img/jwellery.jpg";
import electronics from "../src/img/electronics.jpeg";

export const homeBanner = [
  {
    id: 1,
    image: banner1,
    heading: "In this season, find the best",
    description: "Exclusive collection for everyone",
  },
  {
    id: 2,
    image: banner2,
    heading: "In this season, find the best",
    description: "Exclusive collection for everyone",
  },
];

export const shippingDetails = [
  {
    id: 1,
    icon: <MdOutlineLocalShipping className=" h-12 w-12  text-yellow-300" />,
    heading: "Free Shipping",
    desc: "When ordering over $100",
  },
  {
    id: 2,
    icon: <GrRotateRight className="h-12 w-12  text-yellow-300" />,
    heading: "Free Return",
    desc: "Get Return within 30 days",
  },
  {
    id: 3,
    icon: <RiSecurePaymentFill className="h-12 w-12  text-yellow-300" />,
    heading: "Secure Payment",
    desc: "100% Secure Online Payment",
  },
  {
    id: 4,
    icon: <AiOutlineTrophy className="h-12 w-12  text-yellow-300" />,
    heading: "Best Quality",
    desc: "Original Product Guarenteed",
  },
];

export const categories = [
  {
    id: 1,
    category: "Men's Clothing",
    image: menscloathing,
  },
  {
    id: 2,
    category: "Jwelery",
    image: jwellery,
  },
  {
    id: 3,
    category: "Electronics",
    image: electronics,
  },
  {
    id: 4,
    category: "Women's Clothing",
    image: womenscloating,
  },
];
