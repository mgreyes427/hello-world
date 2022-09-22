import React from 'react'

export default function Example4(props) {
  return (
    <div>
        <h1>*** Example of Children props ***</h1>
        <h2>
            Name: { props.name }
        </h2>
        {/* any not pass in props will be treated as .children here */}
        { props.children }
    </div>
  )
}