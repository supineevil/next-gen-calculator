'use client'
import React ,{useState} from "react"
import Link from "next/link"
function page() {
  
  const[res,setRes]=useState("")
  const handleClick = e =>setRes(res+e.target.id)


  const clear=()=>{setRes("")}
  const del=()=>{setRes(res.toString().slice(0,-1))}  
  const calculate=()=>{
   
      try{
        if(eval(res)>=10000000000) setRes("AUKAT KE BAHAR")
        else setRes(eval(res))
      }catch(e){
        setRes("Syntax Error")
      }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-purple-700 p-10 space-y-5">
      <div><p className="text-2xl font-extrabold text-purple-50 font-serif"> Simple Next Calculator </p></div>
      <div className="calculator">
        <input className="input" type="text" value={res} disabled/>
        <div className="buttons">
          <button className="operator" onClick={clear}>AC</button>
          <button className="operator" onClick={del}>DEL</button>
          <button id='.' className="operator" onClick={handleClick}>.</button>
          <button id='/' className="operator" onClick={handleClick}>/</button>
          <button id='7' className="number" onClick={handleClick}>7</button>
          <button id='8' className="number" onClick={handleClick}>8</button> 
          <button id='9' className="number" onClick={handleClick}>9</button>
          <button id='*' className="operator" onClick={handleClick}>*</button> 
          <button id='4' className="number" onClick={handleClick}>4</button>
          <button id='5' className="number" onClick={handleClick}>5</button>
          <button id='6' className="number" onClick={handleClick}>6</button>
          <button id='-' className="operator" onClick={handleClick}>-</button>
          <button id='1' className="number" onClick={handleClick}>1</button>
          <button id='2' className="number" onClick={handleClick}>2</button>
          <button id='3' className="number" onClick={handleClick}>3</button>
          <button id='+' className="operator" onClick={handleClick}>+</button>
          <button id='0' className="number" onClick={handleClick}>0</button>
          <button id='00' className="number" onClick={handleClick}>00</button>
          <button id='=' className="operator col-span-2" onClick={calculate}>=</button>
        </div>
      </div>
      <div>
       <Link href='/'>
          <button className="text-purple-800 transition duration-300 active:translate-y-3 bg-purple-200 py-2 px-3 rounded-full">
            Back 
          </button>
       </Link>
      </div>
    </main>
  )
}

export default page