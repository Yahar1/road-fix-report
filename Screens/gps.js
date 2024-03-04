import React, { useCallback, useState } from 'react';
import { Button, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';
import firebase from 'firebase';

// Initialize Firebase (replace with your Firebase config)
const firebaseConfig = {
    apiKey: 'AIzaSyCX6RvG0FE8RAUN2qTdpyo618NmNxZRILw',
    /*  authDomain: 'YOUR_AUTH_DOMAIN', */
    projectId: 'road-fix-report',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: '1014576254541',
    appId: '1:1014576254541:web:ede0d13fd7114ef3fc1604',
};
firebase.initializeApp(firebaseConfig);

const LocationButton = () => {
    const [currentLocation, setCurrentLocation] = useState(null);

    const handleMap = useCallback(async () => {
        try {
            // Get current location
            Geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    // Save location data to Firebase
                    await firebase.database().ref('locations').push({
                        latitude,
                        longitude,
                        timestamp: new Date().toISOString(),
                    });

                    // Set current location for marking on the map
                    setCurrentLocation({ latitude, longitude });

                    // Optionally, you can display a success message
                    Alert.alert('Location Saved', 'Your location has been saved successfully.');
                },
                (error) => {
                    // Handle error
                    console.error(error);
                    Alert.alert('Error', 'Unable to retrieve your location. Please try again.');
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }, []);

    return (
        <>
            <MapView
                style={{ flex: 1, height: 300 }}
                region={currentLocation ? { ...currentLocation, latitudeDelta: 0.01, longitudeDelta: 0.01 } : null}
            >
                {currentLocation && (
                    <Marker coordinate={currentLocation} title="You are here" description="Current Location" />
                )}
            </MapView>
            <Button title='Save Current Location' onPress={handleMap} />
        </>
    );
};

export default LocationButton;
