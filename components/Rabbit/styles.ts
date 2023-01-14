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
  left: 0;
  position: absolute;
  top: 5rem;
  width: 100%;
  z-index: 9;
  h1 {
    font-size: 64px;
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 28px;
    }
  }
  span {
    position: relative;
    background: #ba28ed;
    background: repeating-radial-gradient(
      ellipse farthest-corner at center center,
      #ba28ed 0%,
      #460f59 100%
    );
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
  bottom: 12%;
  position: absolute;
  width: 100%;
  z-index: 9;
`;

export { Container, Header, BodyModel, Footer };
