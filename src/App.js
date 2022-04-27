import './App.css'
import React, { useState } from 'react'

const App = () => {
  // The first value is the current state ('count')
  // the second value is the function to update 'count' state
  // const [count, updateCount] = useState(() => {
  //   return 0
  // })

  // Calling useState multiple times
  const [count, updateCount] = useState(0)
  const [name, changeName] = useState('original name')

  const addToCount = () => {
    updateCount(previousCount => previousCount + 1)
    changeName('addition')
  }

  const subtractFromCount = () => {
    updateCount(previousCount => previousCount - 1)
    changeName('subtract')
  }

  return (
    <div className='App'>
      <button
        style={{ marginRight: '10px' }}
        onClick={addToCount}
      >
        +
      </button>
      <span>{count} {name}</span>
      <button
        style={{ marginLeft: '10px'}}
        onClick={subtractFromCount}
      >
        -
      </button>
    </div>
  )
}

export default App;
