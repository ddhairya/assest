import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Button } from "react-native";
import globalStyles from "../styles/global";
import Icon from 'react-native-vector-icons/AntDesign';
import TransferToSitesListItem from "./TransferToSitesListItem";
import EncryptedStorage from 'react-native-encrypted-storage';


const TransferDeviceModal = ({ device, transferDevice, setTransferDeviceModalOpen }) => {
    const [sites, setSites] = useState([])
    const [userToken, setUserToken] = useState()
    const [selectedSite, setSelectedSite] = useState()
    async function fetchSite() {
        let userT;
        userT = null;
        try {
            userT = await EncryptedStorage.getItem('userToken')
            setUserToken(userT)
            //console.log(userT)
            const URL = `https://alahliagroup.com/Inventory_App/sites_f_data.php?user=${userT}`;
            //console.log(URL)
            const res = await fetch(URL)
            res
                .json()
                .then(res => setSites(res))
                .catch(error => console.log(error));
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        //fetchData();
        fetchSite();
    }, [])

    const searchSites = (text) => {
        //console.log(text)
        //console.log(masterData)
        if (text) {
            setSites((currentData) => { return [...currentData.filter(data => data.outlet.toLowerCase().includes(text.toLowerCase()) || data.company.toLowerCase().includes(text.toLowerCase()))] })
            //_.find(sites, function(data) { return data.outlet.toLowerCase().includes(text.toLowerCase()); });
        } else {
            fetchSite();
        }
        //console.log(sites)
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.container} >
                <View style={[globalStyles.secContainer]}>
                    <Icon
                        name='search1'
                        size={25}
                        style={globalStyles.searchIcon} />
                    <TextInput style={globalStyles.searchText} placeholder='search' onChangeText={text => { searchSites(text) }} />
                </View>

                <FlatList
                    keyExtractor={(item) => item.id}
                    data={sites}
                    renderItem={({ item }) => (
                        <TransferToSitesListItem key={item.id} setSelectedSite={setSelectedSite} selectedSite={selectedSite} item={item} />
                    )}
                />
                <TouchableOpacity onPress={() => {
                    //console.log(selectedSite + "|"+ print )
                    device.site_id = selectedSite
                    transferDevice(device)
                    setTransferDeviceModalOpen(false)
                }
                } style={globalStyles.saveButton}>
                    <View style={globalStyles.secContainer}>
                        <Icon name='doubleright' size={30} />
                        <Text style={globalStyles.saveButtonText}>Transfer</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TransferDeviceModal;