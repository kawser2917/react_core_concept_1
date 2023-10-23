import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Device name="laptop" price= "3000"></Device>
      <Device name="Mobile" price= "1000"></Device>
      <Device name="Camera" price= "3000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="9" score="80"></Student>
      <Student grade="11" score="59"></Student>
      <Developer></Developer>
      <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Learn Component" isDone={false}></Todo>
      <Todo task="Learn Jsx" isDone={true}></Todo>
    </>
  )
}

function Device(props){
  return <h3>This is {props.name} and it's Price {props.price} </h3>
}

function Person(){
  const student = {
    id: 101,
    name: "Kawser Ahmed",
    age: 24,
  }
  return (
  <h1 className='bg-color'>Hi this is {student.name} and age is {student.age}</h1>
  )
}

function Developer(){
  const developerStyle={
    margin: '20px',
    padding: '20px',
    border: "1px solid blue",
    borderRadius: "10px"
  }

  return (
    <div style={developerStyle}>
      <h3>Web Developer</h3>
      <p>Vai valo kore kaj ta sikh kaje lagbe na hole mara porbi</p>
    </div>
  )
}
function Student({grade,score}){
  return (
    <div className='student'>
      <h3>This is Student</h3>
      <p>Class: {grade} </p>
      <p>Number: {score}</p>
    </div>
  )
}
export default App