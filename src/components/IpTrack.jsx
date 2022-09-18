import React, { useContext } from 'react'
import { useEffect } from "react";
import { ContextApi } from '../context/ContextApi';
import iconArrow from '../images/icon-arrow.svg'

function IpTrack() {
  const {datas, getData, setSearchIpValue, loading, status } = useContext(ContextApi)

  function handleSubmit(){
    getData()
  }

  function handleChange(value){
    setSearchIpValue(value) 
  }
    
  useEffect(() => {
    handleChange()
  }, [])

  return (
    <div className='header flex flex-col text-white items-center drop-shadow-xl relative h-screen-60'>
      <div className='flex flex-col items-center w-full'>
        <h1 className='text-base md:text-2xl text-center font-bold font-press-start mt-3 md:mt-10'>IP Address Tracker</h1>
        <div className='flex my-5 w-full md:full justify-center input-wrapper'>
          <input className='h-8 md:h-12 rounded-l-xl pl-3 outline-none text-black w-1/3' placeholder="Search for any IP address or domain" onInput={(e) => handleChange(e.target.value)}/>
          <button className='bg-black h-8 md:h-12 w-10 rounded-r-xl flex justify-center items-center hover:bg-slate-700 transition ease-in-out delay-75' onClick={handleSubmit}><img src={iconArrow} alt="arrow icon" /></button>
        </div>
      </div>

      <div className='wrapper-info-ip bg-white text-black flex p-5 rounded-xl justify-between absolute bottom-0 translate-y-1/2 h-36 items-center gap-x-10 max-w-screen-lg'>
        <div className='border-solid border-r-2 pr-10 info-ip w-full'>
          <p className='text-slate-400 font-bold text-xs uppercase tracking-wider'>IP Address</p>
          <b className='text-xl'>{loading ? 'Loading...' : status === 'fail' ? "Invalid   " : datas.query}</b>
        </div>

        <div className='border-solid border-r-2 pr-10 info-ip w-full'>
          <p className='text-slate-400 font-bold text-xs uppercase'>Location</p>
          <b className='text-xl'>{loading ? 'Loading...' : status === 'fail' ? "Invalid Ip" : `${datas.city}, ${datas.country}`} </b>
        </div>

        <div className='border-solid border-r-2 pr-10 info-ip w-full'>
          <p className='text-slate-400 font-bold text-xs uppercase'>Timezone</p>
          <b className='text-xl'>{loading ? 'Loading...' : status === 'fail' ? "Invalid Ip" : datas.timezone}</b>
        </div>

        <div className='pr-10 info-ip w-full'>
          <p className='text-slate-400 font-bold text-xs uppercase'>Isp</p>
          <b className='text-xl'>{loading ? 'Loading...' : status === 'fail' ? "Invalid Ip" : datas.isp}</b>
        </div>
      </div>
    </div>
  )
}

export default IpTrack