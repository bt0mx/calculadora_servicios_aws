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
    axios.get("http://localhost:4000/NameService").then((value) => {
      setLista(value.data)
    })
  }
  
  useEffect(() => {
    GetList()
  })
{/*setDesc(value.gender) */}

  const handleChange = (e) => {
      const id = e.target.value
      axios.get("http://localhost:4000/Data/"+id).then((value) => {
        setDesc(value.data[0].DescriptionTipe)
        setAmount(value.data[0].Price)
        setName(value.data[0].NameType)
        console.log(value.data[0].NameType)
      })

    
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
       return <option key={item.IdTipe} value={item.IdTipe} des={item.DescriptionTipe}>{item.NameType}</option> 
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
