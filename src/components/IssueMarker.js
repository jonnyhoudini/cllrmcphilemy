import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { Icon } from 'leaflet'


const IssueMarker = ({ issueLocation }) => {

    //component to place marker on map at user's location

    const customIcon = new Icon({
        iconUrl: require('../images/location.png'),
        iconSize: [50, 50]
    })

    return (
        <>
            <Marker position={issueLocation} icon={customIcon} ></Marker>
        </>

    )
}

export default IssueMarker