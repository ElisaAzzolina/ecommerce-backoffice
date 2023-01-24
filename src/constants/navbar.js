import { GrHomeRounded } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import { AiFillShopping } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

export const navBarLinks = [
  {
    id: 1,
    label: "Home",
    route: "home",
    icon: <GrHomeRounded />,
  },
  {
    id: 2,
    label: "Categorie",
    route: "categories",
    icon: <BiCategoryAlt />,
  },
  {
    id: 3,
    label: "Prodotti",
    route: "products",
    icon: <AiFillShopping />,
  },
  {
    id: 4,
    label: "I miei ordini",
    route: "orders",
    icon: <FiShoppingCart />,
  },
  {
    id: 5,
    label: "User",
    route: "users",
    icon: <FaUserAlt />,
  },
];
