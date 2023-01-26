import { useEffect, useState } from "react";
import { POST, PUT } from "../../utils/http";
import styles from "./styles.module.scss";

function ProductForm({ getData, data, setShowForm }) {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    title: "",
    price: 1,
    description: "",
    categoryId: 1,
    images: [],
  });

  useEffect(() => {
    if (data) {
      setForm({
        title: data.title,
        price: parseInt(data.price),
        description: data.description,
        categoryId: parseInt(data.categoryId),
        images: data.images,
      });
      setEdit(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleForm = (input, e) => {
    if (input !== "images") {
      setForm({
        ...form,
        [input]: e.target.value,
      });
    } else {
      setForm((prev) => {
        return {
          ...prev,
          [input]: [...prev.images, e.target.value],
        };
      });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    POST("products", form).then((data) => {
      if (data.status === 201) {
        setShowForm(false);
        getData();
      }
    });
  };

  const editForm = (e) => {
    e.preventDefault();
    PUT("products", form, "/" + data.id).then((data) => {
      console.log(data);
      if (data.status === 200) {
        setShowForm(false);
        getData();
      }
    });
  };

  return (
    <form className={styles.main}>
      <input
        className={styles.inputField}
        type="text"
        value={form.title}
        placeholder="title"
        onChange={(e) => handleForm("title", e)}
      />
      <input
        className={styles.inputField}
        type="text"
        value={form.images}
        placeholder="images"
        onChange={(e) => handleForm("images", e)}
      />
      <input
        className={styles.inputField}
        type="text"
        value={form.description}
        placeholder="description"
        onChange={(e) => handleForm("description", e)}
      />
      <input
        className={styles.inputField}
        type="text"
        value={form.categoryId}
        placeholder="categoryId"
        onChange={(e) => handleForm("categoryId", e)}
      />
      <input
        className={styles.inputField}
        type="text"
        value={form.price}
        placeholder="price"
        onChange={(e) => handleForm("price", e)}
      />

      {edit ? (
        <button
          className={styles.btn}
          type="submit"
          onClick={(e) => {
            editForm(e);
          }}
        >
          edit
        </button>
      ) : (
        <button
          className={styles.btn}
          type="submit"
          onClick={(e) => {
            submitForm(e);
          }}
        >
          invia
        </button>
      )}
    </form>
  );
}

export default ProductForm;
