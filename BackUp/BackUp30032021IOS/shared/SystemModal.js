import React, {useState}  from "react";
import { Text, View , TextInput } from "react-native";
import DatePicker from 'react-native-date-picker';
import globalStyles from "../styles/global";
import moment from 'moment'


const SystemModal = ({props}) => {
    const [date, setDate] = useState(new Date())

    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Specify (i.e. Laptop/Desktop/NVR...)'
                    onChangeText = {props.handleChange('system_identification')}
                    value= {props.values.system_identification}
                    onBlur = {props.handleBlur('system_identification')}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.system_identification && props.errors.system_identification}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter System Name'
                    onChangeText = {props.handleChange('system_name')}
                    value= {props.values.system_name}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.system_name && props.errors.system_name}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter System Model'
                    onChangeText = {props.handleChange('system_model')}
                    value= {props.values.system_model}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.system_model && props.errors.system_model}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter IP Details  - DHCP/192.168.1.1'
                    onChangeText = {props.handleChange('system_ip')}
                    value= {props.values.system_ip}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.system_ip && props.errors.system_ip}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter the port deatils'
                    onChangeText = {props.handleChange('system_port')}
                    value= {props.values.system_port}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.system_port && props.errors.system_port}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter the username'
                    onChangeText = {props.handleChange('system_username')}
                    value= {props.values.system_username}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.system_username && props.errors.system_username}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    //secureTextEntry = {true}
                    placeholder='Enter the password'
                    onChangeText = {props.handleChange('system_password')}
                    value= {props.values.system_password}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.system_password && props.errors.system_password}</Text>
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

export default SystemModal;