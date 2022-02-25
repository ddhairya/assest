import { Formik } from "formik";
import React from "react";
import { Text, View , TextInput, TouchableOpacity} from "react-native";
import globalStyles from "../styles/global";
import SiteModal from "../shared/SiteModal";
import Icon from 'react-native-vector-icons/AntDesign';
import * as yup from "yup";

const SiteValidation = yup.object({
    emirate:yup.string()
        .required("Select the emirate"),
    company:yup.string()
        .required("Select the company"),
    outlet: yup.string()
        .required("Please enter min 3 Character")
        .min(3),
    phone: yup.string()
        .required()
        //.min(10)
        // .matches(
        //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        //   )
        .matches(
            /^[\d-]{10,}$/,
            "Must Contain Number in format xx-xxxxxxx / xxxxxxxxxx "
          ),
        
})
const EditSiteModal = ({item, editSite, setEditSiteModalOpen}) => {
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{emirate:item.emirate, company:item.company, outlet:item.outlet, phone:item.phone, id:item.id}}
                validationSchema = {SiteValidation}
                onSubmit={(values) => {
                    editSite(values)
                    setEditSiteModalOpen(false)
                }}
            >
                {(props) => (
                    <View>
                        <SiteModal props={props}/>
                        <TouchableOpacity onPress={props.handleSubmit} style={globalStyles.saveButton}> 
                                <View style={globalStyles.secContainer}>
                                    <Icon name='pluscircle'  size={25}  />
                                    <Text style={globalStyles.saveButtonText}> Save Sites</Text>
                                </View>                
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            
        </View>
    )
}

export default EditSiteModal;