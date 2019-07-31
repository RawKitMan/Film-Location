import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import axios from 'axios';
import FilmMarker from '../FilmMarker';


//DataSF API: https://data.sfgov.org/resource/wwmu-gmzc.json

//Geocoder API key: https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCDneUby-5EIauPEtxh19v9gZVk8O8nmr8


class GoogleMap extends Component {

    /*The defaultProps object provides the standard prop parameters centering on San Francisco required for the google-map-react package describing where the map is centered and how zoomed in the map is. The user can move the map around and set the zoom how they see fit.*/

    static defaultProps = {
        center: {
            lat: 37.8,
            lng: -122.4
        },
        zoom: 12
    };

    state = {
        filmLocations: []
    }

    componentDidMount() {
        axios.get('https://data.sfgov.org/resource/wwmu-gmzc.json')
            .then(result => {
                this.setState({
                    filmLocations: result.data
                })
                console.log(result.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };


    //Map is loaded. Need to create a Marker component that will show where each film location was. 
    render() {

        const GOOGLE_MAP_KEY = process.env.GOOGLE_MAP_KEY;
        console.log(GOOGLE_MAP_KEY);
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