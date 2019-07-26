import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import FilmMarker from '../FilmMarker';



class GoogleMap extends Component {

    /*The defaultProps object provides the standard prop parameters centering on San Francisco required for the google-map-react package describing where the map is centered and how zoomed in the map is. The user can move the map around and set the zoom how they see fit.*/

    static defaultProps = {
        center: {
            lat: 37.8,
            lng: -122.4
        },
        zoom: 12
    };


    //Map is loaded. Need to create a Marker component that will show where each film location was. 
    render() {
        return (
            <div style={{ height: '75vh', width: '75%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCDneUby-5EIauPEtxh19v9gZVk8O8nmr8' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <FilmMarker
                        lat={37.8}
                        lng={-122.4}
                        text="HEYYY Y'AAAAL"
                    />
                </GoogleMapReact>
            </div>
        )
    }
}

export default GoogleMap;