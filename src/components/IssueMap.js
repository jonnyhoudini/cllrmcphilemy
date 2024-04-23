import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import LocationMarker from './LocationMarker'

const IssueMap = () => {

    const issueLocation = { lat: 55.935656837206324, lng: -4.014247655868531 };

    return (
        <div>
            <MapContainer center={[55.9364, -4.0187]} zoom={16}>
                <TileLayer
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />
                <IssueMarker issueLocation={issueLocation} />
            </MapContainer>
        </div>
    )
}

export default IssueMap