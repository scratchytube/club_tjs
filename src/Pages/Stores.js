import React from 'react' 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Stores = () => {
    return (
        <main>
            <MapContainer center={[40.7008739, -73.9875141]} 
            zoom={13} 
            scrollWheelZoom={true} 
            style={{ height: "600px"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[40.7008739, -73.9875141]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer>
        </main>
    )
}

export default Stores