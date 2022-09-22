import React from 'react'

export default function Example4(props) {
  return (
    <div>
        <h1>*** Example of Children props ***</h1>
        <h2>
            Name: { props.name }
        </h2>
        Children:
        {/* { props.children } */}
        Children2:
        { props.childrena }
    </div>
  )
}