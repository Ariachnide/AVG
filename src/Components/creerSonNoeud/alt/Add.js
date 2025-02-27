import React from "react";

export default class extends React.Component {
  render() {
    return (
      <div className="ajouterElement">
        <div className="btnAjouter coffret">
          <div className="btnImgAjouter" />
          <p>
            J’ajoute une couleur <br />
            et je crée un coffret{" "}
          </p>
        </div>
        <div className="btnAjouter manchette">
          <div className="btnImgAjouter" />
          <p>
            j’ajoute des boutons <br />
            de manchettes
          </p>
        </div>
        <div className="btnAjouter pochette">
          <div className="btnImgAjouter" />
          <p>
            j’ajoute <br />
            une pochette
          </p>
        </div>
        <div className="btnAjouter noeud">
          <div className="btnImgAjouter" />
          <p>
            j’ajoute <br />
            un nœud
          </p>
        </div>
      </div>
    );
  }
}
