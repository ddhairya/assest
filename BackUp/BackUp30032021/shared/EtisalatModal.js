import React  from "react";
import { Text, View , TextInput } from "react-native";
import globalStyles from "../styles/global";

const EtisalatModal = ({props}) => {
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter the Etisalat Plan'
                    onChangeText = {props.handleChange('etisalat_plan')}
                    value= {props.values.etisalat_plan}
                    onBlur = {props.handleBlur('etisalat_plan')}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.etisalat_plan && props.errors.etisalat_plan}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    keyboardType = 'number-pad'
                    placeholder='Enter the main number'
                    onChangeText = {props.handleChange('etisalat_number')}
                    value= {props.values.etisalat_number}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.etisalat_number && props.errors.etisalat_number}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    keyboardType = 'number-pad'
                    placeholder='Enter the number of addtional line'
                    onChangeText = {props.handleChange('etisalat_subline')}
                    value= {props.values.etisalat_subline}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.etisalat_subline && props.errors.etisalat_subline}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    placeholder='Enter the internet connection details if any!'
                    onChangeText = {props.handleChange('etisalat_internet')}
                    value= {props.values.etisalat_internet}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.etisalat_internet && props.errors.etisalat_internet}</Text>
            <View style={globalStyles.secDashedContainer}>
                <TextInput
                    keyboardType = 'number-pad'
                    placeholder='Enter the fax number if any!'
                    onChangeText = {props.handleChange('etisalat_fax_number')}
                    value= {props.values.etisalat_fax_number}
                />
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.etisalat_fax_number && props.errors.etisalat_fax_number}</Text>
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

export default EtisalatModal;