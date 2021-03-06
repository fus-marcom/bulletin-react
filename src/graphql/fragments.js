import { gql } from 'react-apollo'

export const postFragment = gql`
  fragment PostData on postsConnection {
    edges {
      node {
        id
        title
        date
        slug
        content
        categories {
          edges {
            node {
              id
              name
            }
          }
        }
        featuredImage {
          sourceUrl
        }
      }
    }
  }
`

export const categoriesFragment = gql`
  fragment CategoryData on categoriesConnection {
    edges {
      node {
        id
        name
        slug
      }
    }
  }
`
