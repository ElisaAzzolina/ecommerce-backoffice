import { useEffect, useState } from "react";
import categories from "./categories.module.scss";
import { GET } from "../../utils/http";
import Cards from "../cards/Cards";
import Modal from "../modal/Modal";

function Categories() {
  const [showModal, setShowModal] = useState(false);
  const catStateInit = {
    categories: [],
    loading: false,
  };

  const [catState, setCatState] = useState(catStateInit);

  function getData() {
    setCatState({ ...catState, loading: true });
    GET("categories").then((data) =>
      setCatState({ categories: data, loading: false })
    );
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={categories.main}>
      <div className={categories.title}>
        {showModal && <Modal getData={getData} setShowModal={setShowModal} />}
        <h1>Categorie</h1>
        <button
          className={categories.button}
          onClick={() => setShowModal(true)}
        >
          Aggiungi
        </button>
      </div>
      <Cards
        catState={catState.categories}
        loading={catState.loading}
        setShowModal={setShowModal}
        getData={getData}
      />
    </div>
  );
}

export default Categories;
