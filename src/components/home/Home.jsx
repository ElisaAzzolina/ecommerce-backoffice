import styled from "styled-components";
import Title from "../title/Title";

function Home({ setRoute }) {
  const Main = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 20px;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  `;

  const SingleCard = styled.div`
    box-sizing: border-box;
    width: 250px;
    height: 200px;
    padding: 30px 40px;
    background: #202641;
    box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.03);
    border-radius: 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background-color: #414d7e;
    }
    h2 {
      color: white;
    }
  `;
  return (
    <div>
      <h1>HOME</h1>
      <Main>
        <CardContainer>
          <SingleCard onClick={() => setRoute("categories")}>
            <h2>CATGORIE</h2>
          </SingleCard>
          <SingleCard onClick={() => setRoute("products")}>
            <h2>PRODOTTI</h2>
          </SingleCard>
          <SingleCard onClick={() => setRoute("orders")}>
            <h2>ORDINI</h2>
          </SingleCard>
          <SingleCard onClick={() => setRoute("users")}>
            <h2>USER</h2>
          </SingleCard>
        </CardContainer>
      </Main>
    </div>
  );
}

export default Home;
