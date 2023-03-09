import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Box } from 'react-native';
import { asyncStorage } from 'react-native-async-storage';

const StudentUnexceptedList = ({ navigation }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(`http://192.168.43.201/hotapi/api/Main/StudentPendingRequest?Semail=`+storedata.email);
    const data = await resp.json();
    setData(data);
    console.log(data)
  };



  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View styles={StyleSheet.container}>


      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.tname}</Text>
          </View>
        }
        keyExtractor={item => item.email}
      />


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flex: 1,
    justifyContent: 'center',
  },
  appButtonContainer: {


    backgroundColor: "gray",
    height: 40,
    width: 400,
    paddingLeft: 10,
  },
  txt: {

    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 24,
    paddingLeft: 10

  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 26,
    fontWeight: 'bold',
    backgroundColor: "gray",
    paddingTop:10,

  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  title: {
    fontSize: 32,
  },
  Admintxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 10,
    alignSelf: 'center',
  },
}
)

export default StudentUnexceptedList;