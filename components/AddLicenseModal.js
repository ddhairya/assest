import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import globalStyles from "../styles/global";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";
import LicenseModal from "../shared/LicenseModal";
import * as yup from "yup";

const LicenseValidation = yup.object({
    license_product : yup.string()
        .required("Please mention the product Office/Window/..."),
    license_system_name : yup.string()
        .required("Please enter the installed system name"),
    license_key : yup.string()
        .required("Enter the key"),
    license_reg_email : yup.string()
        .required("Enter the key"),
    date_of_purchase : yup.string()
        .required("Enter the installtion date")
})

const AddLicenseModal = ({site_id, setLicenseModal, addLicense}) => {
    const date = new Date();
    return(
        <Formik
            initialValues = {{
                site_id: site_id,
                license_product: '',
                license_system_name: '',
                license_key:'',
                license_reg_email: '',
                date_of_purchase: ''+ moment(date).format('DD-MM-YYYY'),
                remark:'',
            }}
            validationSchema = {LicenseValidation}
            onSubmit = {(values,actions) => {
                addLicense(values)
                actions.resetForm()
                setLicenseModal(false)
                //console.log(values)
            }}
        >
            {(props) => (
                <View>
                    <LicenseModal props={props}/>
                    <TouchableOpacity onPress={props.handleSubmit} style={globalStyles.saveButton}> 
                            <View style={globalStyles.secContainer}>
                                <Icon name='drivers-license'  size={30}  />
                                <Text style={globalStyles.saveButtonText}>Add License</Text>
                            </View>                
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

export default AddLicenseModal;