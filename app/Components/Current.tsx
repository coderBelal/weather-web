import React from 'react'
import { getCurrentDate } from '../utils/CurrentData'
import { IoLocateSharp } from 'react-icons/io5';
import { strict } from 'assert';
interface currentProps{
    data:{
        current:{
            condition:{
                icon: string;
                text: string

            }
            temp_f:number
        };
        location?:{
            name: string;
            region: string;
        }
    }
}
const Current = ({data}:currentProps) => {
    const currentDate=getCurrentDate()
    const weatherIcon=data.current.condition.icon;null;
  return (
    <div className=' flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2'>
     <div className=' flex items-center'>
<div>
    <h1 className='   text-3xl text-white '>Today</h1>
    <p className=' text-white '>{currentDate}</p>
    
</div>
{
    weatherIcon && (
        <div>
            <img src={weatherIcon} alt={data.current.condition.icon} className=' w-[50px] object-cover' />
        </div>
    )
}
     </div>
     <div>
     <p className='   text-5xl text-white'>{data.current.temp_f.toFixed()}
        <span>°</span>
     </p>
     <span className=' text-white'>

        {data.current.condition.text}
     </span></div>
     <div>
        {data.location ? (<div className=' flex items-center text-black py-2 rounded-xl bg-white/90 px-2'>
        <IoLocateSharp/>
        <span>{data.location.name}.{data.location.region}</span>
        </div>):null}
     </div>
    </div>
  )
}

export default Current
