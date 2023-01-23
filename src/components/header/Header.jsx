import header from "./header.module.scss";
import logo from "./../../assets/logoipsum-246.svg";
function Header() {
  return (
    <div className={header.main}>
      <div className={header.title}>
        <h1>E-commerce DashBoard</h1>
      </div>
      <div className={header.logo}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
