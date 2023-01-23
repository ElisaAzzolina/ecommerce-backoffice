import Navbar from "../navbar/Navbar";
import main from "./main.module.scss";

function MainSection() {
  return (
    <div className={main.main}>
      <div className={main.sxColumn}>
        <Navbar />
      </div>
      <div className={main.dxColumn}>
        <h2>dx Column</h2>
      </div>
    </div>
  );
}

export default MainSection;
