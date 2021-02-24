import React from "react";
import styled from "styled-components";

import data from "../datasource";

const StyledContainer = styled.div`
  padding: 40px 80px;
  h1 {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 32px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  div {
    margin-right: 16px;
  }
  img {
    width: 100%;
    border-radius: 8px;
  }
  p {
    font-weight: 900;
  }
`;

const LiveAnywhere = () => {
  return (
    <StyledContainer>
      <h1>More em qualquer lugar</h1>
      <ListContainer>
        {data.liveAnywhere.map((live, index) => (
          <div key={index}>
            <img src={live.image} alt={live.title} />
            <p>{live.title}</p>
          </div>
        ))}
      </ListContainer>
    </StyledContainer>
  );
};

export default LiveAnywhere;
