import { Component } from "react";
import ListItems from "./ListItems";
import * as S from "./Collection.style";

class CollectionTile extends Component {
  render() {
    const { imgCollection } = this.props;
    return (
      <>
        {imgCollection &&
          imgCollection.map((eachTile) => (
            <S.CollectionTile>
              <S.CollectionTileTitle>
                <S.Text>{eachTile.title}</S.Text>
              </S.CollectionTileTitle>
              <S.UL>
                <ListItems imageList={eachTile.images} />
              </S.UL>
            </S.CollectionTile>
          ))}
      </>
    );
  }
}

export default CollectionTile;
