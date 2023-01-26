import { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import ProductCards from "../productCards/ProductCards";
import ProductForm from "../productForm/ProductForm";
import styles from "./styles.module.scss";

function Products() {
  const [showForm, setShowForm] = useState(false);
  const prodStateInit = {
    products: [],
    loading: false,
  };

  const [productState, setProductState] = useState(prodStateInit);

  function getData() {
    setProductState({ ...productState, loading: true });
    GET("products").then((data) =>
      setProductState({ products: data, loading: false })
    );
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        {showForm && (
          <ProductForm getData={getData} setShowForm={setShowForm} />
        )}
        <h1>Prodotti</h1>
        <button className={styles.button} onClick={() => setShowForm(true)}>
          Aggiungi Prodotto
        </button>
      </div>
      <div className={styles.cards}>
        <ProductCards
          productState={productState.products}
          loading={productState.loading}
          getData={getData}
        />
      </div>
    </div>
  );
}

export default Products;
