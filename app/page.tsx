 'use client'
import { useState } from "react"
import Input from "./Components/Input"
import Current from "./Components/Current"
import WeekForecast from "./Components/WeekForcast"
import WeatherDetails from "./Components/WeatherDetails"
 const Home = () => {
  const [data,setData] =useState({})
   const [location,setLocation]=useState("")
 const [error,setError]=useState("")
 const url= `http://api.weatherapi.com/v1/forecast.json?key=df05d0974e2c4dd1a95145446243010&q=${location}&days=1&aqi=yes&alerts=yes
`
const handleSearch = async (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error("Failed to fetch weather data")
      }
      const weatherData = await res.json()
      setData(weatherData)
      setLocation("")
      setError("")
    } catch (error) {
      setError("Unable to fetch weather data. Please try again.")
     setData({})
    }
  }
}
let content;
if(Object.keys(data).length === 0 && error ===''){
  content=(
    <div  className=" text-white   h-screen  text-center mt-[5rem]">
    <h2 className=" text-3xl  font-semibold mb-4">
    Welcome to the weather app
    </h2>
    <p className=" text-xl">Enter a city name to get the weather forecast</p>
    </div>
  )
}
else if(error !== ""){
content=(
  <div className=" text-white   h-screen  text-center mt-[5rem]">
    <p className=" text-3xl  font-semibold mb-4">City Not Found</p>
    <p  className=" text-xl">Enter a Valid City </p>
  </div>
)
}
else{
  content=(
    <>
      <div className=" flex justify-center md:flex-row flex-col p-12 items-center">
      <Current data={data}/>
         <WeekForecast data={data}/>
    </div>
    <div>
      <WeatherDetails data={data}/>
    </div></>
  
  )
}
   return (
     <div className=" bg-cover bg-gradient-to-r from-blue-500  to-blue-300 h-fit
       lg:h-screen md:h-screen ">
     <div className="  bg-white/25 w-full rounded-lg flex  flex-col h-full      " >
   
     <div  className=" flex flex-col md:flex-row lg:flex-row justify-between items-center p-12" >
     <Input handleSearch={handleSearch} setLocation={setLocation} />
        <h1 className=" mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-semibold ">Weather App</h1>
     </div>
  {content}
     </div>
     </div>
   )
 }
 
 export default  Home
 