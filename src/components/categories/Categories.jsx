import { useEffect, useState } from "react";
import categories from "./categories.module.scss";
import { GET } from "../../utils/http";
import Cards from "../cards/Cards";

function Categories() {
  const catStateInit = {
    categories: [],
    loading: false,
  };

  const [catState, setCatState] = useState(catStateInit);

  function getCategories() {
    setCatState({ ...catState, loading: true });
    GET("categories").then((data) =>
      setCatState({ categories: filteredCategories(data), loading: false })
    );
  }

  const filteredCategories = (arr) => {
    const categoryArr = ["shoes", "electronics", "clothes", "others"];
    return arr.filter((category) =>
      categoryArr.includes(category.name.toLowerCase())
    );
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={categories.main}>
      <Cards catState={catState.categories} loading={catState.loading} />
    </div>
  );
}

export default Categories;
