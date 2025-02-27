import React from "react";
import ResMenu from "../header/ResMenu";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import Noeud from "./Noeud";
import Add from "./Add";
import Color from "./Color";
import Selection from "./Selection";
import Footer from "../footer/Footer";

export default class CreerSonNoeud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollMenuId: "scrollMenuDisplay",
      color: "",
      selectionNoeud: {},
      isValidateHide: "show"
    };
  }

  componentDidMount() {
    /* TODO : sélectionne un rectangle avant, un rectanble arrière & une attache centrale par défaut. Attache centrale & rectangle arrière doivent être d'une couleur identique mais la couleur du rectangle avant doit être différente. Ces choix ne devront pas pouvoir être validés d'emblée. */
  }

  selection = value => {
    this.setState({ color: value });
  };
  deselection = () => {
    this.setState({ color: "" });
  };
  colorSelection = value => {
    switch (this.state.color) {
      case "Choisis ta <br/><span>FACE AVANT</span>":
        let avant = {
          name: value.colorName,
          img: value.avant,
          imgInverse: value.arriere
        };
        this.setState({
          selectionNoeud: { ...this.state.selectionNoeud, avant }
        });
        break;
      case "Choisis ta <br/><span>FACE ARRIERE</span>":
        let arriere = {
          name: value.colorName,
          img: value.arriere,
          imgInverse: value.avant
        };
        this.setState({
          selectionNoeud: { ...this.state.selectionNoeud, arriere }
        });
        break;
      case "Choisis ton <br/><span>ATTACHE CENTRALE</span>":
        let centrale = {
          name: value.colorName,
          img: value.centrale
        };
        this.setState({
          selectionNoeud: { ...this.state.selectionNoeud, centrale }
        });
        break;
      //case "Choisis ta <br/><span>TAILLE ET ACCESSOIRES</span>":
      //let taille = {};
      //this.setState({
      //selectionNoeud: { ...this.state.selectionNoeud, taille }
      //});
      //break;
      default:
        break;
    }
    this.setState({ color: "" });
  };

  render() {
    return (
      <div className="pusher">
        <ResMenu />
        <Header displayHidden={this.state.scrollMenuId} />
        <div className="fildariane">
          <p>
            <Link to="/">Home ></Link> Créer son nœud
          </p>
        </div>
        <div className="creerSonNoeud">
          <div className="center">
            <div className="title">
              <h1>
                Créer <br />
                <span>SON Nœud-Papillon</span>
                <img src="./img/titreEclat.png" alt="" />
              </h1>
            </div>
            <div className="section">
              <div className="leftSection">
                <div className="noeud">
                  <Noeud noeud={this.state.selectionNoeud} />
                </div>
                <div className="ajout">
                  <Add />
                </div>
              </div>
              <div className="rightSection">
                <div className="selection">
                  {this.state.color !== "" &&
                  this.state.color !==
                    "Choisis ta <br/><span>TAILLE ET ACCESSOIRES</span>" ? (
                    <Color
                      title={this.state.color}
                      handleDeselection={this.deselection}
                      handleValidateColor={this.colorSelection}
                    />
                  ) : this.state.color ===
                    "Choisis ta <br/><span>TAILLE ET ACCESSOIRES</span>" ? (
                    <div>bonjour</div>
                  ) : (
                    <Selection handleSelection={this.selection} />
                  )}
                </div>
                <div className={`validation ${this.state.isValidateHide}`}>
                  <button>
                    <span>
                      <img src="./img/noeud/png/panier.png" alt="" />
                    </span>
                    J’ai tout ce qu’il me faut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
