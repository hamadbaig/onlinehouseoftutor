import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


const Studenth = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <Text style={styles.txt}>
        {/* <Icon name='home' size={70} color="black" /> */}
        </Text>
      <Text style={styles.txt1}>News and Events:</Text>
      <View style={styles.btncontainer}>
        <View style={styles.button}>
          <TouchableOpacity style={styles.appButtonContainer}
            onPress={() => navigation.navigate('Noticeboard')}>
            <Text style={styles.appButtonText}>Notice board</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.appButtonContainer1}
            onPress={() => navigation.navigate('Student')}>
            <Text style={styles.appButtonText1}>Daily Task</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View
        style={{
          paddingTop: 80,
          borderBottomColor: 'black',
          borderBottomWidth: 4,
        }}
      />
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.timetable}
            onPress={() => navigation.navigate('Timetable')}>
            <Text style={styles.txt}>Timetable</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.lesson}
            onPress={() => navigation.navigate('Lesson plan')}>
            <Text style={styles.txt}>Lesson plans</Text>
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
    flex: 1,
    justifyContent: 'center',
    backgroundColor: `#00ffff`,

  },
  txt: {

    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 24,
    color: "black",

  },
  txt1: {
    fontSize: 24,
    color: "black",
    fontWeight: 'bold',

  },
  appButtonContainer: {
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `#d8bfd8`,
    borderRadius: 10,
    height: 100,
    width: 150,
    paddingLeft: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonContainer1: {
    paddingTopt: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    backgroundColor: `#d8bfd8`,
    borderRadius: 10,
    height: 100,
    width: 150,
  },
  timetable: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    backgroundColor: `#d8bfd8`,
    borderRadius: 10,
    height: 50,
    width: 150,
  },
  lesson: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    backgroundColor: `#e9967a`,
    borderRadius: 10,
    height: 50,
    width: 150,
  },
  appButtonText1: {
    fontSize: 18,
    color: "black",
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
export default Studenth;