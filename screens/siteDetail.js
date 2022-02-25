import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert, ScrollView } from 'react-native'
import axios from "axios";
import globalStyles from '../styles/global'
import CryptoJS from "crypto-js";
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

const SiteDetail = ({ route, navigation }) => {
    const { item, userToken } = route.params;

    //console.log(userToken)

    async function fetchPrinterData() {
        const URL = `https://alahliagroup.com/Inventory_App/printers_f_data.php?sid=${item.id}`
        //console.log(URL)
        const res = await fetch(URL)
        res
            .json()
            .then(res => setPrinter(res))
            .catch(error => console.log(error));
    }
    async function fetchFirewallData() {
        const URL = `https://alahliagroup.com/Inventory_App/firewalls_f_data.php?sid=${item.id}`
        //console.log(URL)
        const res = await fetch(URL)
        res
            .json()
            .then(res => setFirewall(res))
            .catch(error => console.log(error));
    }
    async function fetchSytemData() {
        const URL = `https://alahliagroup.com/Inventory_App/systems_f_data.php?sid=${item.id}`
        //console.log(URL)
        const res = await fetch(URL)
        res
            .json()
            .then(res => setSystem(res))
            .catch(error => console.log(error));
    }
    async function fetchLicenseData() {
        const URL = `https://alahliagroup.com/Inventory_App/licenses_f_data.php?sid=${item.id}`
        //console.log(URL)
        const res = await fetch(URL)
        //console.log(res.json())
        res
            .json()
            .then(res => setLicense(res))
            .catch(error => console.log(error));
    }
    async function fetchEtisalatData() {
        const URL = `https://alahliagroup.com/Inventory_App/etisalat_f_data.php?sid=${item.id}`
        //console.log(URL)
        const res = await fetch(URL)
        res
            .json()
            .then(res => setEtisalat(res))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchPrinterData();
        fetchFirewallData();
        fetchSytemData();
        fetchLicenseData();
        fetchEtisalatData();
        //fetchKey();
    }, [])

    const [printerSec, setPrinterSec] = useState(false)
    const [printerModal, setPrinterModal] = useState(false)
    const [printer, setPrinter] = useState([])

    const addprinter = (printer) => {
        //console.log(printer)
        //console.log(printer.printer_model);
        //printer.id = Math.random().toString()
        //setPrinter((currentPrinter) => { return[printer, ...currentPrinter]})
        printer.user = userToken;
        const URL = `https://alahliagroup.com/Inventory_App/printers_a_data.php`
        //console.log(printer)
        axios({
            method: "post",
            url: URL,
            headers: { "content-type": "application/json" },
            data: printer
        })
            .then((response) => setPrinter(response.data))
            //.then(responsejason => console.log("responsejason"))
            .catch(error => console.log(error));

    }
    const editPrinter = (printer) => {
        //console.log(printer)
        printer.user = userToken;
        const URL = `https://alahliagroup.com/Inventory_App/printers_u_data.php`
        axios({
            method: "post",
            url: URL,
            headers: { "content-type": "application/json" },
            data: printer
        })
            .then((response) => setPrinter(response.data))
            //.then(responsejason => console.log(responsejason))
            .catch(error => console.log(error));

        //setPrinter((currentPrinter) => {return [printer, ...currentPrinter.filter(print => print.id != printer.id)]})
    }
    const delPrinter = (printer) => {
        printer.user = userToken;
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
                    onPress: () => {
                        const URL = `https://alahliagroup.com/Inventory_App/printers_d_data.php`
                        axios({
                            method: "post",
                            url: URL,
                            headers: { "content-type": "application/json" },
                            data: printer
                        })
                            .then((response) => setPrinter(response.data))
                            .catch((error) => console.log(error))

                    }
                }
            ]
        )
    }

    const [firewallSec, setFirewallSec] = useState(false)
    const [firewallModal, setFirewallModal] = useState(false)
    const [firewall, setFirewall] = useState([])
    const addFirewall = (firewall) => {
        firewall.user = userToken;
        firewall.firewall_password = CryptoJS.AES.encrypt(firewall.firewall_password, '3Qt#6Q$TVp').toString();
        //console.log( firewall.firewall_password)
        const URL = `https://alahliagroup.com/Inventory_App/firewalls_a_data.php`
        axios({
            method: "post",
            url: URL,
            headers: { "content-type": "application/json" },
            data: firewall
        })
            .then(response => setFirewall(response.data))
            .catch(error => console.log(error));
    }
    const editFirewall = (firewall) => {
        firewall.user = userToken;
        firewall.firewall_password = CryptoJS.AES.encrypt(firewall.firewall_password, '3Qt#6Q$TVp').toString();
        //console.log( firewall.firewall_password)

        const URL = `https://alahliagroup.com/Inventory_App/firewalls_u_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: firewall
        })
            .then(response => setFirewall(response.data))
            .catch(error => console.log(error))
    }
    const delFirewall = (firewall) => {
        firewall.user = userToken;
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
                    onPress: () => {
                        const URL = `https://alahliagroup.com/Inventory_App/firewalls_d_data.php`
                        axios({
                            method: 'post',
                            url: URL,
                            headers: { 'content-type': 'application/json' },
                            data: firewall
                        })
                            .then(response => setFirewall(response.data))
                            .catch(error => console.log(error))
                    }
                }
            ]
        )
    }

    const [systemSec, setSytemSec] = useState(false)
    const [systemModal, setSystemModal] = useState(false)
    const [system, setSystem] = useState([])
    const addSystem = (system) => {
        system.user = userToken;
        system.system_password = CryptoJS.AES.encrypt(system.system_password, '3Qt#6Q$TVp').toString();
        const URL = `https://alahliagroup.com/Inventory_App/systems_a_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: system
        })
            .then(response => setSystem(response.data))
            .catch(error => console.log(error))
    }
    const editSystem = (system) => {
        system.user = userToken;
        system.system_password = CryptoJS.AES.encrypt(system.system_password, '3Qt#6Q$TVp').toString();
        const URL = `https://alahliagroup.com/Inventory_App/systems_u_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: system
        })
            .then(response => setSystem(response.data))
            .catch(error => console.log(error))
    }
    const delSystem = (system) => {
        system.user = userToken;
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
                    onPress: () => {
                        const URL = `https://alahliagroup.com/Inventory_App/systems_d_data.php`
                        axios({
                            method: 'post',
                            url: URL,
                            headers: { 'content-type': 'application/json' },
                            data: system
                        })
                            .then(response => setSystem(response.data))
                            .catch(error => console.log(error))
                    }
                }
            ]
        )
    }

    const [licenseSec, setLicenseSec] = useState(false)
    const [licenseModal, setLicenseModal] = useState(false)
    const [license, setLicense] = useState([])
    const addLicense = (license) => {
        license.user = userToken;
        license.license_key = CryptoJS.AES.encrypt(license.license_key, '3Qt#6Q$TVp').toString();
        const URL = `https://alahliagroup.com/Inventory_App/licenses_a_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: license
        })
            .then(response => setLicense(response.data))
            .catch(error => console.log(error))
    }
    const editLicense = (license) => {
        license.user = userToken;
        license.license_key = CryptoJS.AES.encrypt(license.license_key, '3Qt#6Q$TVp').toString();
        const URL = `https://alahliagroup.com/Inventory_App/licenses_u_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: license
        })
            .then(response => setLicense(response.data))
            .catch(error => console.log(error))
    }
    const delLicense = (license) => {
        license.user = userToken;
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
                    onPress: () => {
                        const URL = `https://alahliagroup.com/Inventory_App/licenses_d_data.php`
                        axios({
                            method: 'post',
                            url: URL,
                            headers: { 'content-type': 'application/json' },
                            data: license
                        })
                            .then(response => setLicense(response.data))
                            .catch(error => console.log(error))
                    }
                }
            ]
        )
    }

    const [etisalatSec, setEtisalatSec] = useState(false)
    const [etisalatModal, setEtisalatModal] = useState(false)
    const [etisalat, setEtisalat] = useState([])

    const addEtisalat = (etisalat) => {
        etisalat.user = userToken;
        const URL = `https://alahliagroup.com/Inventory_App/etisalat_a_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: etisalat
        })
            .then(response => setEtisalat(response.data))
            .catch(error => console.log(error))
    }
    const editEtisalat = (etisalat) => {
        etisalat.user = userToken;
        const URL = `https://alahliagroup.com/Inventory_App/etisalat_u_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: etisalat
        })
            .then(response => setEtisalat(response.data))
            .catch(error => console.log(error))
    }
    const delEtisalat = (etisalat) => {
        etisalat.user = userToken;
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
                    onPress: () => {
                        const URL = `https://alahliagroup.com/Inventory_App/etisalat_d_data.php`
                        axios({
                            method: 'post',
                            url: URL,
                            headers: { 'content-type': 'application/json' },
                            data: etisalat
                        })
                            .then(response => setEtisalat(response.data))
                            .catch(error => console.log(error))
                    }
                }
            ]
        )
    }
    return (
        <ScrollView>
            <View style={globalStyles.container} >
                <Text style={globalStyles.oswaldRegText}> Site ID No.{item.id} </Text>
                <View style={[globalStyles.secDashedContainer]}>
                    <View style={globalStyles.secLineContainer} >
                        <Text style={globalStyles.secChildListInfText1} > {item.emirate} </Text>
                        <Text style={globalStyles.secChildListInfText2} > {item.company} </Text>
                    </View>
                    <View style={globalStyles.secLineContainer}>
                        <Text style={globalStyles.secChildListDetailText2} > {item.outlet} </Text>
                        <Text style={globalStyles.secChildListDetailText1} > {item.phone} </Text>
                    </View>
                </View>
                <View style={[globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setPrinterSec(!printerSec)} >
                        <View style={globalStyles.secLineContainer}>
                            <Text style={globalStyles.secChildListDetailText2} > Printer - <Icon2 name='hand-pointer-o' size={25} /> me! </Text>
                            <Icon
                                name='pluscircle'
                                size={35}
                                style={globalStyles.addModalIcon}
                                onPress={() => {
                                    setPrinterSec(true),
                                        setPrinterModal(true)
                                }}
                            />
                            <Text style={globalStyles.addModalLabel}>Add Printers</Text>
                        </View>
                    </TouchableOpacity>
                    {printerSec && printer.filter(print => print.site_id == item.id).map((print) => <PrinterList print={print} editPrinter={editPrinter} delPrinter={delPrinter} key={print.id} />)}
                </View>
                <View style={[globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setFirewallSec(!firewallSec)}>
                        <View style={globalStyles.secLineContainer}>
                            <Text style={globalStyles.secChildListDetailText2} > Firewall -  <Icon2 name='hand-pointer-o' size={25} /> me! </Text>
                            <Icon
                                name='pluscircle'
                                size={35}
                                style={globalStyles.addModalIcon}
                                onPress={() => { setFirewallSec(true), setFirewallModal(true) }}
                            />
                            <Text style={globalStyles.addModalLabel}>Add Firewall</Text>
                        </View>
                    </TouchableOpacity>
                    {firewallSec && firewall.filter(fw => fw.site_id == item.id).map((fw) => <FirewallList fw={fw} editFirewall={editFirewall} delFirewall={delFirewall} key={fw.id} />)}
                </View>
                <View style={[globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setSytemSec(!systemSec)}>
                        <View style={globalStyles.secLineContainer}>
                            <Text style={globalStyles.secChildListDetailText2} > System -  <Icon2 name='hand-pointer-o' size={25} /> me! </Text>
                            <Icon
                                name='pluscircle'
                                size={35}
                                style={globalStyles.addModalIcon}
                                onPress={() => { setSytemSec(true), setSystemModal(true) }}
                            />
                            <Text style={globalStyles.addModalLabel}>Add Systems</Text>
                        </View>
                    </TouchableOpacity>
                    {systemSec && system.filter(sys => sys.site_id == item.id).map((sys) => <SystemList sys={sys} editSystem={editSystem} delSystem={delSystem} key={sys.id} />)}
                </View>
                <View style={[globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setLicenseSec(!licenseSec)}>
                        <View style={globalStyles.secLineContainer}>
                            <Text style={globalStyles.secChildListDetailText2} > License -  <Icon2 name='hand-pointer-o' size={25} /> me! </Text>
                            <Icon
                                name='pluscircle'
                                size={35}
                                style={globalStyles.addModalIcon}
                                onPress={() => { setLicenseSec(true), setLicenseModal(true) }}
                            />
                            <Text style={globalStyles.addModalLabel}>Add License</Text>
                        </View>
                    </TouchableOpacity>
                    {licenseSec && license.filter(lic => lic.site_id == item.id).map((lic) => <LicenseList lic={lic} editLicense={editLicense} delLicense={delLicense} key={lic.id} />)}
                </View>
                <View style={[globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setEtisalatSec(!etisalatSec)}>
                        <View style={globalStyles.secLineContainer}>
                            <Text style={globalStyles.secChildListDetailText2} > Etisalat -  <Icon2 name='hand-pointer-o' size={25} /> me! </Text>
                            <Icon
                                name='pluscircle'
                                size={35}
                                style={globalStyles.addModalIcon}
                                onPress={() => { setEtisalatSec(true), setEtisalatModal(true) }}
                            />
                            <Text style={globalStyles.addModalLabel}>Add Etisalat</Text>
                        </View>
                    </TouchableOpacity>
                    {etisalatSec && etisalat.filter(netwrk => netwrk.site_id == item.id).map((netwrk) => <EtisalatList netwrk={netwrk} editEtisalat={editEtisalat} delEtisalat={delEtisalat} key={netwrk.id} />)}
                </View>

                <Modal visible={printerModal}>
                    <AddPrinter setPrinterModal={setPrinterModal} addprinter={addprinter} site_id={item.id} />
                </Modal>

                <Modal visible={firewallModal}>
                    <AddFirewall setFirewallModal={setFirewallModal} addFirewall={addFirewall} site_id={item.id} />
                </Modal>

                <Modal visible={systemModal}>
                    <AddSystem setSystemModal={setSystemModal} addSystem={addSystem} site_id={item.id} />
                </Modal>

                <Modal visible={licenseModal}>
                    <AddLicense setLicenseModal={setLicenseModal} addLicense={addLicense} site_id={item.id} />
                </Modal>

                <Modal visible={etisalatModal}>
                    <AddEtisalat setEtisalatModal={setEtisalatModal} addEtisalat={addEtisalat} site_id={item.id} />
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