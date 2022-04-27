export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const fetchPost = () => (dispatch) => {
  dispatch({ type: FETCH_POSTS })

  const postAPI = 'https://jsonplaceholder.typicode.com/posts'

  fetch(postAPI)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      return dispatch({ type: FETCH_POSTS_SUCCESS, payload: data })
    })
    .catch(err => {
      return dispatch({ type: FETCH_POSTS_FAILURE, payload: err})
    })
}
