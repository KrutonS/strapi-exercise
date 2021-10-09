import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./components/header";
import Category from "./pages/category";
import Homepage from "./pages/homepage";
import ReviewDetails from "./pages/reviewDetails";

const apolloClient = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
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
    </ApolloProvider>
  );
}

export default App;
