import React from "react";
import * as S from "./Image.style";

const Image = ({ src, id }) => {
  return <S.Image src={src} alt={id}></S.Image>;
};

export default Image;
