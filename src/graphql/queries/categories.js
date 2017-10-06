import { gql } from 'react-apollo'

export const getAllCategories = gql`
  query getAllCategories {
    categories {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`
