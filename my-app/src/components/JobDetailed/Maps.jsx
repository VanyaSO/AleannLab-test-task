import React from "react";
import {GoogleMap} from "@react-google-maps/api";


const Map = ({center}) => {

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const mapRef = React.useRef(undefined);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    return(
        <div className='map'>
            <GoogleMap
                mapContainerClassName={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            />
        </div>
    )

}

export default Map;
