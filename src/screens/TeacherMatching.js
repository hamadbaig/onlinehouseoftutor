import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Pressable, onPress } from 'react-native';

const TeacherMatching = ({ navigation }) => {
  const [Allcourses, setAllcourses] = useState([]);
  let [data, setData] = useState([]);
  const [apidata, setapidata] = useState([]);
  const fetchcourse = async () => {
    const resp = await fetch(`http://192.168.43.201/hotapi/api/Main/Allcourses`);
    const subj = await resp.json();
    setAllcourses(subj);
    //console.log(subj,"abc")

  }

  // useEffect(() => {
  //   fetchcourse();
  // }, []);
  // const list = ["dbs-400", "dsa-402", "idm-326", "isl-03", "mgt-291", "oop-302", "pdc-502", "pf-101"];
  const slotlist = ["monday 1st slot", "tuesday 2nd slot", "wednesday 3rd slot","saturday 5th slot","saturday 6th slot","sunday 2nd slot"];
  const fetchData = async () => {
    console.log(slotlist.length, 'a', Allcourses.length);

    for (var i = 0; i < Allcourses.length; i++) {

      for (var j = 0; j < slotlist.length; j++) {
        // if(Allcourses[i]?.C_code ){        
        const send = { Slot: slotlist[j], Subject: Allcourses[i].C_code };
        //console.log(JSON.stringify(send),'kjjj')
        fetch(`http://192.168.43.201/hotapi/api/Main/search?Slot=${encodeURIComponent(send.Slot)}&Subject=${encodeURIComponent(send.Subject)}`, {
          method: 'Get',
        })
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson) {
              let zain = responseJson[0];
             // console.log("zain", responseJson.length)
              if (!zain) {


              }
              else {

                data = zain

                apidata.push(zain)
              }
            }


          })
          .catch((error) => {
            console.error(error);
          });
        //}
      }

    }

    console.log(apidata, apidata.length);

  };




  return (
    <View styles={StyleSheet.container}>
      <View>
        <Pressable
          onPress={() => {
            fetchData();
            fetchcourse();
          }}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
          <Text style={styles.logintxt}>Get Matching Teachers</Text>
        </Pressable>
      </View>
      <FlatList
        data={apidata}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>

          <View style={styles.flatview}>
            <Text style={styles.name}>{item.email}</Text>

            <Text style={styles.name}>{item.Slot}</Text>
            <Text style={styles.name}>{item.Subject}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RequestTeacher', {
                email: item.email,
                Slot: item.Slot,
                Subject: item.Subject,
              })}>
              <Text style={styles.request}>Request</Text>
            </TouchableOpacity>


            <View
              style={{
                borderBottomColor: '#00ffff',
                borderBottomWidth: 3,
              }}
            />
          </View>
        }
      // keyExtractor={item => item.Slot}
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
    backgroundColor: "#faebd7",
    paddingTop: 10
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
  flatview: {
    backgroundColor: '#faebd7'
  },
  request: {
    textAlign: 'right',
    fontSize: 22
  },
  logintxt: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
    paddingLeft: 10,
    backgroundColor: 'aqua',
    width: 250

  }
}
)

export default TeacherMatching;