import './App.css'
import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { SET_INCREMENT, SET_DECREMENT } from './redux/actions/counterAction'
import { fetchPost } from './redux/actions/postAction'

const App = () => {
  const counter = useSelector(state => state.counterReducer.counter)
  const posts = useSelector((state) => {
    return state.postReducer.posts
  })
  const dispatch = useDispatch()

  const firstPostTitle = posts.length > 0 ? posts[0].title : 'No posts'

  useEffect(() => {
    dispatch(fetchPost())
  }, [])

  return (
    <div className='App'>
      <div className='counter'>
        <h1>{counter}</h1>
        <div>
          <button onClick={(() => dispatch({ type: SET_INCREMENT }))}>ADD</button>
          <button onClick={(() => dispatch({ type: SET_DECREMENT }))}>SUBTRACT</button>
        </div>
      </div>
      <h1>{firstPostTitle}</h1>
    </div>
  )
}

export default App;
