import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AddUser } from "./pages/";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AddUser} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
