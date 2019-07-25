
import React, { Component } from 'react';
import Map from '../Map';


export default class MapContainer extends Component {
    render() {
        const style = {
            width: '50vw',
            height: '50vh'
        }
        return (
            <div style = {style}>
                
                <Map />
            </div>
        )
    }
}
