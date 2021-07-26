
import BadgeScreen from "./pages/BadgeScreen/BadgeScreen";
import Creditcard from "./pages/Creditcard/Creditcard";
import Newsletter from "./pages/Newsletter/Newsletter";
import Pagination from "./pages/Pagination/Pagination"
import Popup from "./pages/Popup/Popup";
import TvApp from "./pages/TvApp/TvApp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Responsive2 from "./pages/Responsive2/Responsive2";
import Orange from "./pages/Orange/Orange"

function App() {
  return (
    <Router>
      

        <Switch>
          <Route exact path="/">
            <Pagination />
          </Route>
          <Route path="/badge">
            <BadgeScreen />
          </Route>
          <Route path="/tvapp">
            <TvApp />
          </Route>
          <Route path="/popup">
            <Popup />
          </Route>
          <Route path="/news">
            <Newsletter />
          </Route>
          <Route path="/credit">
            <Creditcard />
          </Route>
          <Route path="/responsive2">
            <Responsive2/>
          </Route>
          <Route path="/orange">
            <Orange/>
          </Route>
          
        </Switch>
    
    </Router>
  );
}

export default App;

