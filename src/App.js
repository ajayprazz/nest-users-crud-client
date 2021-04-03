import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AddUser, UsersList } from "./pages/";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" exact component={UsersList} />
        <Route path="/users/add" exact component={AddUser} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
