import { Formik } from "formik";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "../styles/global";
import PrinterModal from "../shared/PrinterModal";
import Icon from 'react-native-vector-icons/AntDesign';
import moment from "moment";
import * as yup from 'yup'

const PrinterValidation = yup.object({
    printer_model : yup.string()
        .required("Please enter printer model"),
    printer_alias_name : yup.string()
        .required("Please enter printer alias name"),
    printer_details : yup.string()
        .required("Please mention printer USB or ip details")
})

const AddPrinterModal = ({setPrinterModal, addprinter, site_id}) => {
    const date = new Date()
    
    return(

        <View style={globalStyles.container}>
            
            <Formik
                initialValues = {{ 
                    site_id : site_id,
                    printer_model : '', 
                    printer_alias_name : '', 
                    printer_details : '',
                    date_of_purchase : ''+ moment(date).format('DD-MM-YYYY'),  
                    remark:'',              
                }}
                validationSchema = {PrinterValidation}
                onSubmit = { (values, actions) => {
                    addprinter(values)
                    actions.resetForm()
                    setPrinterModal(false)
                    //console.log(values)
                    
                }}
            >
                {(props) => (
                    <View>
                        <PrinterModal props={props}/>
                        <TouchableOpacity onPress={props.handleSubmit} style={globalStyles.saveButton}> 
                            <View style={globalStyles.secContainer}>
                                <Icon name='printer'  size={30}  />
                                <Text style={globalStyles.saveButtonText}> Add Printer</Text>
                            </View>                
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default AddPrinterModal;