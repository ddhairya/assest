import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Button } from "react-native";
import globalStyles from "../styles/global";
import TransferHistModalDetail from "./TransferHistModalDetail";

const TransferHistModal = ({ category, device }) => {
    const [hist, setHist] = useState([])
    //console.log(device)
    const device_id = device.id
    async function fetchSite() {
        try {
            const URL = `https://alahliagroup.com/Inventory_App/hist_f_data.php?device_id=${device_id}&device_cat=${category}`;
            //console.log(URL)
            //console.log(device.id)
            //console.log(category)
            const res = await fetch(URL)
            res
                .json()
                .then(res => {
                    setHist(res)
                    //console.log(res)
                })
                .catch(error => console.log(error));
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        //fetchData();
        fetchSite();
    }, [])

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.container} >
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={hist}
                    renderItem={({ item }) => (
                        <View>
                            <TransferHistModalDetail key={item.id} item={item} />
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default TransferHistModal;