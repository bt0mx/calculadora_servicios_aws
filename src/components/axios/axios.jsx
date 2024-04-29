import React, { useEffect, useState } from "react"
import axios from "axios"

const Axios = () =>{
  const [lista, setLista] = useState([])
  const GetList = () => {
    axios.get("https://rickandmortyapi.com/api/character").then((value) => {
      setLista(value.data.results)
    })
  }
  
  useEffect(() => {
    GetList()
  })

  return (
    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="servicios2">
      {lista.map((item) => {
       return <option key={item.id} value={item.name}>{item.name}</option> 
      })}
    </select>
  )
}

export default Axios