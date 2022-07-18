import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import client from "./apolloClient";
import ListPage from "./ListPage";


// import "./styles.css";

export default function RestaurantsData1() {
    const RestaurantsData=[];
  return (
    <Router>
      <ApolloProvider client={client}>
      <div className="App">
          <Switch>
            <Route path="" component={ListPage} />
            
          </Switch>
        </div>
      
      </ApolloProvider>
    </Router>
  );
}

