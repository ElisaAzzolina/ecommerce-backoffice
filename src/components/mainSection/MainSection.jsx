import Navbar from "../navbar/Navbar";
import main from "./main.module.scss";
import { useState } from "react";
import Categories from "../categories/Categories";
import Products from "../products/Products";
import Home from "../home/Home";

function MainSection() {
  const [route, setRoute] = useState("home");

  return (
    <div className={main.main}>
      <div className={main.sxColumn}>
        <Navbar setRoute={setRoute} />
      </div>
      <div className={main.dxColumn}>
        {route === "home" && <Home setRoute={setRoute} />}
        {route === "categories" && <Categories />}
        {route === "products" && <Products />}
        {route === "orders" && <div>Orders</div>}
        {route === "users" && <div>Users</div>}
      </div>
    </div>
  );
}

export default MainSection;
