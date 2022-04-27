import './App.css'
import React, { useState } from 'react'

const AppVer2 = () => {
  // The first value is the current state ('count')
  // the second value is the function to update 'count' state
  // const [count, updateCount] = useState(() => {
  //   return 0
  // })

  // Sending an Object to useState
  const [state, setState] = useState({ count: 0, actionName: 'nothing' })
  const count = state.count
  const actionName = state.actionName

  const addToCount = () => {
    setState(previousState => {
      return {...previousState, count: previousState.count + 1, actionName: 'addition'}
    })
  }

  const subtractFromCount = () => {
    setState(previousState => {
      return {...previousState, count: previousState.count - 1, actionName: 'subtract'}
    })
  }

  return (
    <div className='App'>
      <button
        style={{ marginRight: '10px' }}
        onClick={addToCount}
      >
        +
      </button>
      <span>{count} {actionName}</span>
      <button
        style={{ marginLeft: '10px'}}
        onClick={subtractFromCount}
      >
        -
      </button>
    </div>
  )
}

export default AppVer2;
