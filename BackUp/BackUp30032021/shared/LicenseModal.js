import React, {useState}  from "react";
import { Text, View , TextInput } from "react-native";
import DatePicker from 'react-native-date-picker';
import globalStyles from "../styles/global";
import moment from 'moment'


const LicenseModal = ({props}) => {
    const [date, setDate] = useState(new Date())
    //const date = new Date()
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter the Product'
                    onChangeText = {props.handleChange('license_product')}
                    value= {props.values.license_product}
                    onBlur = {props.handleBlur('license_product')}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.license_product && props.errors.license_product}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter the installed system name'
                    onChangeText = {props.handleChange('license_system_name')}
                    value= {props.values.license_system_name}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.license_system_name && props.errors.license_system_name}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter the license key'
                    onChangeText = {props.handleChange('license_key')}
                    value= {props.values.license_key}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.license_key && props.errors.license_key}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter the register email'
                    onChangeText = {props.handleChange('license_reg_email')}
                    value= {props.values.license_reg_email}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.license_reg_email && props.errors.license_reg_email}</Text>
            <View style={globalStyles.secDashedContainer}>
                <DatePicker
                    mode='date'
                    date={date}
                    onDateChange={(datechange) => {
                        let d = ''+ moment(datechange).format('DD-MM-YYYY')
                        //console.log(typeof(d))
                        setDate(datechange)
                        props.setFieldValue('date_of_purchase',d)
                    }}
                />
            </View>            
            <Text style={globalStyles.errorText}>{ props.touched.date_of_purchase && props.errors.date_of_purchase}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    multiline
                    numberOfLines = {4}
                    placeholder='Enter your remark'
                    onChangeText = {props.handleChange('remark')}
                    value= {props.values.remark}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.remark && props.errors.remark}</Text>
                                      
        </View>
    )
}

export default LicenseModal;