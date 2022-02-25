import React, {useState}  from "react";
import { Text, View , TextInput } from "react-native";
import DatePicker from 'react-native-date-picker';
import globalStyles from "../styles/global";
import moment from 'moment'


const FirewallModal = ({props}) => {
    const [date, setDate] = useState(new Date())
    const [edate, setEDate] = useState(new Date())
    //const date = new Date()
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter the firewall model'
                    onChangeText = {props.handleChange('firewall_model')}
                    value= {props.values.firewall_model}
                    onBlur = {props.handleBlur('firewall_model')}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.firewall_model && props.errors.firewall_model}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    keyboardType='number-pad'
                    placeholder='Enter the ip deatils'
                    onChangeText = {props.handleChange('firewall_ip')}
                    value= {props.values.firewall_ip}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.firewall_ip && props.errors.firewall_ip}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter the dyndns deatils'
                    onChangeText = {props.handleChange('firewall_dyn')}
                    value= {props.values.firewall_dyn}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.firewall_dyn && props.errors.firewall_dyn}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    keyboardType='number-pad'
                    placeholder='Enter the port deatils'
                    onChangeText = {props.handleChange('firewall_port')}
                    value= {props.values.firewall_port}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.firewall_port && props.errors.firewall_port}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter the username'
                    onChangeText = {props.handleChange('firewall_username')}
                    value= {props.values.firewall_username}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.firewall_username && props.errors.firewall_username}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    //secureTextEntry = {true}
                    placeholder='Enter the password'
                    onChangeText = {props.handleChange('firewall_password')}
                    value= {props.values.firewall_password}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.firewall_password && props.errors.firewall_password}</Text>
            <Text>Purchase Date</Text>
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
            <Text>Expiry Date</Text>
            <View style={globalStyles.secDashedContainer}>
                <DatePicker
                    mode='date'
                    date={edate}
                    onDateChange={(datechange) => {
                        let d = ''+ moment(datechange).format('DD-MM-YYYY')
                        //console.log(typeof(d))
                        setEDate(datechange)
                        props.setFieldValue('expiry_date',d)
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

export default FirewallModal;