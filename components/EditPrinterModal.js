import { Formik } from "formik";
import React from "react";
import { Text, View , TextInput, TouchableOpacity} from "react-native";
import globalStyles from "../styles/global";
import PrinterModal from "../shared/PrinterModal";
import Icon from 'react-native-vector-icons/AntDesign';
import * as yup from 'yup'

const PrinterValidation = yup.object({
    printer_model : yup.string()
        .required("Please enter printer model"),
    printer_alias_name : yup.string()
        .required("Please enter printer alias name"),
    printer_details : yup.string()
        .required("Please mention printer USB or ip details")
})

const EditPrinterModal = ({print, editPrinter, setEditPrinterModalOpen}) => {
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    site_id : print.site_id,
                    printer_model : print.printer_model, 
                    printer_alias_name : print.printer_alias_name, 
                    printer_details : print.printer_details,
                    date_of_purchase : print.date_of_purchase,  
                    id: print.id, 
                    remark:print.remark,             
                }}
                validationSchema = {PrinterValidation}
                onSubmit={(values) => {
                    //console.log(values)
                    editPrinter(values)
                    setEditPrinterModalOpen(false)
                }}
            >
                {(props) => (
                    <View>
                        <PrinterModal props={props}/>
                        <TouchableOpacity onPress={props.handleSubmit} style={globalStyles.saveButton}> 
                            <View style={globalStyles.secContainer}>
                                <Icon name='printer'  size={30}  />
                                <Text style={globalStyles.saveButtonText}> Save Printer</Text>
                            </View>                 
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            
        </View>
    )
}

export default EditPrinterModal;