import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Modal, Alert, ScrollView} from 'react-native'
import globalStyles from '../styles/global'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import AddPrinter from "./addPrinter";
import AddFirewall from './addFirewall'
import AddSystem from "./addSystem";
import AddLicense from "./addLicense";
import AddEtisalat from "./addEtisalat";
import PrinterList from '../components/PrinterList';
import FirewallList from "../components/FirewallList";
import SystemList from "../components/SystemList";
import LicenseList from "../components/LicenseList";
import EtisalatList from "../components/EtisalatList";

const SiteDetail = ({route, navigation}) => {
    const {item} =route.params;
    const [printerSec, setPrinterSec] = useState(false)
    const [printerModal, setPrinterModal] = useState(false)
    const [printer, setPrinter] = useState([
        {
            site_id : '1',
            printer_model : 'TMT88IV-1',
            printer_alias_name : 'Bar',
            printer_details : '192.168.1.1',
            date_of_purchase : '06041991',
            key : 1,
            remark: 'test remark',
        },
        {
            site_id : '3',
            printer_model : 'TMT88IV-3',
            printer_alias_name : 'Bar',
            printer_details : '192.168.1.1',
            date_of_purchase : '06041991',
            key : 3,
            remark: 'test remark',
        }
    ])
    async function fetchPrinterData() {
        const URL = `http://172.25.7.22:8080/Inventory_App/printers_f_data.php?sid=${item.id}`
        //console.log(URL)
        const res = await fetch(URL)
        res
          .json()
          .then(res => setPrinter(res))
          .catch(err => console.log(err));
      }
    useEffect(() => {
        fetchPrinterData();            
    }, [])
    const addprinter = (printer) => {
        //console.log(printer.printer_model);
        printer.key = Math.random().toString()
        setPrinter((currentPrinter) => { return[printer, ...currentPrinter]})
    }
    const editPrinter = (printer) => {
        console.log(printer)

        setPrinter((currentPrinter) => {return [printer, ...currentPrinter.filter(print => print.key != printer.key)]})
    }
    const delPrinter = (printer) => {
        Alert.alert(
            "Delete Confirmation",
            "Are you sure you want to delete this printer",
            [
                {
                    text: "Cancel",
                    style: 'cancel'
                },
                {
                    text: "Ok",
                    onPress: () => setPrinter((currentPrinter) => currentPrinter.filter(print => print.key != printer.key))
                }
            ]
        )
    }

    const [firewallSec, setFirewallSec] = useState(false)
    const [firewallModal, setFirewallModal] = useState(false)
    const [firewall, setFirewall] = useState([
        {
            site_id: '3',
            firewall_model : 'XG-350',
            firewall_ip : '192.168.1.1',
            firewall_dyn: 'abc@dyndns.org',
            firewall_port: '443',
            firewall_username: 'admin',
            firewall_password: 'password',
            date_of_purchase: '06041991',
            key: 1,
            remark: 'test remark',
        }
    ])
    const addFirewall = (firewall) => {
        firewall.key = Math.random().toString()
        setFirewall((currentFirewall) => {return[firewall, ...currentFirewall]})
    }
    const editFirewall = (firewall) => {
        console.log(firewall)
        setFirewall((currentFirewall) => {return[firewall, ...currentFirewall.filter(fw => fw.key != firewall.key)]})
    }
    const delFirewall = (firewall) => {
        Alert.alert(
            "Delete Confirmation",
            "Are you sure you want to delete this Firewall",
            [
                {
                    text: "Cancel",
                    style: 'cancel'
                },
                {
                    text: "Ok",
                    onPress: () => setFirewall((currentFirewall) => currentFirewall.filter(fw => fw.key != firewall.key))
                }
            ]
        )
    }

    const [systemSec, setSytemSec] = useState(false)
    const [systemModal, setSystemModal] = useState(false)
    const [system, setSystem] = useState([{
        site_id:'1',
        system_identification:'CCTV',
        system_name:'L20255Dhairya',
        system_model:'Hikvision',
        system_ip:'8.8.8.8',
        system_port:'80',
        system_username:'admin',
        system_password:'admin',
        date_of_purchase:'06041991',
        key:1,
        remark: 'test remark',
    }])
    const addSystem = (system) => {
        system.key = Math.random().toString();
        setSystem((currentSystem) => {return [system, ...currentSystem]})
    }
    const editSystem = (system) => {
        console.log(system)
        setSystem((currentSystem) => {return[system, ...currentSystem.filter(sys=> sys.key != system.key)]})
    }
    const delSystem = (system) => {
        Alert.alert(
            "Delete Confirmation",
            "Are you sure you want to delete this System",
            [
                {
                    text: "Cancel",
                    style: 'cancel'
                },
                {
                    text: "Ok",
                    onPress: () => setSystem((currentSystem) => currentSystem.filter(sys => sys.key != system.key))
                }
            ]
        )
    }

    const [licenseSec, setLicenseSec] = useState(false)
    const [licenseModal, setLicenseModal] = useState(false)
    const [license, setLicense] =useState([{
        site_id: '1',
        license_product: 'Office2019',
        license_system_name: 'L20255DhairyaLap',
        license_key:'2345-12345-12345-12345',
        license_reg_email: 'it@alahliagroup.com',
        date_of_purchase:'06041991',
        key:1,
        remark: 'test remark',
    }])
    const addLicense = (license) => {
        license.key = Math.random().toString();
        setLicense((currentLicense) => {return [license, ...currentLicense]})
    }
    const editLicense = (license) => {
        console.log(license)
        setLicense((currentLicense) => {return [license, ...currentLicense.filter(lic => lic.key != license.key)]})
    }
    const delLicense = (license) => {
        Alert.alert(
            "Delete Confirmation",
            "Are you sure you want to delete this License",
            [
                {
                    text: "Cancel",
                    style: 'cancel'
                },
                {
                    text: "Ok",
                    onPress: () => setLicense((currentLicense) => currentLicense.filter(lic => lic.key != license.key))
                }
            ]
        )
    }

    const [etisalatSec, setEtisalatSec] = useState(false)
    const [etisalatModal, setEtisalatModal] = useState(false)
    const [etisalat, setEtisalat] =useState([{
        site_id: '1',
        etisalat_plan: 'b2b',
        etisalat_number: '0267648798',
        etisalat_fax_number:'026419811',
        etisalat_subline: '4',
        etisalat_internet:'4506041991',
        key:1,
        remark: 'test remark',
    }])
    
    const addEtisalat = (etisalat) => {
        
        etisalat.key = Math.random().toString();
        console.log(etisalat)
        setEtisalat((currentEtisalat) => {return [etisalat, ...currentEtisalat]})
    }
    const editEtisalat = (etisalat) => {
        setEtisalat((currentEtisalat) => {return [etisalat, ...currentEtisalat.filter(netwrk => netwrk.key != etisalat.key)]})
    }
    const delEtisalat = (etisalat) => {
        Alert.alert(
            "Delete Confirmation",
            "Are you sure you want to delete this Etisalat plan",
            [
                {
                    text: "Cancel",
                    style: 'cancel'
                },
                {
                    text: "Ok",
                    onPress: () => setEtisalat((currentEtisalat) => currentEtisalat.filter(netwrk => netwrk.key != etisalat.key))
                }
            ]
        )
    }
    return(
        <ScrollView>
            <View style={globalStyles.container} >            
                <Text style={globalStyles.oswaldRegText}> Site ID No.{item.id} </Text>
                <View style={[ globalStyles.secDashedContainer]}>
                    <View style={globalStyles.secLineContainer} >
                        <Text style={globalStyles.secChildListInfText1} > {item.emirate} </Text>
                        <Text style={globalStyles.secChildListInfText2} > {item.company} </Text>
                    </View>
                    <View style={globalStyles.secLineContainer}>                    
                        <Text style={globalStyles.secChildListDetailText2} > {item.outlet} </Text>
                        <Text style={globalStyles.secChildListDetailText1} > {item.phone} </Text>        
                    </View>  
                </View>
                <View style={[ globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setPrinterSec(!printerSec)} >
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.secChildListDetailText2} > Printer - <Icon2 name='hand-pointer-o' size={25}/> me! </Text>
                            <Icon 
                                name='pluscircle' 
                                size={35}  
                                style={globalStyles.addModalIcon}
                                onPress={() => {
                                    setPrinterSec(true), 
                                    setPrinterModal(true),
                                    fetchPrinterData()}}
                            />
                            <Text style={globalStyles.addModalLabel}>Add Printers</Text>        
                        </View> 
                    </TouchableOpacity>
                    { printerSec &&  printer.filter(print => print.site_id == item.id).map((print) => <PrinterList print={print} editPrinter={editPrinter} delPrinter={delPrinter} key={print.id}/>) }  
                </View> 
                <View style={[ globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={()=> setFirewallSec(!firewallSec)}>
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.secChildListDetailText2} > Firewall -  <Icon2 name='hand-pointer-o' size={25}/> me! </Text>
                            <Icon 
                                    name='pluscircle' 
                                    size={35}  
                                    style={globalStyles.addModalIcon}
                                    onPress={() => {setFirewallSec(true), setFirewallModal(true)}}
                                />
                                <Text style={globalStyles.addModalLabel}>Add Firewall</Text>         
                        </View>  
                    </TouchableOpacity>
                    {firewallSec && firewall.filter(fw => fw.site_id == item.id).map((fw) => <FirewallList fw={fw} editFirewall={editFirewall} delFirewall={delFirewall} key={fw.key}/>) }  
                </View> 
                <View style={[ globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setSytemSec(!systemSec)}>
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.secChildListDetailText2} > System -  <Icon2 name='hand-pointer-o' size={25}/> me! </Text>
                            <Icon 
                                    name='pluscircle' 
                                    size={35}  
                                    style={globalStyles.addModalIcon}
                                    onPress={() => {setSytemSec(true), setSystemModal(true)}}
                                />
                                <Text style={globalStyles.addModalLabel}>Add Systems</Text>        
                        </View>
                    </TouchableOpacity> 
                    {systemSec && system.filter(sys => sys.site_id == item.id).map((sys) => <SystemList sys={sys} editSystem={editSystem} delSystem={delSystem} key={sys.key} />)} 
                </View>
                <View style={[ globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setLicenseSec(!licenseSec)}>
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.secChildListDetailText2} > License -  <Icon2 name='hand-pointer-o' size={25}/> me! </Text>
                            <Icon 
                                    name='pluscircle' 
                                    size={35}  
                                    style={globalStyles.addModalIcon}
                                    onPress={() => {setLicenseSec(true), setLicenseModal(true)}}
                                />
                                <Text style={globalStyles.addModalLabel}>Add License</Text>        
                        </View>
                    </TouchableOpacity> 
                    {licenseSec && license.filter(lic => lic.site_id == item.id).map((lic) => <LicenseList lic={lic} editLicense={editLicense} delLicense={delLicense} key={lic.key} />)} 
                </View>
                <View style={[ globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setEtisalatSec(!etisalatSec)}>
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.secChildListDetailText2} > Etisalat -  <Icon2 name='hand-pointer-o' size={25}/> me! </Text>
                            <Icon 
                                    name='pluscircle' 
                                    size={35}  
                                    style={globalStyles.addModalIcon}
                                    onPress={() => {setEtisalatSec(true), setEtisalatModal(true)}}
                                />
                                <Text style={globalStyles.addModalLabel}>Add Etisalat</Text>        
                        </View>
                    </TouchableOpacity> 
                    {etisalatSec && etisalat.filter(netwrk => netwrk.site_id == item.id).map((netwrk) => <EtisalatList netwrk={netwrk} editEtisalat={editEtisalat} delEtisalat={delEtisalat} key={netwrk.key} />)} 
                </View>

                <Modal visible={printerModal}>
                    <AddPrinter setPrinterModal={setPrinterModal} addprinter={addprinter} site_id={item.id}/>
                </Modal>

                <Modal visible={firewallModal}>
                    <AddFirewall setFirewallModal={setFirewallModal} addFirewall={addFirewall} site_id={item.id}/>
                </Modal>

                <Modal visible={systemModal}>
                    <AddSystem setSystemModal = {setSystemModal} addSystem = {addSystem} site_id={item.id}/>
                </Modal>

                <Modal visible={licenseModal}>
                    <AddLicense setLicenseModal = {setLicenseModal} addLicense = {addLicense} site_id={item.id}/>
                </Modal>

                <Modal visible={etisalatModal}>
                    <AddEtisalat setEtisalatModal = {setEtisalatModal} addEtisalat = {addEtisalat} site_id={item.id}/>
                </Modal>
            </View>
        </ScrollView>
    )
}

export default SiteDetail;

const styles = StyleSheet.create({
    hidden: {
        
    }
});