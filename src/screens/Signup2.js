import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import CheckBox from 'react-native-check-box';

const Signup2 = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titlename}>HOUSE OF TUTOR</Text>
      <Text style={styles.signup}>Sign Up!</Text>
      <Text style={styles.gender}>GENDER</Text>
      <View style={styles.txtcontainer}>
        <Text style={styles.forgot}>MALE
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
        </Text>
        <Text style={styles.forgot}>FEMALE
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
        </Text>
      </View>
      <Text style={styles.txt}>User id</Text>
      <TextInput style={styles.txtname} placeholder={'ENTER CNIC'} />
      <View style={styles.txt1}>
        <Text >After signing in you will get a verification code on your mobile number</Text>
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.button1}
          onPress={() => navigation.navigate('Signup1')}>
          <View style={styles.button} >
            <Text >BACK</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}
          onPress={() => navigation.navigate('Signup3')}>
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
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 5

  },
  gender: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,

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

  btncontainer: {
    paddingTop: 1000,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  txtcontainer: {

    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  button: {
    backgroundColor: 'gray',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: 'black',
    width: '40%',
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 'bold',
    fontSize: 18
  },
  button1: {
    backgroundColor: 'gray',
    borderWidth: 3,
    borderColor: 'black',
    width: '40%',
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 'bold',
    fontSize: 18
  },
  forgot: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 80,
    paddingLeft: 40
  },
  checkbox: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btncontainer: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txt: {
    fontSize: 30,
    paddingTop: 18,
    paddingLeft: 20
  },
  txtname: {
    height: 45,
    width: 350,
    borderBottomWidth: 2,
    fontSize: 20,
    marginTop: 30,
    marginLeft: 20
  },
  txt1: {
    paddingTop: 100
  }

});
export default Signup2;