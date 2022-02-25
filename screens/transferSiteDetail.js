import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert, ScrollView } from 'react-native'
import axios from "axios";
import globalStyles from '../styles/global'
import CryptoJS from "crypto-js";
import Icon2 from 'react-native-vector-icons/FontAwesome';
import TransferPrinterList from '../components/TransferPrinterList';
import TransferFirewallList from "../components/TransferFirewallList";
import TransferSystemList from "../components/TransferSystemList";
import TransferLicenseList from "../components/TransferLicenseList";
import TransferEtisalatList from "../components/TransferEtisalatList";

const TransferSiteDetail = ({ route, navigation }) => {
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
    const [printer, setPrinter] = useState([])

    const transferPrinter = (printer) => {
        //console.log(printer)
        printer.user = userToken;
        printer.current_site = item.id;
        printer.category = 'printer'
        const URL = `https://alahliagroup.com/Inventory_App/printers_t_data.php`
        axios({
            method: "post",
            url: URL,
            headers: { "content-type": "application/json" },
            data: printer
        })
            .then((response) => {
                setPrinter(response.data)
                //console.log(response.data)
            }
            )
            //.then(responsejason => console.log(responsejason))
            .catch(error => console.log(error));

        //setPrinter((currentPrinter) => {return [printer, ...currentPrinter.filter(print => print.id != printer.id)]})
    }

    const [firewallSec, setFirewallSec] = useState(false)
    const [firewall, setFirewall] = useState([])
    const transferFirewall = (firewall) => {
        firewall.user = userToken;
        firewall.current_site = item.id;
        firewall.category = 'firewall'
        firewall.firewall_password = CryptoJS.AES.encrypt(firewall.firewall_password, '3Qt#6Q$TVp').toString();
        //console.log( firewall.firewall_password)

        const URL = `https://alahliagroup.com/Inventory_App/firewalls_t_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: firewall
        })
            .then(response => {
                setFirewall(response.data)
                //console.log(response.data)
            })
            .catch(error => console.log(error))
    }


    const [systemSec, setSytemSec] = useState(false)
    const [system, setSystem] = useState([])
    const transferSystem = (system) => {
        system.user = userToken;
        system.current_site = item.id;
        system.category = 'system'
        system.system_password = CryptoJS.AES.encrypt(system.system_password, '3Qt#6Q$TVp').toString();
        console.log(system)
        const URL = `https://alahliagroup.com/Inventory_App/systems_t_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: system
        })
            .then(response => {
                setSystem(response.data)
                //console.log(response.data)
            })
            .catch(error => console.log(error))
    }


    const [licenseSec, setLicenseSec] = useState(false)
    const [license, setLicense] = useState([])
    const transferLicense = (license) => {
        license.user = userToken;
        license.current_site = item.id;
        license.category = 'license'
        license.license_key = CryptoJS.AES.encrypt(license.license_key, '3Qt#6Q$TVp').toString();
        const URL = `https://alahliagroup.com/Inventory_App/licenses_t_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: license
        })
            .then(response => setLicense(response.data))
            .catch(error => console.log(error))
    }

    const [etisalatSec, setEtisalatSec] = useState(false)
    const [etisalat, setEtisalat] = useState([])

    const editEtisalat = (etisalat) => {
        etisalat.user = userToken;
        etisalat.current_site = item.id;
        etisalat.category = 'etisalat'
        const URL = `https://alahliagroup.com/Inventory_App/etisalat_t_data.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: etisalat
        })
            .then(response => setEtisalat(response.data))
            .catch(error => console.log(error))
    }
    return (
        <ScrollView>
            <View style={globalStyles.container} >

                <Text style={globalStyles.errorText}>Transfer the Component </Text>
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
                            <Text style={globalStyles.secChildListDetailText2} > Printer - Transfer <Icon2 name='chevron-right' size={25} /> me! </Text>

                        </View>
                    </TouchableOpacity>
                    {printerSec && printer.filter(print => print.site_id == item.id).map((print) => <TransferPrinterList category='printer' print={print} transferDevice={transferPrinter} key={print.id} />)}
                </View>
                <View style={[globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setFirewallSec(!firewallSec)}>
                        <View style={globalStyles.secLineContainer}>
                            <Text style={globalStyles.secChildListDetailText2} > Firewall - Transfer <Icon2 name='chevron-right' size={25} /> me! </Text>

                        </View>
                    </TouchableOpacity>
                    {firewallSec && firewall.filter(fw => fw.site_id == item.id).map((fw) => <TransferFirewallList category='firewall' fw={fw} transferDevice={transferFirewall} key={fw.id} />)}
                </View>
                <View style={[globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setSytemSec(!systemSec)}>
                        <View style={globalStyles.secLineContainer}>
                            <Text style={globalStyles.secChildListDetailText2} > System - Transfer <Icon2 name='chevron-right' size={25} /> me! </Text>

                        </View>
                    </TouchableOpacity>
                    {systemSec && system.filter(sys => sys.site_id == item.id).map((sys) => <TransferSystemList category='system' sys={sys} transferDevice={transferSystem} key={sys.id} />)}
                </View>
                <View style={[globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setLicenseSec(!licenseSec)}>
                        <View style={globalStyles.secLineContainer}>
                            <Text style={globalStyles.secChildListDetailText2} > License - Transfer <Icon2 name='chevron-right' size={25} /> me! </Text>

                        </View>
                    </TouchableOpacity>
                    {licenseSec && license.filter(lic => lic.site_id == item.id).map((lic) => <TransferLicenseList category='license' lic={lic} transferDevice={transferLicense} key={lic.id} />)}
                </View>
                <View style={[globalStyles.secDashedContainer]}>
                    <TouchableOpacity onPress={() => setEtisalatSec(!etisalatSec)}>
                        <View style={globalStyles.secLineContainer}>
                            <Text style={globalStyles.secChildListDetailText2} > Etisalat - Transfer <Icon2 name='chevron-right' size={25} /> me! </Text>

                        </View>
                    </TouchableOpacity>
                    {etisalatSec && etisalat.filter(netwrk => netwrk.site_id == item.id).map((netwrk) => <TransferEtisalatList category='etisalat' netwrk={netwrk} transferDevice={editEtisalat} key={netwrk.id} />)}
                </View>


            </View>
        </ScrollView>
    )
}

export default TransferSiteDetail;

const styles = StyleSheet.create({
    hidden: {

    }
});