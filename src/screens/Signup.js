import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';

const Signup = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.titlename}>HOUSE OF TUTOR</Text>
      <Text style={styles.signup}>Sign Up!</Text>
      <Text style={styles.forgot}>Want to be a Teacher?
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </Text>
      <Text style={styles.forgot}>Want to be a Student?
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </Text>
      <Text style={styles.forgot}>Want to be a Parent?
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </Text>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <View style={styles.button} >
            <Text >BACK</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Signup1')}>
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
  checkbox: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  titlename: {
    color: 'black',
    textAlign: 'center',
    fontSize: 38,
    fontWeight: 'bold',
  },
  txtname: {
    height: 45,
    width: 350,
    backgroundColor: 'aqua',
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 70,
    marginTop: 150,
    marginLeft: 20
  },
  txtpassword: {
    height: 45,
    width: 350,
    backgroundColor: 'aqua',
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
    paddingLeft: 40
  },
  signup: {
    color: 'black',
    fontSize: 39,
    fontWeight: 'bold',
    marginTop: 20,
    paddingLeft: 40
  },
  loginbtn: {
    width: 350,
    height: 45,
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: 'aqua',
    borderRadius: 70,
  },
  logintxt: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center'
  },
  btncontainer: {
    paddingTop: 170,
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
  }
});
export default Signup;