export const GET_POSTS = 'GET_POSTS'
export const SET_SORTING = 'SET_SORTING'

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
})

export const setSorting = sortBy => ({
  type: SET_SORTING,
  sortBy
})
