import Loading from "../loading/Loading";
import cards from "./cards.module.scss";
import DeleteButton from "../deleteButton/DeleteButton";
import EditButton from "../editButton/EditButton";

function Cards({ catState, getData, loading }) {
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
              <div className={cards.btns}>
                <EditButton
                  getData={getData}
                  data={{ name: item.name, image: item.image, id: item.id }}
                />
                <DeleteButton getData={getData} id={item.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cards;
