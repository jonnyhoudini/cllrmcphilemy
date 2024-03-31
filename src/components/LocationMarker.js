import React, { useEffect, useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useMapEvents, useMap } from 'react-leaflet'
import L from 'leaflet'
import { Icon } from 'leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const LocationMarker = ({ formData, setFormData, setShowForm, showForm }) => {

    //component to place marker on map at user's location

    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState(null);

    const map = useMap();

    const customIcon = new Icon({
        iconUrl: require('../images/location.png'),
        iconSize: [50, 50]
    })

    useMapEvents({
        click(e) {
            setPosition(e.latlng);
            console.log('e.latlng', e.latlng);
            //copy formData object
            let tempFormData = formData;
            //set location property of formData object
            tempFormData.location = e.latlng;
            //set formData object
            setFormData(tempFormData);
        }
    });

    const findMe = () => {
        map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            let tempFormData = formData;
            tempFormData.location = e.latlng;
            setFormData(tempFormData);

            map.flyTo(e.latlng, map.getZoom());
            const radius = e.accuracy;
            const circle = L.circle(e.latlng, radius);
            circle.addTo(map);
            setBbox(e.bounds.toBBoxString().split(","));
        });
    }

    return (
        <>  {showForm === true ? null :
            <button className="show-button" onClick={() => setShowForm(true)}>
                <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px' }} />
            </button>
        }
            <button onClick={findMe} className="locate-button" aria-label="Find Me">
                <FontAwesomeIcon icon={faLocationCrosshairs} style={{ fontSize: '24px' }} />
            </button>
            {position === null ? null :
                <Marker position={position} icon={customIcon} >
                </Marker>}
        </>

    )
}

export default LocationMarker