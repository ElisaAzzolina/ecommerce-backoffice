import styles from "./styles.module.scss";
import { TbEdit } from "react-icons/tb";
import { useState } from "react";
import Modal from "../modal/Modal";

function EditButton({ data, getData }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal && (
        <Modal getData={getData} data={data} setShowModal={setShowModal} />
      )}

      <button onClick={() => setShowModal(true)} className={styles.main}>
        <TbEdit />
      </button>
    </div>
  );
}

export default EditButton;
