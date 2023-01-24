import navbar from "./navbar.module.scss";
import { navBarLinks } from "./../../constants/navbar.js";
import ListItem from "../listItem/ListItem";

function Navbar({ setRoute }) {
  return (
    <ul className={navbar.main}>
      {navBarLinks.map((item) => (
        <ListItem
          setRoute={setRoute}
          routeUrl={item.route}
          icon={item.icon}
          key={item.id}
          label={item.label}
        />
      ))}
    </ul>
  );
}

export default Navbar;
