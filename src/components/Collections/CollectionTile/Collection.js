import React from "react";
import CollectionTile from "./CollectionTile";
import { getCollection, getCollectionImages } from "../../../api/ApiCollection";

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      imagesList: null,
      loading: true,
    };
  }

  async componentDidMount() {
    /* await this.getCollection();
    await this.getCollectionImage(); */
  }

  getCollection = async () => {
    await getCollection()
      .then((response) => {
        let data = response.map((item) => {
          return { id: item.id, title: item.title };
        });
        this.setState({
          collections: [...data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getCollectionImage = async () => {
    let images = this.state.collections.map(async (item, idx) => {
      const response = await getCollectionImages({
        coll_Id: item.id,
        per_page: 30,
      });
      return { item: item.id, title: item.title, images: response };
    });
    let data = await Promise.all(images).then((imagePromise) => imagePromise);
    this.setState({
      imagesList: data,
      //loading: false,
    });
  };
  render() {
    console.log("imagesCollection", this.state);
    const { loading, imagesList } = this.state;
    return <>{!loading && <CollectionTile imgCollection={imagesList} />}</>;
  }
}

export default Collection;
