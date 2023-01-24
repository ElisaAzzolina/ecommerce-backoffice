import listItem from "./listItem.module.scss";

function ListItem({ label, icon, setRoute, routeUrl }) {
  return (
    <li onClick={() => setRoute(routeUrl)} className={listItem.main}>
      <span className={listItem.icon}>{icon}</span>
      <span className={listItem.label}>{label}</span>
    </li>
  );
}

export default ListItem;
