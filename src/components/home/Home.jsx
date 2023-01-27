import styled from "styled-components";
import Title from "../title/Title";

function Home({ setRoute }) {
  const Main = styled.div`
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 6px;
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
    gap: 20px;
  `;

  const SingleCard = styled.div`
    box-sizing: border-box;
    width: 300px;
    padding: 30px 40px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: #d4e0c6;
    border-radius: 6px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background-color: #dbd6a6;
    }
  `;
  return (
    <div>
      <Title title={"HOME"} />
      <Main>
        <CardContainer>
          <SingleCard onClick={() => setRoute("categories")}>
            <Title title={"CATEGORIE"} />
          </SingleCard>
          <SingleCard onClick={() => setRoute("products")}>
            <Title title={"PRODOTTI"} />
          </SingleCard>
          <SingleCard onClick={() => setRoute("orders")}>
            <Title title={"ORDINI"} />
          </SingleCard>
          <SingleCard onClick={() => setRoute("users")}>
            <Title title={"USER"} />
          </SingleCard>
        </CardContainer>
      </Main>
    </div>
  );
}

export default Home;
