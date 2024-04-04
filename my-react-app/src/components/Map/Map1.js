"use client";
import React from 'react';
import "./map.css"
export default function CustomMap() {
    const centerLatitude = 32.353356;
    const centerLongitude = 35.083185;
    const zoomLevel = 18;

    const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.784166701578!2d${centerLongitude}!3d${centerLatitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3177d1e1%3A0x3f76e059b9f45e13!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1648848584914!5m2!1sen!2sus&z=${zoomLevel}`;

    return (
        <div>
            <iframe
                title="Google Map"
                id="map"
                frameBorder="1"
                scrolling="yes"
                marginHeight="10"
                marginWidth="5"
                src={mapSrc}
                style={{ height: '400px', width: '100%' }}>
            </iframe>
        </div>
    );
};