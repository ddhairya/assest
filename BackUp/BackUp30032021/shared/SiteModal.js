import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import globalStyles from "../styles/global";
import {Picker} from '@react-native-picker/picker';

const SiteModal = ({props}) => {
    const [com, setComp] = useState()
    return(
        <View>
            <View style={globalStyles.secDashedContainer}>
                {/* <TextInput
                    placeholder='Slecet Emirate'
                    onChangeText = {props.handleChange('emirate')}
                    value= {props.values.emirate}
                    onBlur = {props.handleBlur('emirate')}
                />
                 */}
                <Picker
                    selectedValue={props.values.emirate}
                    style={{height: 50}}
                    onValueChange={(itemValue, itemIndex) =>{
                        setComp(itemValue)
                        props.setFieldValue('emirate',itemValue)
                    }}>
                    <Picker.Item label="Emirate" value="" />
                    
                    <Picker.Item label="Abu Dhabi" value="Abu Dhabi" />
                    <Picker.Item label="Al Ain" value="Al Ain" />
                    <Picker.Item label="Dubai" value="Dubai" />
                    
                </Picker>
                
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.emirate && props.errors.emirate}</Text>
            <View style={globalStyles.secDashedContainer}>
                {/* <TextInput
                    placeholder='Slecet Company'
                    onChangeText = {props.handleChange('company')}
                    value= {props.values.company}
                /> */}
                <Picker
                    selectedValue={props.values.company}
                    style={{height: 50}}
                    onValueChange={(itemValue, itemIndex) =>{
                        setComp(itemValue)
                        props.setFieldValue('company',itemValue)
                    }}>
                    <Picker.Item label="Company" value="" />
                    <Picker.Item label="AATA" value="AATA" />
                    <Picker.Item label="AGTC" value="AGTC" />
                    <Picker.Item label="Coop" value="Coop" />
                    <Picker.Item label="LaBrioche" value="LaBrioche" />                    
                    <Picker.Item label="Oilfiled" value="Oilfiled" />
                    <Picker.Item label="Sketchley" value="Sketchley" />
                    <Picker.Item label="Vapiano" value="Vapiano" />
                </Picker>
                
                
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.company && props.errors.company}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter Outlet'
                    onChangeText = {props.handleChange('outlet')}
                    value= {props.values.outlet}
                    
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.outlet && props.errors.outlet}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    keyboardType='number-pad'
                    placeholder='Enter Phone'
                    onChangeText = {props.handleChange('phone')}
                    value= {props.values.phone}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.phone && props.errors.phone}</Text>
                            
        </View>
    )
}

export default SiteModal;