import React from "react";
// pour la barre de navigation
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          {/* Au cas où l'url ne correspond à rien de déclarré dessus */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
