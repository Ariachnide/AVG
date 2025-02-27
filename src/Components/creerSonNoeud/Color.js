import React from "react";
import data from "./data.json";

export default class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: "Unis",
      category: "blabla",
      color: "blanc",
      selection: {},
      title: ""
    };
  }

  render() {
    return (
      <div className="colorSelection">
        <h2 dangerouslySetInnerHTML={{ __html: this.props.title }} />
        <div className="collection">
          <h3>Collections</h3>
          {data.elements.map((data, i) => (
            <div
              key={i}
              className={`collectionElement ${
                data.name === this.state.collection ? "focus" : "nofocus"
              }`}
              onClick={() =>
                this.setState({
                  collection: data.name,
                  category: data.categories[0].catName,
                  color: data.categories[0].colors[0].thumb
                })
              }
            >
              {data.name}
            </div>
          ))}
        </div>
        <div className="category">
          <h3>Catégories</h3>
          {this.state.category &&
            data.elements
              .find(data => data.name === this.state.collection)
              .categories.map((data, i) => (
                <div
                  key={i}
                  onClick={() => this.setState({ category: data.catName })}
                  className={`categoryElement ${
                    data.catName === this.state.category ? "focus" : "nofocus"
                  }`}
                >
                  {data.catName}
                </div>
              ))}
        </div>
        <div className="colorProduit">
          <h3>Couleurs</h3>
          {this.state.color &&
            data.elements
              .find(data => data.name === this.state.collection)
              .categories.find(data => data.catName === this.state.category)
              .colors.map((data, i) => (
                <div
                  key={i}
                  onClick={() =>
                    this.setState({ color: data.colorName, selection: data })
                  }
                  className={`colorElement ${
                    data.colorName === this.state.color ? "focus" : "nofocus"
                  }`}
                >
                  <img src={data.thumb} alt="" />
                  <p>{data.colorName}</p>
                </div>
              ))}
        </div>
        <div className="validation">
          <div className="annulerColor" onClick={this.props.handleDeselection}>
            <img src="./img/noeud/png/annuler.png" alt="" />
          </div>
          <div
            className="validateColor"
            onClick={() => this.props.handleValidateColor(this.state.selection)}
          >
            <img src="./img/noeud/png/validate.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
