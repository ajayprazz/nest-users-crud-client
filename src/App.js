import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AddUser, UsersList, UserDetailPage } from "./pages/";
import { Redirect } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" exact component={UsersList} />
        <Route path="/users/add" exact component={AddUser} />
        <Route path="/users/:id" exact component={UserDetailPage} />
        <Route path="*" render={() => <Redirect to="/users" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
