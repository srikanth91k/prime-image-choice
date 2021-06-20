import React from "react";
import Image from "../../../util/Image/Image";
import * as S from "./Collection.style";

const ListItems = ({ imageList }) => {
  console.log("imagesList", imageList);
  return (
    <>
      {imageList.map((image) => {
        return (
          <S.LI key={image.id}>
            <Image src={image.urls["regular"]} id={image.id} />
          </S.LI>
        );
      })}
    </>
  );
};

export default ListItems;
