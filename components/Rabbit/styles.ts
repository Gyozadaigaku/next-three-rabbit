import styled from "styled-components";

const Container = styled.div`
  background-image: url("/bg.jpg");
  background-position: center;
  color: #fff;
  height: 100vh;
  position: relative;
  text-align: center;
  width: 100vw;
`;

const Header = styled.div`
  font-size: 4rem;
  left: 0;
  position: absolute;
  top: 5rem;
  width: 100%;
  z-index: 9;
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
  h1 {
    font-size: inherit;
  }
  span {
    background: linear-gradient(orange, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const BodyModel = styled.div`
  background-color: transparent;
  cursor: pointer;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
`;

const Footer = styled.div`
  bottom: 5rem;
  position: absolute;
  width: 100%;
  z-index: 9;
`;

export { Container, Header, BodyModel, Footer };
