import { useState } from 'react'
import './App.css'
import GithubSearch from './components/GithubSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <GithubSearch />
    </div>
  )
}

export default App
