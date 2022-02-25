import {StyleSheet} from 'react-native'

const globalStyles = StyleSheet.create({
    container:{
        padding:10,
        flex:1,
    },
    oswaldRegText: {
        fontFamily: 'Oswald-Regular',
        fontSize: 25,
    },
    citrusRegText: {
        fontFamily:'CitrusGothicInline-Regular',
        fontSize:25,
        color:'black'
    },
    secDashedContainer:{
        borderRadius:10,
        borderStyle:'dashed',
        borderWidth:1,
        marginVertical: 10,
        padding:10,
    },
    
    secText: {
        fontFamily: 'Oswald-Regular',
        fontSize: 25,
        //color: '#69321e',
        color:'black',
    },
   
    secChildListInfText1: {
        fontSize:14,
        fontFamily: 'CitrusGothicInline-Regular',
        color:'black',
        marginTop:10,
    },
    secChildListInfText2: {
        fontSize:16,
        fontFamily: 'CitrusGothicInline-Regular',
        color:'black',
        marginTop:10,
    },
    secChildListDetailText1: {
        fontSize:18,
        fontFamily: 'Oswald-Regular',
        color:'black',
        marginTop:10,
    },
    secChildListDetailText2: {
        fontSize:22,
        fontFamily: 'Oswald-Regular',
        color:'black',
        marginTop:10,
    },
    secContainer: {
        flexDirection:'row',
        //flexWrap:'wrap',
    },
    secLineItemContainer50:{
        width:'50%',
        marginTop:10,
        justifyContent:'space-evenly',
        padding:10,
        borderBottomWidth:0.6,
    },
    secLineItemContainer30:{
        width:'50%',
        marginTop:10,
        justifyContent:'space-evenly',
        padding:10,
        borderBottomWidth:0.5,
    },
    secLineContainer: {
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
    },
    deleteIcon: {
        color:'red',
        marginLeft:10,
        marginRight:30,
    },
    editIcon: {
        color:'black',        
        marginLeft:10,
        marginRight:30,
    },
    addIcon: {
        color:'green',
        margin:10,
    },
    
    addModalIcon: {
        position:'absolute',
        right:10,
        bottom:0,
        paddingBottom:10,
        //color:'#B2D4BF',      
        color:'#e5ba83',
    },
    addModalLabel:{
        position:'absolute',
        right:10,
        bottom:-10,
        marginTop:10,
        color:'black', 
        fontFamily: 'Oswald-Regular',
       
    },
    closeModalIcon:{
        alignSelf:'center',
        color:'#e56a5b',        
        paddingTop:15,
    },
    closeModalText:{
        alignSelf:'center',
        color:'black', 
        fontFamily: 'Oswald-Regular',
    },
    saveButton:{
        padding:10,
        borderRadius:50,
        margin:10,
        width:'auto',
        alignSelf:'center',
        //backgroundColor:'#B2D4BF',      
        backgroundColor:'#e5ba83',
        
    },
    saveButtonText:{
        textAlign:'center',
        fontFamily: 'Oswald-Regular',
        fontSize:20,
        paddingHorizontal:10,
    },
    headerText :{
        fontFamily: 'CitrusGothicInline-Regular',
        fontSize:40,
        letterSpacing:1,
        color: '#444'
    },
    menuIcon:{
        position:'absolute',
        left:0,
    },
    menuContainer:{
        width:'100%',
        height:'100%',
        //alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    headerImage: {
        width: '100%',
        opacity:0.1,
        height: '100%',
        resizeMode:'cover',
    },
    errorText:{
        color:'#e56a5b',
        fontWeight: 'bold',
        textAlign:'center',
    },
    boldText:{
        fontWeight:'bold',
    },
    searchIcon:{
        color:'green',
        margin:10,
    },
    searchText:{
        width:'80%',
        height:40,
        fontSize:15,
        borderBottomWidth:0.8,
        borderBottomColor:'green',
        color:'black',
    },
    splashLogo:{
        width: "100%",
        resizeMode: 'center',
    },
    splashHeader: {
        flex:2.5,
        justifyContent:'center',
        //alignContent:'center',
        //alignItems:'center',
    },
    splashFooter:{
        flex:1,
        justifyContent:'flex-start',
        alignItems: 'flex-end',
        
    },
    splashImage:{
        width: "100%",
        resizeMode: 'contain',
    },
    signIcon:{
        color:'green',
        paddingTop:10,
        //backgroundColor:'red',
        marginRight:30,
    },
    signText:{
        fontFamily: 'Oswald-Regular',
        fontSize: 30,
        //color: '#69321e',
        color:'black',
        //backgroundColor:'green',
        padding:10,
    },
    signButton:{
        borderRadius:30,
        width:'auto',
        alignSelf:'flex-end',
        //backgroundColor:'#B2D4BF',      
        //backgroundColor:'grey',
    },
    accountIcon:{
        color:'black',
        paddingTop:10,
        //backgroundColor:'red',
        marginLeft:10,
    },
    accountButton:{
        borderRadius:30,
        width:'auto',
        alignSelf:'center',
        backgroundColor:'#e5ba83',      
        //backgroundColor:'grey',
    },
    

})

export default globalStyles;