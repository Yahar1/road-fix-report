import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';

const Testfirebase = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('data')
            .onSnapshot((snapShotData) => {
                const DataUser = snapShotData.docs.map(doc => ({
                    id : doc.id ,
                    name : doc.data()?.name ,
                    lastname : doc.data()?.lastname,
                }))
                setData(DataUser)
            }, (error) => {
                console.log('Error getting: ' + error);
            });

        return () => {
            unsubscribe();
        }
    }, [])


    return (
        <View>
            {data.map(data => (
                <View key={data.id}>
                <Text style={{fontSize:20}}>{data.name} {data.lastname} </Text>
                </View>
            ))}
            
            
            <Button title='click' onPress={() => { console.log(data); }} />
        </View>
    )
}

export default Testfirebase