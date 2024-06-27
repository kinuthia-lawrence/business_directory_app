import { View, Text, Image,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {Colors} from './../constants/Colors.ts';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from './../hooks/useWarmUpBrowser.tsx';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow} = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async() =>{
    try{
        const { createdSessionId, singIn, signUp,setActive } = await startOAuthFlow();
        if(createdSessionId){
          setActive({session: createdSessionId});
        }else{
          //sign in or sign up
        }
    }catch(err){
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 100,
      }}>
      <Image source={require('./../assets/images/Management Dashboard.jpeg')} 
      style={{
        width: 200,
        height: 450,
        borderRadius: 20,
        borderWidth:6,
        borderColor: '#000',
      }}
      />
      </View>
      <View style={styles.subContainer}>
        <Text
        style={{
          fontSize: 30,
          fontFamily: 'outfit-bold',
          textAlign: 'center',        
        }}
        >Your Ultimate 
          <Text style={{
            color: Colors.PRIMARY,
          }}> COmmunity Business</Text> App</Text>
          <Text
          style={{
            fontSize: 15,
            fontFamily: 'outfit-regular',
            textAlign: 'center',
            color: Colors.GRAY,
          }}
          >Find your favorite Business near you and post your own business to your COmmunity</Text>
      </View >
      <TouchableOpacity style={styles.button}
      onPress={onPress}
      >
        <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 25,
          fontFamily: 'outfit-semibold',
        }}
        >
          Let's Get Started
        </Text>
      </TouchableOpacity>
    </View>
  )
}

//rnstyles
const styles = StyleSheet.create({
  subContainer:{
    backgroundColor: '#fff',
     padding:20,
     marginTop: -20,
     elevation: 5,
  },
  button:{
      margin: 40,
      backgroundColor: Colors.PRIMARY,
      padding: 7,
      borderRadius: 99,
  },
})
