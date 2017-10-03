import { combineReducers } from 'redux'
import { GET_POSTS, SET_SORTING } from '../actions'

function receivePosts (state= {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, ...action.posts }
    default:
      return state
  }
}

function sorting (state= {}, action) {
  switch (action.type) {
    case SET_SORTING:
      return { ...state, ...action.sorter }
    default:
      return state
  }
}

export default combineReducers({
  receivePosts,
  sorting
})
