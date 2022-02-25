import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import globalStyles from "../styles/global";
import Icon from 'react-native-vector-icons/FontAwesome5';
import EtisalatModal from "../shared/EtisalatModal";
import * as yup from "yup";

const EtisalatValidation = yup.object({
    etisalat_plan: yup.string()
        .required("Please enter the plan name"),
    etisalat_number: yup.string()
        .required("Please enter the number")
        .matches(
            /^[\d-]{10,}$/,
            "Must Contain Number in format xx-xxxxxxx / xxxxxxxxxx "
        ),
    etisalat_fax_number: yup.string()
        .matches(
            /^[\d-]{10,}$/,
            "Must Contain Number in format xx-xxxxxxx"
        ),
    etisalat_subline: yup.string()
        .matches(
            /^[\d]{1,}$/,
            "Please enter only the number of additional lines "
        ),


})

const AddEtisalatModal = ({ site_id, setEtisalatModal, addEtisalat }) => {

    return (
        <Formik
            initialValues={{
                site_id: site_id,
                etisalat_plan: '',
                etisalat_number: '',
                etisalat_fax_number: '',
                etisalat_subline: '',
                etisalat_internet: '',
                remark: '',
            }}
            validationSchema={EtisalatValidation}
            onSubmit={(values, actions) => {
                addEtisalat(values)
                actions.resetForm()
                setEtisalatModal(false)
                //console.log(values)
            }}
        >
            {(props) => (
                <View>
                    <EtisalatModal props={props} />
                    <TouchableOpacity onPress={props.handleSubmit} style={globalStyles.saveButton}>
                        <View style={globalStyles.secContainer}>
                            <Icon name='sim-card' size={30} />
                            <Text style={globalStyles.saveButtonText}>Add Etisalat</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

export default AddEtisalatModal;