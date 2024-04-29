import { useState, useEffect } from "react";
import { useGlobalState } from "../../context/GlobalState";
import axios from "axios"

export function TransactionForm() {

  
  const { addTransaction } = useGlobalState();

//  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let combo = document.getElementById("servicio");
    let selected = combo.options[combo.selectedIndex].text;
    const description = selected;
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });


    setAmount(0);
    setName("");
  };

  const [lista, setLista] = useState([])
  const GetList = () => {
    axios.get("https://rickandmortyapi.com/api/character").then((value) => {
      setLista(value.data.results)
    })
  }
  
  useEffect(() => {
    GetList()
  })
{/*setDesc(value.gender) */}

  const handleChange = (e) => {
      const id = e.target.value
      axios.get("https://rickandmortyapi.com/api/character/"+id).then((value) => {
        console.log(value.data.gender)
        setDesc(value.data.gender)
      })

    setAmount(id)
  }

 
  return (
    <div>
      <form onSubmit={onSubmit}>
        <img src="" alt="" />
        <input
          type="text"
          placeholder="descripcion"
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full visibility: hidden"
          value="aws"
        />

        <select onChange={handleChange} value={amount} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="servicio">
      {lista.map((item) => {
       return <option key={item.id} value={item.id} des={item.id}>{item.name}</option> 
      })}
    </select>
    <br />
        <button
          className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full disabled:opacity-50"
        >Agregar Servicio </button>
      </form>
      <br />

<p class="font-normal text-gray-700 dark:text-black-400">Descripción: {desc}</p>

    </div>
  );
}
