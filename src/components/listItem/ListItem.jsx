import listItem from "./listItem.module.scss";

function ListItem({ label, icon }) {
  return (
    <li className={listItem.main}>
      <span className={listItem.icon}>{icon}</span>
      <span className={listItem.label}>{label}</span>
    </li>
  );
}

export default ListItem;
