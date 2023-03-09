import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const Signup1 = ({ navigation }) => {
  const[name,setname]=useState();
  const[Email,setEmail]=useState();
  const[Password,setPassword]=useState();
  const[CONTACT,setCONTACT]= useState();
  const  std = async(name,Email,Password,CONTACT)=>{
    fetch('http://192.168.43.201/hotapi/api/Main/InsertUser',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:json.stringify({
        snmae:name,
        email:Email,
        pasword:Password,
        contact:CONTACT,
      }),
      
    })
    .then(r=>r.json())
    .then(r=>{
      console.log(r);
     alert(r);
      }
    );

  }
  return (
    <View style={styles.container}>
      <Text style={styles.titlename}>HOUSE OF TUTOR</Text>
      <Text style={styles.signup}>Sign Up!</Text>
      <TextInput style={styles.txtname} 
      value={name}
      placeholder={'Enter your name'}
      onChangeText={(text)=>setname(text)}/>
      <TextInput style={styles.txtname} 
      value={Email}
      placeholder={'Enter Email'}
      onChangeText={(text)=>setEmail(text)}/>
      <TextInput style={styles.txtname}
      value={Password}
      placeholder={'Enter password'}
      onChangeText={(text)=>setPassword(text)}/>
      <TextInput style={styles.txtname} 
      value={CONTACT}
      placeholder={'Enter Contact no'}
      onChangeText={(text)=>setCONTACT(text)} />
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('signup')}>
          <View style={styles.button} >
            <Text >BACK</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() =>   navigation.navigate('Signup2')}>
          <View style={styles.button}>
            <Text>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

  },

  titlename: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },


  signup: {
    color: 'black',
    fontSize: 39,
    fontWeight: 'bold',
    marginTop: 20,
  },
  txtname: {
    height: 45,
    width: 350,
    borderBottomWidth: 2,
    fontSize: 20,
    borderRadius: 70,
    marginTop: 30,
    marginLeft: 20
  },
  btncontainer: {
    paddingTop: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  button: {
    backgroundColor: 'gray',
    width: '40%',
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 'bold',
    fontSize: 18
  }

});
export default Signup1;