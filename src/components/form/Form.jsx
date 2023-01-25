import { useEffect, useState } from "react";
import { POST, PUT } from "../../utils/http";
import styles from "./styles.module.scss";

function Form({ setShowModal, getData, data }) {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        name: data.name,
        image: data.image,
      });
      setEdit(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleForm = (input, e) => {
    setForm({
      ...form,
      [input]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    POST("categories", form).then((data) => {
      console.log(data);
      if (data.status === 201) {
        setShowModal(false);
        getData();
      }
    });
  };

  const editForm = (e) => {
    e.preventDefault();
    PUT("categories", form, "/" + data.id).then((data) => {
      console.log(data);
      if (data.status === 200) {
        setShowModal(false);
        getData();
      }
    });
  };

  return (
    <form className={styles.main}>
      <input
        className={styles.inputField}
        type="text"
        value={form.name}
        onChange={(e) => handleForm("name", e)}
      />
      <input
        className={styles.inputField}
        type="text"
        value={form.image}
        onChange={(e) => handleForm("image", e)}
      />

      {edit ? (
        <button
          className={styles.btn}
          type="submit"
          onClick={(e) => editForm(e)}
        >
          edit
        </button>
      ) : (
        <button
          className={styles.btn}
          type="submit"
          onClick={(e) => submitForm(e)}
        >
          invia
        </button>
      )}
    </form>
  );
}

export default Form;
