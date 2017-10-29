import { gql } from 'react-apollo'
import { postFragment } from '../fragments'

export const getAllPosts = gql`
  query getAllPosts {
    posts {
      ...PostData
    }
  }
  ${postFragment}
`
export const getPostsByCat = gql`
  query getPostsByCat($slug: String!) {
    posts(where: { categoryName: $slug }) {
    ...PostData
  }
  }
  ${postFragment}
`

export const SinglePostDetail = gql`
  query SinglePostDetail($id: ID!) {
    post(id: $id) {
      id
      title
      date
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
`

export const PostSearchQuery = gql`
  query PostSearchQuery($search: String!) {
    posts(where: { search: $search }) {
      ...PostData
    }
  }
  ${postFragment}
`
