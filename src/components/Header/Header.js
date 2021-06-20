import React from "react";
import * as S from "./Header.style";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <S.Header>
          <h1>Prime Image Choice</h1>
        </S.Header>
      </>
    );
  }
}
export default Header;
