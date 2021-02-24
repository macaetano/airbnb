import React from "react";
import styled from "styled-components";
import data from "../datasource";

const StyledCityContainer = styled.div`
  padding: 56px 80px 24px;
  h1 {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 32px;
  }
`;

const CityContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  flex-wrap: wrap;
`;

const StyledCity = styled.div`
  display: flex;

  img {
    height: 64px;
    width: 64px;
    border-radius: 8px;
    margin-right: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .name {
    font-weight: 900;
  }
  .distance {
    font-weight: 400;
  }
`;

const City = () => {
  return (
    <StyledCityContainer>
      <h1>Explore os arredores</h1>
      <CityContainer>
        {data.placesNear.map((place, index) => (
          <StyledCity key={index}>
            <img src={place.image} alt={place.name} />
            <div>
              <p className="name">{place.name}</p>
              <p className="distance">{place.distance}</p>
            </div>
          </StyledCity>
        ))}
      </CityContainer>
    </StyledCityContainer>
  );
};

export default City;
