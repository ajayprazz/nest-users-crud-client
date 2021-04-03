import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AddUser, UsersList, UserDetailPage } from "./pages/";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users" exact component={UsersList} />
        <Route path="/users/add" exact component={AddUser} />
        <Route path="/users/:id" exact component={UserDetailPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
