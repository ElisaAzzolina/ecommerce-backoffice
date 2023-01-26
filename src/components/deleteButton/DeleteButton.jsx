import styles from "./styles.module.scss";
import { TbTrash } from "react-icons/tb";
import { DELETE } from "../../utils/http";

function DeleteButton({ id, getData }) {
  const delElement = () => {
    DELETE("products", "/" + id).then((data) => {
      console.log(data);
      getData();
    });
  };
  return (
    <button onClick={() => delElement()} className={styles.main}>
      <TbTrash />
    </button>
  );
}

export default DeleteButton;
