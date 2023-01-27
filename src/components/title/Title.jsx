import styled from "styled-components";

function Title({ title }) {
  const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    color: brown;
    text-transform: uppercase;
    margin-bottom: 10px;
  `;

  return (
    <>
      <Title>{title}</Title>
    </>
  );
}

export default Title;
