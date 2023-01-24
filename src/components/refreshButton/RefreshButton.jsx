import refreshButton from "./refreshButton.module.scss";

function RefreshButton({ getCategories }) {
  return (
    <button className={refreshButton.refresh} onClick={() => getCategories()}>
      Refresh
    </button>
  );
}

export default RefreshButton;
