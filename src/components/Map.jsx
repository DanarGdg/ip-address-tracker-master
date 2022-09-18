import React, { useContext } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { ContextApi } from '../context/ContextApi'
import { iconMarker } from './iconMarker'

function Map() {
  
  const {datasLangtitude, loading, status} = useContext(ContextApi)

  return (
      <div> 
        {loading ?     
        <div role="status" className="skeleton relative -z-10 bg-gray-300 rounded-lg animate-pulse">
        </div>
        : status === "fail" ?
        <div role="status" className="skeleton relative -z-10 bg-slate-300 rounded-lg animate-pulse">
        </div> 
        : <MapContainer center={datasLangtitude} zoom={13} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={datasLangtitude} icon={iconMarker}>
            </Marker>
          </MapContainer>
        }
      </div>
  )
}

export default Map