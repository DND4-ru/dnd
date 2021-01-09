import { gql } from '@apollo/client';


export const auth = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }

  extend type Launch {
    isLoggedIn: Boolean!
  }

  extend type Mutation {
    login(): Launch
    logout(): Launch
  }
`;
