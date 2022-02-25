import React from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import globalStyles from "../styles/global";
import Icon from 'react-native-vector-icons/AntDesign';
import { Formik } from "formik";
import * as yup from 'yup'
import SiteModal from "../shared/SiteModal";

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

const AddSiteModal = ({addSite, setModalOpen}) => {
    return(

        <View style={globalStyles.container} >
            
                <Formik
                    initialValues={{emirate:'', company:'', outlet:'', phone:''}}
                    validationSchema={SiteValidation}
                    onSubmit={(values,actions) => {
                        addSite(values)
                        actions.resetForm(); 
                        setModalOpen(false)
                        //console.log(values);
                    }}
                >
                    {(props) => (
                        <View>
                            <SiteModal props={props}/>
                            <TouchableOpacity onPress={props.handleSubmit} style={globalStyles.saveButton}> 
                                <View style={globalStyles.secContainer}>
                                    <Icon name='pluscircle'  size={25}  />
                                    <Text style={globalStyles.saveButtonText}> Add Sites</Text>
                                </View>                
                            </TouchableOpacity>
                        </View>
                        
                        
                    )}
                </Formik>
            
        </View>
    )
}

export default AddSiteModal;