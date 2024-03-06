'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import './globals.css'

export default function Home() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(
      'https://rickandmortyapi.com/api/character'
    )
    .then((response) => response.json())
    .then((data) => setData(data.results))
    .catch((error) => console.log('deu errado carai', error))
  })
  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#1f2937]">

      <input type="text" className="flex flex-row flex-wrap justify-around gap-10 py-3" onChange={(e) => setSearch (e.target.value)}/>

      <div className="flex flex-row flex-wrap justify-around gap-10 py-8 ">

      {data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item) => (

      <div key={item.id} className="flex flex-col gap-y-5">
      <h2 className="py-5 bg-[#155e75] text-white font-bold text-x1 rounded-xl text-center">{item.name}</h2>
      <img src={item.image} className="rounded-lg"/>
      <p className="text-white text-center font-bold text-base">{item.gender}</p>

    </div>
    ))}
      </div>
    </main>
  );
}
