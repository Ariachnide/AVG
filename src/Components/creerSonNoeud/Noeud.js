import React from "react";

export default class Noeud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgLiege: "block",
      imgChemise: "none",
      btnId1: "slidebtn focus",
      btnId2: "slidebtn nofocus",
      inverseImg1: "block",
      inverseImg2: "none"
    };
  }

  handleSlideChange = id => {
    if (id.currentTarget.id === "1") {
      this.setState({
        imgLiege: "block",
        imgChemise: "none",
        btnId1: "slidebtn focus",
        btnId2: "slidebtn nofocus"
      });
    } else {
      this.setState({
        imgLiege: "none",
        imgChemise: "block",
        btnId1: "slidebtn nofocus",
        btnId2: "slidebtn focus"
      });
    }
  };

  inverseColor = () => {
    if (this.state.inverseImg1 === "block") {
      this.setState({ inverseImg1: "none", inverseImg2: "block" });
    } else {
      this.setState({ inverseImg1: "block", inverseImg2: "none" });
    }
  };

  render() {
    return (
      <>
        <div className="noeudVisuel">
          <img
            src="./img/noeud/png/liege.png"
            alt=""
            style={{ display: this.state.imgLiege }}
          />
          <img
            src="./img/noeud/png/chemise.jpg"
            alt=""
            style={{ display: this.state.imgChemise }}
          />
          {this.props.noeud.arriere ? (
            <div className="noeudArriere">
              <img
                src={this.props.noeud.arriere.img}
                alt=""
                style={{ display: this.state.inverseImg1 }}
              />
              {this.props.noeud.avant && (
                <img
                  src={this.props.noeud.avant.imgInverse}
                  alt=""
                  style={{ display: this.state.inverseImg2 }}
                />
              )}
            </div>
          ) : (
            <div className="noeudArriere">
              <img
                src="./img/noeud/noeud1/58317655966e5.png"
                alt=""
                style={{ display: this.state.inverseImg1 }}
              />
              <img
                src="./img/noeud/noeud1/593298488b702.png"
                alt=""
                style={{ display: this.state.inverseImg2 }}
              />
            </div>
          )}
          {this.props.noeud.avant ? (
            <div className="noeudAVant">
              <img
                src={this.props.noeud.avant.img}
                alt=""
                style={{ display: this.state.inverseImg1 }}
              />
              {this.props.noeud.arriere && (
                <img
                  src={this.props.noeud.arriere.imgInverse}
                  alt=""
                  style={{ display: this.state.inverseImg2 }}
                />
              )}
            </div>
          ) : (
            <div className="noeudAVant">
              <img
                src="./img/noeud/noeud2/5833061275882.png"
                alt=""
                style={{ display: this.state.inverseImg1 }}
              />
              <img
                src="./img/noeud/noeud2/59329945021f6.png"
                alt=""
                style={{ display: this.state.inverseImg2 }}
              />
            </div>
          )}
          {this.props.noeud.centrale ? (
            <div className="noeudCentrale">
              <img src={this.props.noeud.centrale.img} alt="" />
            </div>
          ) : (
            <div className="noeudCentrale">
              <img src="./img/noeud/noeud3/5932994502613.png" alt="" />
            </div>
          )}
          <div className="inverse" onClick={this.inverseColor}>
            <img src="./img/noeud/png/inverse.png" alt="" />
            <p>Inverser les faces</p>
          </div>
        </div>
        <div className="slideNb">
          <div
            className={this.state.btnId1}
            id="1"
            onClick={id => this.handleSlideChange(id)}
          />
          <div
            className={this.state.btnId2}
            id="2"
            onClick={id => this.handleSlideChange(id)}
          />
        </div>
      </>
    );
  }
}
