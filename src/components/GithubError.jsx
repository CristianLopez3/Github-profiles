import React from 'react'

export default function GithubError( {status, statusText} ) {
  return (
    <div>
      Error {status}: {statusText} 
    </div>
  )
}
