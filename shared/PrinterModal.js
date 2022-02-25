import React, {useState}  from "react";
import { Text, View , TextInput } from "react-native";
import DatePicker from 'react-native-date-picker';
import globalStyles from "../styles/global";
import moment from 'moment'


const PrinterModal = ({props}) => {
    const [date, setDate] = useState(new Date())
    //const date = new Date()
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter Printer Model No - TMT88IV'
                    onChangeText = {props.handleChange('printer_model')}
                    value= {props.values.printer_model}
                    onBlur = {props.handleBlur('printer_model')}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.printer_model && props.errors.printer_model}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter Printer Name - Bar'
                    onChangeText = {props.handleChange('printer_alias_name')}
                    value= {props.values.printer_alias_name}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.printer_alias_name && props.errors.printer_alias_name}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter Details  - USB/192.168.1.1'
                    onChangeText = {props.handleChange('printer_details')}
                    value= {props.values.printer_details}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.printer_details && props.errors.printer_details}</Text>
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
                {/* <TextInput
                    placeholder='Date of purchase'
                    onChangeText = {date} 
                    value= {props.values.date_of_purchase}                    
                /> */}
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

export default PrinterModal