import React from "react";
import { Query } from "react-apollo";
import GET_RESTAURANTS from "./queries";

function ListPage(props) {

    const RestaurantsData=[];
  return (
    <div>
      <h1>List of restaurants</h1>
      <Query query={GET_RESTAURANTS} >
        {({ data, error, loading }) => {
          if (error) {
            return <div>An error occured</div>;
          }

          if (loading) {
            return <div>Loading...</div>;
          }

          {RestaurantsData={...data}}
          {console.log("ggggggg")}
          {console.log("aaaa",...data)}
        }}
      </Query>
    </div>
  );
}

export default ListPage;
