import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import IssueMarker from './IssueMarker'

const IssueMap = ({ issue }) => {

    const issueLocation = issue.location;

    return (
        <div>
            <MapContainer center={[issueLocation.lat, issueLocation.lng]} zoom={16}>
                <TileLayer
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />
                <IssueMarker issueLocation={issueLocation} />
            </MapContainer>
        </div>
    )
}

export default IssueMap