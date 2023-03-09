import React, { useState } from 'react';
import { StyleSheet,  Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Studentprofile = ({ navigation }) => {
  
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

 
  return (
    <View style={styles.container}>
    <Text style={styles.text}>{storedata.name}</Text>
    <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.txt}>Basic info:</Text>
        <View style={styles.box}>
          <Text style={styles.txt}>Name:  {storedata.name}</Text>
          <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
          <Text style={styles.txt}>Email:{storedata.email}</Text>
          <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
          <Text style={styles.txt}>Number:{storedata.contactno}</Text>
          <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
          <Text style={styles.txt}>CNIC:  3740551490527</Text>
          <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
          <Text style={styles.txt}>Age:   23</Text>
         

        </View>
        
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
     flex:1,
    justifyContent: 'center',
    backgroundColor:`#f0f8ff`

  },
  txt: {

    fontWeight: 'bold',
    fontSize: 24,
    marginTop:5
  },
  text: {

    fontWeight: 'bold',
    fontSize: 24,
    marginTop:5,
    textAlign:'center'
  },
 box:
 {
   borderColor:'black',
   borderRadius:25,
   width:300,
   height:400,
   borderWidth:3,
   
   backgroundColor:`#fff5ee`
 }
})
export default Studentprofile;