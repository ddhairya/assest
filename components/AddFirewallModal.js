import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import globalStyles from "../styles/global";
import FirewallModal from "../shared/FirewallModal";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from "moment";
import * as yup from "yup";

const FirewallValidation = yup.object({
    firewall_model : yup.string()
        .required("Please enter firewall model"),
    firewall_ip : yup.string()
        .required("Please enter the IP")
        .matches(/^[0-9.]{8,}$/,"Enter the ip xxx.xxx.xxx.xxx"),
    firewall_dyn : yup.string()
        .required("Please enter the DynDns details"),
    firewall_port : yup.string()
        .matches(/^[0-9]{2}$/,"Enter the port number"),
    firewall_username : yup.string()
        .required("Enter the username"),
    firewall_password : yup.string()
        .required("Please enter strong password")
        .min(6)
})

const AddFirewallModal = ({site_id, setFirewallModal, addFirewall}) => {
    const date = new Date();
    return(
        <Formik
            initialValues = {{
                site_id: site_id,
                firewall_model : '',
                firewall_ip : '',
                firewall_dyn:'',
                firewall_port: '',
                firewall_username: '',
                firewall_password: '',
                date_of_purchase: ''+ moment(date).format('DD-MM-YYYY'),
                expiry_date:''+ moment(date).format('DD-MM-YYYY'),
                remark:'',
            }}
            validationSchema = {FirewallValidation}
            onSubmit = {(values,actions) => {
                addFirewall(values)
                actions.resetForm()
                setFirewallModal(false)
                //console.log(values)
            }}
        >
            {(props) => (
                <View>
                    <FirewallModal props={props}/>
                    <TouchableOpacity onPress={props.handleSubmit} style={globalStyles.saveButton}> 
                            <View style={globalStyles.secContainer}>
                                <Icon name='security'  size={30}  />
                                <Text style={globalStyles.saveButtonText}>Add Firewall</Text>
                            </View>                
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

export default AddFirewallModal;