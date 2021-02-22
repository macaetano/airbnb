import React, { useRef } from "react";
import styled from "styled-components";

import useOnScreen from "../hooks/useOnScreen";

import { ReactComponent as AirbnLogo } from "../assets/icons/full-logo.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as GlobeIcon } from "../assets/icons/globe.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";

const Container = styled.div`
  background-image: url("https://a0.muscache.com/im/pictures/cf39f4c4-e860-43d4-85be-deddd7b2da90.jpg?im_w=1920");
  height: 85vh;
  background-size: cover;
  position: relative;
`;

const StyledAside = styled.aside`
  height: 58px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`;

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 80px;
  background-color: ${(p) => (p.isFocused ? "white" : "transparent")};
  color: ${(p) => (p.isFocused ? "rgb(34, 34, 34)" : "white")};
  position: ${(p) => (p.isFocused ? "fixed" : "static")};
  top: 0;
  width: 100%;

  .logo-container {
    width: 102px;
    height: 32px;
    flex: 1;
    .logo {
      fill: ${(p) => (p.isFocused ? " #ff385d" : "white")};
    }
  }

  .a {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    .button {
      display: flex;
      height: 46px;
      align-items: center;
      border-radius: 24px;
      padding: 0 16px;
      p {
        font-weight: 900;
        font-size: 14px;
      }
      &:hover {
        background-color: ${(p) =>
          p.isFocused ? "rgb(247, 247, 247)" : "rgba(255, 255, 255, 0.15)"};
      }
    }
    .globe-icon {
      fill: rgb(34, 34, 34);
    }
  }
  .menu-container {
    height: 42px;
    display: flex;
    border: 1px solid #dddddd;
    align-items: center;
    margin-left: 8px;
    border-radius: 24px;
    background-color: white;

    .menu-icon-container {
      margin: 0 12px 0 12px;
      height: 16px;
      width: 16px;
      .menu-icon {
        fill: rgb(34, 34, 34);
      }
    }
    .avatar {
      height: 30px;
      margin-right: 4px;
      width: 30px;
      border-radius: 50%;
    }
  }

  .nav-container {
    span {
      color: white;
      font-weight: 400;
      padding: 16px;
      position: relative;
      z-index: 1;
    }
    .selected:before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 1px;
      width: 18px;
      border-bottom: 2px solid white;
    }
  }
`;

const SearchContainer = styled.div`
  margin: 0 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: ${(p) => (p.isHeader ? "16px" : "150px")};
  margin: auto;
  transition: all 0.1s ease-in-out;
  width: ${(p) => (p.isHeader ? "300px" : "61%")};
  .search {
    width: 100%;
    display: flex;
    border: 1px solid #dddddd;
    align-items: center;
    border-radius: 24px;
    background-color: white;
    &.search-out-header {
      height: 64px;
      border-radius: 32px;

      .search-icon-container {
        height: 48px;
        width: 48px;
      }
      .search-icon {
        width: 16px;
        height: 16px;
      }
    }
    &.search-in-header {
      min-width: 300px;
      height: 46px;
      border-radius: 24px;

      .search-icon-container {
        height: 32px;
        width: 32px;
      }
      .search-icon {
        width: 12px;
        height: 12px;
      }
    }
  }

  p {
    color: rgb(54, 54, 54);
  }

  .search-placeholder {
    font-weight: 900;
    padding: 16px 16px 16px 24px;
    font-size: 14px;
    flex: 1;
  }

  .search-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff385d;
    border-radius: 50%;
    margin-right: 8px;
    .search-icon {
      width: 12px;
      height: 12px;
      stroke: 5.3;
    }
  }

  .search-detailed {
    display: flex;
    flex: 1;
    height: inherit;
    padding: 8px;
    align-items: center;
    .divider {
      height: 32px;
      width: 1px;
      border-right: 1px solid rgb(221, 221, 221);
    }
    .search-item-container {
      flex: 1;
      display: flex;
      align-items: center;
    }
    .search-item {
      margin-left: 16px;
      flex: 1;
      align-items: center;
      text-overflow: ellipsis;
    }
    .title {
      font-size: 12px;
      color: rgb(34, 34, 34);
      font-weight: 800;
    }
    .input {
      font-weight: 100;
      font-size: 14px;
      border: 0;
      color: #717171;
      overflow: hidden;
      text-overflow: ellipsis;
      outline: none;
    }
  }
`;

const ExploreContainer = styled.div`
  padding: 148px 80px 40px;
  font-size: 52px;
  font-weight: 800;
  color: white;
  letter-spacing: -0.02em;
  line-height: 36px;
`;

const Header = () => {
  const asideRef = useRef();
  const isAsideVisible = useOnScreen(asideRef);

  return (
    <Container>
      <StyledAside ref={asideRef}>
        <a href="/">
          Confira as últimas informações sobre nossa resposta à COVID-19
        </a>
      </StyledAside>
      <StyledHeader isFocused={!isAsideVisible}>
        <div className="logo-container">
          <AirbnLogo className="logo" />
        </div>
        {isAsideVisible && (
          <div className="nav-container">
            <span href="/" className="selected">
              Lugares para ficar
            </span>
            <span href="/">Experiências</span>
            <span href="/">Experiências Online</span>
          </div>
        )}

        <div className="a">
          <div className="button">
            <p>Seja um anfiltrião</p>
          </div>
          <div className="button">
            <GlobeIcon className="globe-icon" />
          </div>
          <div className="menu-container">
            <div className="menu-icon-container">
              <MenuIcon />
            </div>
            <img
              className="avatar"
              src="https://a0.muscache.com/im/pictures/user/5e2efff9-b42c-42e3-9685-32fdd0afd79a.jpg?aki_policy=profile_medium"
              alt=""
            />
          </div>
        </div>
        <SearchContainer isHeader={!isAsideVisible}>
          <div
            className={`search ${
              isAsideVisible ? "search-out-header" : "search-in-header"
            }`}
          >
            {isAsideVisible ? (
              <div className="search-detailed">
                <div className="search-item-container">
                  <div class="search-item">
                    <p className="title">Localização</p>
                    <input
                      className="input"
                      type="text"
                      placeholder="Para onde você vai?"
                    />
                  </div>
                </div>
                <div className="divider" />
                <div className="search-item-container">
                  <div class="search-item">
                    <p className="title">Check-in</p>
                    <p className="input">Insira as datas</p>
                  </div>
                  <div className="divider" />

                  <div class="search-item">
                    <p className="title">Checkout</p>
                    <p className="input">Insira as datas</p>
                  </div>
                </div>
                <div className="divider" />

                <div className="search-item-container">
                  <div class="search-item">
                    <p className="title">Hóspedes</p>
                    <p className="input">Insira o número de hóspedes</p>
                  </div>
                  <div className="search-icon-container">
                    <SearchIcon className="search-icon" />
                  </div>
                </div>
              </div>
            ) : (
              <React.Fragment>
                <p className="search-placeholder">Comece sua busca</p>
                <div className="search-icon-container">
                  <SearchIcon className="search-icon" />
                </div>
              </React.Fragment>
            )}
          </div>
        </SearchContainer>
      </StyledHeader>
      <ExploreContainer>
        <p>Um mundo perto de você</p>
      </ExploreContainer>
    </Container>
  );
};

export default Header;
