import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, alert, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Student from './Student';
import Studenth from './Studenth';
import Tutor1 from './Tutor1';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')



  const handleLogin = () => {
    if (((email == '') || (email == null)) && ((Password == '') || ((Password == null)))) {
      Alert.alert('Warning Please Enter Email and Password');
      return
    } else {
      const data = { email: email, password: Password };

      fetch(`http://192.168.43.201/hotapi/api/Main/userLogin?email=${encodeURIComponent(data.email)}&password=${encodeURIComponent(data.password)}`, {
        method: 'Post',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          global.storedata = responseJson;
          if (responseJson.role == "teacher") {
            navigation.navigate('Teacherhome');
          }
          else if (responseJson.role == "student") {
            navigation.navigate('Studenth');
          }
          else if (responseJson.role == "admin") {
            navigation.navigate('Admin');
          }
          else {

            Alert.alert('invalid usertype')
          }

        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titlename}>WELCOME</Text>
      <Text style={styles.titlena}>HOUSE OF TUTOR</Text>

      <TextInput style={styles.txtname}
        value={email}
        placeholder={' Enter Email'}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput style={styles.txtpassword}
        value={Password}
        placeholder={'Enter Password'}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
      />
      <Text style={styles.forgot}>Forget Password ?</Text>
      <View>
        <Pressable
          onPress={() => navigation.navigate('signup')}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
          <Text style={styles.signup}>Sign Up</Text>
        </Pressable>
      </View>

      <View >
        <Pressable
          onPress={() => { handleLogin() }}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
          <Text style={styles.logintxt}>LOGIN</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  titlename: {
    color: 'black',
    textAlign: 'center',
    fontSize: 38,
    fontWeight: 'bold'
  },
  titlena: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  txtname: {
    height: 45,
    width: 350,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 70,
    marginTop: 150,
    marginLeft: 20
  },
  txtpassword: {
    height: 45,
    width: 350,
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 70,
    marginTop: 10,
    marginLeft: 20
  },
  forgot: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 80,
    textAlign: 'center'
  },
  signup: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
  },


  logintxt: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  }
});
export default Login;