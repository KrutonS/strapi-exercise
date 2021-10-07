import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Category from "./pages/category";
import Homepage from "./pages/homepage";
import ReviewDetails from "./pages/reviewDetails";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/details/:id'>
            <ReviewDetails />
          </Route>
          <Route path='/category/:id'>
            <Category />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
