import { Component } from "react";
import ListItems from "./ListItems";
import * as S from "./Collection.style";

class CollectionTile extends Component {
  render() {
    const { singleCollection, collection } = this.props;
    console.log("props", this.props);
    return (
      <>
        <S.CollectionTile>
          <S.CollectionTileTitle>
            <S.Text>{collection[0].title}</S.Text>
          </S.CollectionTileTitle>
          <S.UL>
            <ListItems imageList={singleCollection} collection={collection} />
          </S.UL>
        </S.CollectionTile>
      </>
    );
  }
}

export default CollectionTile;
