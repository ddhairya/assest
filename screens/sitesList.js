import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, SectionList, StyleSheet, Modal, Alert, TextInput, Header } from 'react-native'
import globalStyles from '../styles/global'
import SitesListItem from '../components/SitesListItem'
import SectionListItems from '../components/SectionListItems'
import Icon from 'react-native-vector-icons/AntDesign';
import AddSite from "./addSite";
import _ from "lodash";
import axios from "axios";

//import AsyncStorage from '@react-native-async-storage/async-storage';

import EncryptedStorage from 'react-native-encrypted-storage';


const SitesList = ({ navigation }) => {
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
                    console.log("Await" + error)
                    fetchKey()
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

    const [modalOpen, setModalOpen] = useState(false)

    // const DATA = [
    //     {
    //       title: "Main dishes",
    //       data: ["Pizza", "Burger", "Risotto"]
    //     },
    //     {
    //       title: "Sides",
    //       data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    //     },
    //     {
    //       title: "Drinks",
    //       data: ["Water", "Coke", "Beer"]
    //     },
    //     {
    //       title: "Desserts",
    //       data: ["Cheese Cake", "Ice Cream"]
    //     }
    //   ];

    const addSite = (addsite) => {
        addsite.user = userToken;
        const URL = `https://alahliagroup.com/Inventory_App/sites_a_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: addsite
        })
            .then(response => setSites(response.data))
            .catch(error => console.log(error))
    }

    const editSite = (editsite) => {
        editsite.user = userToken
        const URL = `https://alahliagroup.com/Inventory_App/sites_u_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: editsite
        })
            .then(response => setSites(response.data))
            .catch(error => console.log(error))
    }

    const delsite = (delsite) => {
        delsite.user = userToken
        Alert.alert(
            "Delete Confirmation",
            "Are you sure you want to delete this site",
            [
                {
                    text: "Cancel",
                    style: 'cancel'
                },
                {
                    text: "Ok",
                    onPress: () => {
                        const URL = `https://alahliagroup.com/Inventory_App/sites_d_data.php`
                        axios({
                            method: 'post',
                            url: URL,
                            headers: { 'content-type': 'application/json' },
                            data: delsite
                        })
                            .then(response => setSites(response.data))
                            .catch(error => console.log(error))
                    }
                }
            ]
        )
    }

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

    return (
        <View style={globalStyles.container} >
            <View style={[globalStyles.secContainer]}>
                {/* <Text>{userToken}</Text> */}
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
                    <SitesListItem key={item.id} userToken={userToken} navigation={navigation} editSite={editSite} delsite={delsite} item={item} />
                )}
            />
            <View>
                <Text></Text>
            </View>
            <View>
                <Icon
                    name='pluscircle'
                    size={50}
                    style={globalStyles.addModalIcon}
                    onPress={() => setModalOpen(true)} />
                <Text style={globalStyles.addModalLabel}>Add Sites</Text>
            </View>
            <Modal visible={modalOpen} animationType='slide' >
                <AddSite addSite={addSite} setModalOpen={setModalOpen} />
            </Modal>

            {/* {
                    sites.map((item)=> <SitesListItem key={item.key} item = {item} />)
                }        */}
        </View>
    )
}

const styles = StyleSheet.create({

    red: {
        //flex:1,
        //marginBottom:10,
        //opacity:0.3,
        //backgroundColor: 'grey',
        //padding: 10,
        //borderRadius:40,
        margin: 10
    },
    textsearch: {
        width: '80%',
        height: 40,
        //marginLeft:20,
        fontSize: 15,
        borderBottomWidth: 0.8,
        borderBottomColor: 'green',
        color: 'red',
        //backgroundColor:'red'
    }
    // item: {
    //   backgroundColor: "#f9c2ff",
    //   padding: 20,
    //   marginVertical: 8
    // },
    // header: {
    //   fontSize: 32,
    //   backgroundColor: "#fff"
    // },
    // title: {
    //   fontSize: 24
    // }
});



export default SitesList;