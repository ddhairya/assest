import React, { useState } from 'react'
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import globalStyles from '../styles/global'
import Icon from 'react-native-vector-icons/FontAwesome';

const TransferToSitesListItem = ({item , setSelectedSite, selectedSite}) => {
    //console.log(userToken)
    //const [editSiteModalOpen, setEditSiteModalOpen] = useState(false)
    const [select, setSelect] = useState(false)
    //const [selectId, setSelectId] = useState()
    return(       
        <View style={globalStyles.container}>
            <TouchableOpacity 
                onPress={() => {
                    setSelectedSite(item.id)
                    setSelect(!select)
                    //setSelectId(item.id)
                    //console.log(item.id,selectId)

                }} 
                //key={item.key} 
                style={[ globalStyles.secDashedContainer]}>
                <View style={[globalStyles.secContainer]} >
                    <View style={styles.red}>
                        <View style={globalStyles.secLineContainer} >
                            <Text style={globalStyles.secChildListInfText1} > {item.emirate} </Text>
                            <Text style={globalStyles.secChildListInfText2} > {item.company} </Text>
                        </View>
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.secChildListDetailText2} > {item.outlet} </Text>
                            <Text style={globalStyles.secChildListDetailText1} > {item.phone} </Text>        
                        </View>  
                    </View>
                    
                    <View style={styles.blue}>
                        {selectedSite == item.id &&                            
                            <Icon  name='check-circle' size={45} style={globalStyles.transferIcon} />   
                        }
                    </View>   
                </View> 
            </TouchableOpacity>            
        </View>        
    )
}

const styles = StyleSheet.create({
    red:{        
        width:'85%',       
    },
    blue:{
        justifyContent:'center',        
        //backgroundColor: 'blue'
    }  
});

export default TransferToSitesListItem;