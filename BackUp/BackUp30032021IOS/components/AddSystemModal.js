import { Formik } from "formik";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from "moment";
import globalStyles from "../styles/global";
import SystemModal from "../shared/SystemModal";
import * as yup from "yup";

const SystemValidation = yup.object({
    system_identification : yup.string()
        .required("Please mention type of system LTP/DTP/CCTV/..."),
    system_name : yup.string()
        .required("Enter the host/device name")
        .min(3, "Three Character"),
    system_ip : yup.string()
        .required("Please enter DHCP/ip detail"),
    system_port : yup.string()
        .matches(/^[0-9]{2}$/,"Please enter port number"),
    system_username : yup.string()
        .required("Please enter the username"),
    system_password : yup.string()
        .required("Please enter the strong password")
        .min(6),
})


const AddSystemModal = ({setSystemModal, addSystem, site_id}) => {
    const date = new Date();
    return(
        <Formik
            initialValues={{
                site_id:site_id,
                system_identification:'',
                system_name:'',
                system_model:'',
                system_ip:'',
                system_port:'',
                system_username:'',
                system_password:'',
                date_of_purchase:''+ moment(date).format('DD-MM-YYYY'),
                remark:'',
            }}
            validationSchema = {SystemValidation}
            onSubmit = {(values,action) => {
                addSystem(values)
                action.resetForm()
                setSystemModal(false)
                //console.log(values)
            }}
        >
            {(props)  => (
                <View>
                    <SystemModal props={props}/>
                    <TouchableOpacity onPress={props.handleSubmit} style={globalStyles.saveButton}> 
                            <View style={globalStyles.secContainer}>
                                <Icon name='layer-group'  size={30}  />
                                <Text style={globalStyles.saveButtonText}>Add Systems</Text>
                            </View>                
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

export default AddSystemModal;