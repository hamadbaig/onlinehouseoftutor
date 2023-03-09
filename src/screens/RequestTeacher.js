import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


const RequestTeacher = ({ navigation,route }) => {

const email=route?.params?.email;
const Slot=route?.params?.Slot;
const Subject=route?.params?.Subject;
const Sendrequest = async()=>{
  try{
  const user = {
      Semail:storedata.email,
      Temail:email,
      Slot:Slot,
      C_code:Subject,
      status:false,
      
     
    }
  const response = await fetch("http://192.168.43.201/hotapi/api/Main/matched",{
      method:'Post',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
  })
  const resJson = await response.json();
  alert(JSON.stringify(resJson))
  }catch(error){
      alert(error)
  }
}

  return (
    <View style={styles.container}>
      {/* <View style={styles.fs}>
      <Text style={styles.txt}>
        <Icon name='add-user' size={70} color="black" /></Text>
        </View> */}
      <View style={styles.ss}>
        <Text style={styles.txt}>Bsic info:</Text>


        <Text style={styles.txt}>Email:      {(email)}</Text>
        <Text style={styles.txt}>Slot:       {(Slot)}</Text>
        <Text style={styles.txt}>Subject:    {(Subject)}</Text>
        <Text style={styles.txt}>rating:     3</Text>


        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.btncontainer}>
          <View style={styles.button}>
            <TouchableOpacity style={styles.appButtonContainer}
              onPress={() => navigation.navigate('TeacherMatching')}>
              <Text style={styles.appButtonText}>BACK</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.appButtonContainer1}
                onPress={() => {
                  Sendrequest();}}>
              <Text style={styles.appButtonText1}>REQUEST</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </View>

  );
}
const styles = StyleSheet.create({
  txt: {

    fontWeight: 'bold',
    fontSize: 24,
  },
 

  container: {
    marginTop: 16,
    flex: 1,
    justifyContent: 'center',
  },

  text: {

    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 5,
    textAlign: 'center'
  },
  box:
  {
    borderColor: 'black',
    borderRadius: 25,
    width: 300,
    height: 400,
    borderWidth: 3,
    backgroundColor: 'gray'
  },
  appButtonContainer: {
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 10,
    height: 50,
    width: 100,
    paddingLeft: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonContainer1: {
    paddingTopt: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    backgroundColor: "black",
    borderRadius: 10,
    height: 50,
    width: 100,
  },
  appButtonText1: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  btncontainer: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {

    height: 40, borderRadius: 10
  }
})
export default RequestTeacher;