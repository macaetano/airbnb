import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  margin: 0 80px 40px;
  padding: 80px;
  background-image: url("https://a0.muscache.com/im/pictures/eff28e1d-51c4-49ff-8266-68d6929ea1ec.jpg?im_w=2560");
  background-size: cover;
  height: 400px;
  border-radius: 16px;
  color: white;
  align-items: center;
  display: flex;

  div {
    width: 544px;
    h1 {
      font-size: 48px;
      line-height: 52px;
    }
    h3 {
      padding-top: 12px;
      font-size: 18px;
    }
    button {
      margin-top: 40px;
      background-color: white;
      font-weight: 700;
      color: #484848;
      font-size: 14px;
      padding: 16px;
      outline: none;
      border-radius: 8px;
      border: 0;
      width: 40%;
    }
  }
`;

const Banner = () => {
  return (
    <StyledBanner>
      <div>
        <h1>Vale a pena mostrar seu mundo</h1>
        <h3>Transforme seu espaço extra em uma nova oportunidade.</h3>
        <button>Seja um anfitrião</button>
      </div>
    </StyledBanner>
  );
};

export default Banner;
