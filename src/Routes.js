import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/home/Home";
import Concept from "./Components/concept/Concept";
import CreerSonNoeud from "./Components/creerSonNoeud/CreerSonNoeud";
import Agatheque from "./Components/agatheque/Agatheque";
import NosBoutiques from "./Components/nosboutiques/NosBoutiques";
import NousContacter from "./Components/nousContacter/NousContacter";
import Livraison from "./Components/livraison/Livraison";
import EspacePro from "./Components/espacePro/EspacePro";
import Login from "./Components/login/Login";
import Creer from "./Components/creerCompte/CreerCompte";
import Panier from "./Components/panier/Panier";
import Tunnel from "./Components/tunnel/Tunnel";
import Cgv from "./Components/cgv/Cgv";
import MentionsLegales from "./Components/mentionsLegales/MentionsLegales";

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/le-concept" component={Concept} />
            <Route path="/voici-l-agatheque" component={Agatheque} />
            <Route path="/creer-son-noeud" component={CreerSonNoeud} />
            <Route path="/espace-pro" component={EspacePro} />
            <Route path="/nos-boutiques" component={NosBoutiques} />
            <Route path="/livraison-et-retour" component={Livraison} />
            <Route path="/nous-contacter" component={NousContacter} />
            <Route path="/login" component={Login} />
            <Route path="/creer-un-compte" component={Creer} />
            <Route path="/votre-panier" component={Panier} />
            <Route path="/finaliser-la-commande" component={Tunnel} />
            <Route path="/conditions-generales-de-ventes" component={Cgv} />
            <Route path="/mentions-legales" component={MentionsLegales} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
