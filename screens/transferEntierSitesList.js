import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, SectionList, StyleSheet, Modal, Alert, TextInput, Header } from 'react-native'
import globalStyles from '../styles/global'
//import SitesListItem from '../components/SitesListItem'
import TransferEntierSitesListItem from '../components/TransferEntierSitesListItem'
//import SectionListItems from '../components/SectionListItems'
import Icon from 'react-native-vector-icons/AntDesign';
//import AddSite from "./addSite";
import _ from "lodash";
import axios from "axios";

//import AsyncStorage from '@react-native-async-storage/async-storage';

import EncryptedStorage from 'react-native-encrypted-storage';


const TransferEntierSitesList = ({ navigation }) => {
    const [userToken, setUserToken] = useState()
    async function fetchData() {
        const URL = `https://alahliagroup.com/Inventory_App/sites_f_data.php?user=${userToken}`;
        //console.log(URL);
        const res = await fetch(URL)
        res
            .json()
            .then(res => setSites(res))
            .catch(error => console.log(error));
    }



    async function fetchKey() {
        // var ciphertext = CryptoJS.AES.encrypt('9M!1WWIl', '3Qt#6Q$TVp').toString();
        // console.log(ciphertext)

        // var bytes  = CryptoJS.AES.decrypt(ciphertext, '3Qt#6Q$TVp');
        // var originalText = bytes.toString(CryptoJS.enc.Utf8);

        //console.log(originalText);
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
                .catch(error => {
                    console.log("Await" + error);
                    fetchKey();
                });

        } catch (e) {
            console.log("Try" + e)
            fetchKey()
        }
    }


    useEffect(() => {
        //fetchData();
        fetchKey();
    }, [])

    const [sites, setSites] = useState([]);


    const searchSites = (text) => {
        //console.log(text)
        //console.log(masterData)
        if (text) {
            setSites((currentData) => { return [...currentData.filter(data => data.outlet.toLowerCase().includes(text.toLowerCase()) || data.company.toLowerCase().includes(text.toLowerCase()))] })
            //_.find(sites, function(data) { return data.outlet.toLowerCase().includes(text.toLowerCase()); });
        } else {
            fetchData();
        }

        //console.log(sites)
    }

    const transferSite = (sites) => {
        //console.log(sites)
        //console.log(userToken);
        //console.log(item.id)
        sites.user = userToken;
        // sites.current_site = item.id;
        sites.category = 'sites'

        const URL = `https://alahliagroup.com/Inventory_App/sites_t_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: sites
        })
            .then(response => {
                setSites(response.data)
                //console.log(response.data)
            })
            .catch(error => console.log(error))
    }



    return (
        <View style={globalStyles.container} >
            <View style={[globalStyles.secContainer]}>
                <Icon
                    name='search1'
                    size={25}
                    style={globalStyles.searchIcon} />
                <TextInput style={globalStyles.searchText} placeholder='search' onChangeText={text => { searchSites(text) }} />
            </View>
            <Text style={globalStyles.errorText}>Transfer Entier Site</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={sites}
                renderItem={({ item }) => (
                    <TransferEntierSitesListItem key={item.id} transferDevice={transferSite} userToken={userToken} navigation={navigation} item={item} />
                )}
            />
            <View>
                <Text></Text>
            </View>

        </View>
    )
}


export default TransferEntierSitesList;