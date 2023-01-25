import styles from "./styles.module.scss";
import Form from "../form/Form";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Modal({ setShowModal, data, getData }) {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <button className={styles.btn} onClick={() => setShowModal(false)}>
          <AiOutlineCloseCircle />
        </button>
        <Form data={data} getData={getData} setShowModal={setShowModal} />
      </div>
    </div>
  );
}

export default Modal;
