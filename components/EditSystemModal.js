import { Formik } from "formik";
import React from "react";
import { Text, View , TextInput, TouchableOpacity} from "react-native";
import globalStyles from "../styles/global";
import SystemModal from "../shared/SystemModal";
import Icon from 'react-native-vector-icons/FontAwesome5';
import CryptoJS from "crypto-js";
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
        .matches(/^[0-9]{2,}$/,"Please enter port number"),
    system_username : yup.string()
        .required("Please enter the username"),
    system_password : yup.string()
        .required("Please enter the strong password")
        .min(6),
})

const EditSystemModal = ({sys, editSystem, setEditSystemModalOpen}) => {
    sys.system_password = CryptoJS.AES.decrypt(sys.system_password, '3Qt#6Q$TVp').toString(CryptoJS.enc.Utf8);
    //console.log(sys.system_password)
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    site_id:sys.site_id,
                    system_identification:sys.system_identification,
                    system_name:sys.system_name,
                    system_model:sys.system_model,
                    system_ip:sys.system_ip,
                    system_port:sys.system_port,
                    system_username:sys.system_username,
                    system_password:sys.system_password,
                    date_of_purchase: sys.date_of_purchase,
                    id: sys.id, 
                    remark:sys.remark,             
                }}
                validationSchema = {SystemValidation}
                onSubmit={(values) => {
                    //console.log(values)
                    editSystem(values)
                    setEditSystemModalOpen(false)
                }}
            >
                {(props) => (
                    <View>
                        <SystemModal props={props}/>
                        <TouchableOpacity onPress={props.handleSubmit} style={globalStyles.saveButton}> 
                            <View style={globalStyles.secContainer}>
                                <Icon name='layer-group'  size={30}  />
                                <Text style={globalStyles.saveButtonText}>Save Systems</Text>
                            </View>               
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            
        </View>
    )
}

export default EditSystemModal;