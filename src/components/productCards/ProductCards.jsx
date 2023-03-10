import DeleteButton from "../deleteButton/DeleteButton";
import Loading from "../loading/Loading";
import ProductForm from "../productForm/ProductForm";
import styles from "./styles.module.scss";
import { useState } from "react";
import { TbEdit } from "react-icons/tb";

function ProductCards({ productState, getData, loading }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className={styles.main}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          {productState.map((item) => (
            <div className={styles.single} key={item.id}>
              <div className={styles.images}>
                <img src={item.images[0]} alt={item.title} />
              </div>
              <div className={styles.text}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className={styles.cat}>Category: {item.category.name}</p>
                <p className={styles.price}>€ {item.price}</p>
                <div className={styles.btns}>
                  <DeleteButton getData={getData} id={item.id} />
                  <button
                    className={styles.editBtn}
                    onClick={() => setShowForm(true)}
                  >
                    <TbEdit />
                  </button>
                  {showForm && (
                    <ProductForm
                      getData={getData}
                      data={item}
                      setShowForm={setShowForm}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCards;
