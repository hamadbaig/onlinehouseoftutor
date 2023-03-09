import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const feespays=({navigation})=>{
    return(
     <View>
         <Text>this is second screen</Text>
     </View>
    );
}
export default feespays;
const handleLogin =  () => {
   
    fetch('http://192.168.0.117/hotapi/api/Main/userLogin', {
        method: 'Post',
        headers: {
            Accept: 'application/json',
            'content-Type': 'application/json',

        },
        body: JSON.stringify({
           email: email,
           password: Password,

        }),
    })
        .then((response) => response.json())
        .then((responseJson) => 
         {
           if (email==''&& Password=='')
           {
            
             Alert.alert('Warning','Please Enter Email and Password')
           }
           if(reponse.role == "teacher");{
             alert("login successfuly");
             navigation.navigate('Tutor1');
           }
           if(responseJson.role == "student");{
             alert("login successfuly");
             navigation.navigate('Studenth');
           }
           
        })
        .catch((error)=>{
          console.error(error);
        });
 }