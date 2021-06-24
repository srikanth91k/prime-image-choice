import React from "react";
import * as S from "./Header.style";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <S.Header>
          <h1>Prime-image-choice</h1>
        </S.Header>
      </>
    );
  }
}
export default Header;
