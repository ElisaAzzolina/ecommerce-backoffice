import Loading from "../loading/Loading";
import cards from "./cards.module.scss";

function Cards({ catState, loading }) {
  return (
    <div className={cards.main}>
      {loading ? (
        <Loading />
      ) : (
        <div className={cards.container}>
          {catState.map((item) => (
            <div className={cards.single} key={item.id}>
              <img src={item.image} alt={item.name} className={cards.img} />
              <p className={cards.title}>{item.name.substring(0, 20)}</p>
              <div></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cards;
