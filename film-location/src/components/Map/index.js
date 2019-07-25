import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        console.log(this.props.center)
        return (

            <div>
                <p>DID THIS WORK?</p>
                <div>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCDneUby-5EIauPEtxh19v9gZVk8O8nmr8' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}

export default Map;
