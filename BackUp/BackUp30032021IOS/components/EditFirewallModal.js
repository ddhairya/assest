import { Formik } from "formik";
import React from "react";
import { Text, View , TextInput, TouchableOpacity} from "react-native";
import globalStyles from "../styles/global";
import FirewallModal from "../shared/FirewallModal";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CryptoJS from "crypto-js";
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

const EditFirewallModal = ({fw, editFirewall, setEditFirewallModalOpen}) => {
    fw.firewall_password = CryptoJS.AES.decrypt(fw.firewall_password, '3Qt#6Q$TVp').toString(CryptoJS.enc.Utf8);
    
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    site_id: fw.site_id,
                    firewall_model: fw.firewall_model,
                    firewall_ip : fw.firewall_ip,
                    firewall_dyn:fw.firewall_dyn,
                    firewall_port: fw.firewall_port,
                    firewall_username: fw.firewall_username,
                    firewall_password: fw.firewall_password,
                    date_of_purchase: fw.date_of_purchase,
                    expiry_date:fw.expiry_date,
                    id: fw.id,   
                    remark:fw.remark,           
                }}
                validationSchema = {FirewallValidation}
                onSubmit={(values) => {
                    //console.log(values)
                    editFirewall(values)
                    setEditFirewallModalOpen(false)
                }}
            >
                {(props) => (
                    <View>
                        <FirewallModal props={props}/>
                        <TouchableOpacity onPress={props.handleSubmit} style={globalStyles.saveButton}> 
                            <View style={globalStyles.secContainer}>
                                <Icon name='security'  size={30}  />
                                <Text style={globalStyles.saveButtonText}>Save Firewall</Text>
                            </View>                
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            
        </View>
    )
}

export default EditFirewallModal;