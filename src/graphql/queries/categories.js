import { gql } from 'react-apollo'
import { postFragment } from '../fragments'

export const getCategories = gql`
query getAllPosts {
    categories {
      edges {
        node {
            id
          name
         posts {
           ...PostData
         }
        }
      }
    }
   }
   ${postFragment}
`
