import React, { useCallback, useEffect, useRef, useState } from "react";
import { BodyModel, Container, Footer, Header } from "./styles";

const Rabbit: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>
          🐰 <span>2023年 あけお</span> 🐰
        </h1>
      </Header>
      <BodyModel></BodyModel>
      <Footer>
        -- Created by <a href="https://github.com/sonvt-fe">Saul Vo</a> ❤️ --
      </Footer>
    </Container>
  );
};

export default Rabbit;
