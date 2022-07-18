import gql from "graphql-tag";

const GET_RESTAURANTS = gql`
  query($where: JSON) {
    
        userResultByLatitudeAndLongitude(latitude:12.96,longitude:77.68){
         nearByResult{
           places
         }
       }
     
  }
`;

export default GET_RESTAURANTS;
