import navbar from "./navbar.module.scss";
import { navBarLinks } from "./../../constants/navbar.js";
import ListItem from "../listItem/ListItem";

function Navbar() {
  return (
    <ul className={navbar.main}>
      {navBarLinks.map((item) => (
        <ListItem icon={item.icon} key={item.id} label={item.label} />
      ))}
    </ul>
  );
}

export default Navbar;
