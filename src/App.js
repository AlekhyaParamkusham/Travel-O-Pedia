import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Contents } from "./components/Contents";
import { ContentProvider } from "./components/Context/ContentContext";

import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
function App() {
  return (
    <div className="App">
      <Router>
        <ContentProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/China">
              <Contents data="d1" />
            </Route>
            <Route exact path="/France">
              <Contents data="d2" />
            </Route>
            <Route exact path="/India">
              <Contents data="d3" />
            </Route>
            <Route exact path="/Italy">
              <Contents data="d4" />
            </Route>
            <Route exact path="/NewZealand">
              <Contents data="d5" />
            </Route>
            <Route exact path="/China/add">
              <AddForm data="d1" />
            </Route>
            <Route exact path="/France/add">
              <AddForm data="d2" />
            </Route>
            <Route exact path="/India/add">
              <AddForm data="d3" />
            </Route>
            <Route exact path="/Italy/add">
              <AddForm data="d4" />
            </Route>
            <Route exact path="/NewZealand/add">
              <AddForm data="d5" />
            </Route>
            <Route exact path="/China/edit/:id">
              <EditForm data="d1" />
            </Route>
            <Route exact path="/France/edit/:id">
              <EditForm data="d2" />
            </Route>
            <Route exact path="/India/edit/:id">
              <EditForm data="d3" />
            </Route>
            <Route exact path="/Italy/edit/:id">
              <EditForm data="d4" />
            </Route>
            <Route exact path="/NewZealand/edit/:id">
              <EditForm data="d5" />
            </Route>
          </Switch>
        </ContentProvider>
      </Router>
    </div>
  );
}

export default App;
