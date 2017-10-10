import { gql } from 'react-apollo'
import { postFragment, categoriesFragment } from '../fragments'

export const getCategories = gql`
query getAllCategoriesandPosts {
    categories {
      ...CategoryData
      edges {
        node {
         posts {
           ...PostData
         }
        }
      }
    }
   }
   ${postFragment}
   ${categoriesFragment}
`

export const getAllCategories = gql`
query getAllCategories {
  categories{
  ...CategoryData
}
}
${categoriesFragment}
`
