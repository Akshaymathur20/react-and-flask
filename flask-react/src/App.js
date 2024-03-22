import { useEffect, useState } from "react"
import React from 'react'

const App = () => {

  const [data,setData]= useState([{}])

  useEffect(()=>{
    fetch("/members").then(
      res=> res.json()
    ).then(
      data=>{
        setData(data)
        console.log(data);
      }
    )
  },[])


  return (
    <div></div>
  )
}

export default App