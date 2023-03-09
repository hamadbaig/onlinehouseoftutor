import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
const admin = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <Text style={styles.txt}>
    {/* <Icon name='home' size={70} color="black" /> */}
    HOME</Text>
      <Text style={styles.txt1}>Manage:</Text>
      <View style={styles.btncontainer}>
        <View style={styles.button}>
          <TouchableOpacity style={styles.appButtonContainer}
            onPress={() => navigation.navigate('Tutor')}>
            <Text style={styles.appButtonText}>tutor</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.appButtonContainer1}
            onPress={() => navigation.navigate('Student')}>
            <Text style={styles.appButtonText1}>student</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
     flex:1,
    justifyContent: 'center',
  },
  txt: {

    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 24,
  },
  txt1: {
    fontSize: 24,
  },
  appButtonContainer: {
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
    height: 100,
    width: 150,
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
    backgroundColor: "#009688",
    borderRadius: 10,
    height: 100,
    width: 150,
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
export default admin;