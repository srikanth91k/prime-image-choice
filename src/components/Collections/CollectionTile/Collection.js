import React from "react";
import CollectionTile from "./CollectionTile";
import { getCollection, getCollectionImages } from "../../../api/ApiCollection";

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      images: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.getCollection();
    this.getCollectionImage();
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
    await getCollectionImages({ coll_Id: "304856", per_page: 30 })
      .then((response) => {
        console.log("eachcollection", response);
        this.setState({
          images: [...response],
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    console.log("imagesCollection", this.state);
    const { loading, images, collections } = this.state;
    return (
      <>
        {!loading && (
          <CollectionTile collection={collections} singleCollection={images} />
        )}
      </>
    );
  }
}

export default Collection;
