import Navbar from "../navbar/Navbar";
import main from "./main.module.scss";
import { useState } from "react";
import Categories from "../categories/Categories";

function MainSection() {
  const [route, setRoute] = useState("home");

  return (
    <div className={main.main}>
      <div className={main.sxColumn}>
        <Navbar setRoute={setRoute} />
      </div>
      <div className={main.dxColumn}>
        {route === "home" && <div>home</div>}
        {route === "categories" && <Categories />}
        {route === "products" && <div>Products</div>}
        {route === "orders" && <div>Orders</div>}
        {route === "users" && <div>Users</div>}
      </div>
    </div>
  );
}

export default MainSection;
