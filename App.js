import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from "./routes/homeStack";
import ProfileStack from "./routes/profileStack";
import SignOut from "./routes/signout";

import RootStack from "./routes/rootStack";
import { useState, useEffect, useMemo, useReducer } from 'react';
import AuthContext from "./components/context";
import { ActivityIndicator, Image, View } from 'react-native';
import globalStyles from './styles/global';

//import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios from "axios";

import CryptoJS from "crypto-js";

const Drawer = createDrawerNavigator();

function App() {
  //const [isLoading, setIsLoading] = useState(true)
  //const [userToken, setUserToken] = useState(null)
  //console.log("Hello");

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.username,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    signIn: async (userName, password) => {
      // setUserToken('ABC');
      // setIsLoading(false);
      const auth = { username: userName, password: password }
      //console.log(auth)
      const URL = `https://alahliagroup.com/Inventory_App/auth.php`
      axios({
        method: 'post',
        url: URL,
        headers: { "content-type": "application/json" },
        data: auth,
      })
        //.then(response => console.log(response.data))
        .then(async (response) => {
          response.data = CryptoJS.AES.decrypt(response.data, '3Qt#6Q$TVp').toString(CryptoJS.enc.Utf8);
          //console.log(response.data)  //it will print the real password of the user
          if (response.data === password) {
            try {
              //userToken = userName;
              await EncryptedStorage.setItem('userToken', userName)
              dispatch({ type: 'LOGIN', username: userName, token: userName })
            } catch (e) {
              console.log(e)
            }
          } else {

            alert("Incorrect Credential")
          }
        })
        .catch((error) => console.log(error))

      // let userToken;
      // userToken = null;
      // if(userName == 'dash' && password == 'pass'){
      //   try{
      //     userToken = userName;
      //     await AsyncStorage.setItem('userToken', userToken)
      //   }catch(e){
      //     console.log(e)
      //   }
      // }

    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false)
      try {
        await EncryptedStorage.removeItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'LOGOUT' })
    }
  }), []);



  useEffect(() => {
    setTimeout(async () => {
      //console.log(isLoading)
      //setIsLoading(false)
      //console.log(isLoading)
      let userToken;
      userToken = null;
      try {
        userToken = await EncryptedStorage.getItem('userToken')
      } catch (e) {
        console.log(e)
      }

      dispatch({ type: 'RETRIEVE', token: userToken })
      //console.log(loginState.userToken);
      //console.log(loginState.isLoading)
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    //console.log(loginState.isLoading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={globalStyles.splashLogo} source={require("./assets/images/logo.png")} />
        <ActivityIndicator size='small' color='red' />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          //console.log(loginState.userToken)
        }
        {loginState.userToken !== null ?
          (
            <Drawer.Navigator>
              <Drawer.Screen name='homeStack' component={HomeStack} options={{ title: 'Home' }} />
              <Drawer.Screen name='profileStack' component={ProfileStack} options={{ title: 'Profile' }} />
            </Drawer.Navigator>
          ) : (
            <RootStack />
          )
        }

      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
