import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import ListUsers from './pages/ListUsers';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/edit:id">
            <EditUser />
          </Route>
          <Route path="/home">
            <ListUsers />
          </Route>
          <Route path="/">
            <ListUsers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
