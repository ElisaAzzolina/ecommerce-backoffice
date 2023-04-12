import styled from "styled-components";

function Title({ title }) {
  const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    color: #202641;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: 600;
  `;

  return (
    <>
      <Title>{title}</Title>
    </>
  );
}

export default Title;
