import React from "react";

const Selection = ({ handleSelection }) => {
  return (
    <div className="selectionArticle">
      <div
        className="elementArticle"
        onClick={() =>
          handleSelection("Choisis ta <br/><span>FACE AVANT</span>")
        }
      >
        <img src="./img/noeud/png/avant.png" alt="" />
        <p>Face avant</p>
      </div>
      <div
        className="elementArticle"
        onClick={() =>
          handleSelection("Choisis ta <br/><span>FACE ARRIERE</span>")
        }
      >
        <img src="./img/noeud/png/arriere.png" alt="" />
        <p>Face arrière</p>
      </div>
      <div
        className="elementArticle"
        onClick={() =>
          handleSelection("Choisis ton <br/><span>ATTACHE CENTRALE</span>")
        }
      >
        <img src="./img/noeud/png/millieu.png" alt="" />
        <p>Attache centrale</p>
      </div>
      <div
        className="elementArticle"
        onClick={() =>
          handleSelection("Choisis ta <br/><span>TAILLE ET ACCESSOIRES</span>")
        }
      >
        <img src="./img/noeud/png/accessoire.png" alt="" />
        <p>Tailles et accessoires</p>
      </div>
    </div>
  );
};

export default Selection;
