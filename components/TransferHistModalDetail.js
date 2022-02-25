import React, { useState } from 'react'
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import globalStyles from '../styles/global'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Modal } from 'react-native'
// import { useState } from 'react'
// import Icon2 from 'react-native-vector-icons/Entypo';
// import EditSite from "../screens/editSite";

const TransferHistModalDetail = ({item }) => {
    //console.log(userToken)
    //const [editSiteModalOpen, setEditSiteModalOpen] = useState(false)
    
    //const [selectId, setSelectId] = useState()
    return(       
        <View style={globalStyles.container}>
            <TouchableOpacity 
               
                //key={item.key} 
                style={[ globalStyles.secDashedContainer]}>
                <View style={[globalStyles.secContainer]} >
                    <View >
                        <View style={globalStyles.secLineContainer} >
                            <View style={styles.red}>
                            <Text style={globalStyles.secChildListDetailText1} > From </Text>

                            </View>
                            <View style={styles.blue}>
                            <Text style={globalStyles.secChildListDetailText1} >  To</Text>

                            </View>
                        </View>
                        <View style={globalStyles.secLineContainer}>
                            <View style={styles.red}>
                            <Text style={globalStyles.secChildListInfText2} >{item.device_old_site_id}</Text>

                            </View>
                            <View style={styles.blue}>
                            <Text style={globalStyles.secChildListInfText2} > {item.device_new_site_id}</Text>

                            </View>
                        </View> 
                        <View style={globalStyles.secLineContainer}>
                            <View style={styles.red}>
                            <Text style={globalStyles.secChildListDetailText1} >{item.device_old_site_id_company}</Text>

                            </View>
                            <View style={styles.blue}>
                            <Text style={globalStyles.secChildListDetailText1} > {item.device_new_site_id_company}</Text>

                            </View>
                        </View> 
                        
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.secChildListInfText1} > {item.user} </Text>
                            <Text style={globalStyles.secChildListDetailText1} > {item.date} </Text>        
                        </View>  
                    </View>
                </View> 
            </TouchableOpacity>            
        </View>        
    )
}

const styles = StyleSheet.create({
    red:{        
        width:'50%',
        alignItems:'center',  
        //justifyContent:'center',
        // textAlign:'center',        
        // textAlignVertical:'center',
        // alignContent:'center',
        // alignSelf:'center',
        //backgroundColor: 'red'     
    },
    blue:{
        width:'50%',
        alignItems:'center',        
        //backgroundColor: 'blue'
    }  
});

export default TransferHistModalDetail;