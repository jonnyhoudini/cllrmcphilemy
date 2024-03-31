import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import LocationMarker from './LocationMarker'

const LeafletMap = ({ formData, setFormData, setShowForm, showForm }) => {

    return (
        <div>
            <MapContainer center={[55.9364, -4.0187]} zoom={16}>
                <TileLayer
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />
                <LocationMarker formData={formData} setFormData={setFormData} setShowForm={setShowForm} showForm={showForm} />
            </MapContainer>
        </div>
    )
}

export default LeafletMap