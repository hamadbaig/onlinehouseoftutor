import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Alert, Select } from 'react-native';
import CheckBox from 'react-native-check-box';
import SelectDropdown from 'react-native-select-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';




const Studentschedule = ({ navigation }) => {
  const [m1, setm1] = useState(false);
  const [m2, setm2] = useState(false);
  const [m3, setm3] = useState(false);
  const [m4, setm4] = useState(false);
  const [m5, setm5] = useState(false);
  const [m6, setm6] = useState(false);
  const [m7, setm7] = useState(false);
  const [t1, sett1] = useState(false);
  const [t3, sett3] = useState(false);
  const [t4, sett4] = useState(false);
  const [t5, sett5] = useState(false);
  const [t6, sett6] = useState(false);
  const [t7, sett7] = useState(false);
  const [t2, sett2] = useState(false);
  const [w1, setw1] = useState(false);
  const [w2, setw2] = useState(false);
  const [w3, setw3] = useState(false);
  const [w4, setw4] = useState(false);
  const [w5, setw5] = useState(false);
  const [w6, setw6] = useState(false);
  const [w7, setw7] = useState(false);
  const [th1, setth1] = useState(false);
  const [th2, setth2] = useState(false);
  const [th3, setth3] = useState(false);
  const [th4, setth4] = useState(false);
  const [th5, setth5] = useState(false);
  const [th6, setth6] = useState(false);
  const [th7, setth7] = useState(false);
  const [fr1, setfr1] = useState(false);
  const [fr2, setfr2] = useState(false);
  const [fr3, setfr3] = useState(false);
  const [fr4, setfr4] = useState(false);
  const [fr5, setfr5] = useState(false);
  const [fr6, setfr6] = useState(false);
  const [fr7, setfr7] = useState(false);
  const [sa1, setsa1] = useState(false);
  const [sa2, setsa2] = useState(false);
  const [sa3, setsa3] = useState(false);
  const [sa4, setsa4] = useState(false);
  const [sa5, setsa5] = useState(false);
  const [sa6, setsa6] = useState(false);
  const [sa7, setsa7] = useState(false);
  const [su1, setsu1] = useState(false);
  const [su2, setsu2] = useState(false);
  const [su3, setsu3] = useState(false);
  const [su4, setsu4] = useState(false);
  const [su5, setsu5] = useState(false);
  const [su6, setsu6] = useState(false);
  const [su7, setsu7] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState();


  const [monday, setmonday] = useState(false);
  const [tuesday, settuesday] = useState(false);
  const [wednesday, setwednesday] = useState(false);
  const [thursday, setthursday] = useState(false);
  const [friday, setfriday] = useState(false);
  const [saturday, setsaturday] = useState(false);
  const [sunday, setsunday] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(`http://192.168.43.201/hotapi/api/Main/Allcourses`);
    const data = await resp.json();
    setData(data);
    console.log(data);

  }

  useEffect(() => {
    fetchData();
  }, []);

  // var i = -1;
  // var WholeNews = arrlist.map(function(news){
  //   i++;
  //   return(
  //     <View key={i}>
  //       <Text>{news.C_code}</Text>

  //     </View>);
  // });



  const clickMon = () => {
    if (m1 === true) {
      setmonday("monday 1st slot")
    }
    if (m2 === true) {
      setmonday("monday 2nt slot")
    }
    if (m3 === true) {
      setmonday("monday 3rd slot")
    }
    if (m4 === true) {
      setmonday("monday 4th slot")
    }
    if (m5 === true) {
      setmonday("monday 5th slot")
    }
    if (m6 === true) {
      setmonday("monday 6th slot")
    }
    if (m7 === true) {
      setmonday("monday 7th slot")
    }
    if (monday != null&selectedCourse!=null) {

      global.mondayy = monday;
      const data = { email: storedata.email, subject: selectedCourse, slot: monday, role: storedata.role };

      fetch(`http://192.168.43.201/hotapi/api/Main/addschedule?email=${encodeURIComponent(data.email)}&subject=${encodeURIComponent(data.subject)}&slot=${encodeURIComponent(data.slot)}&role=${encodeURIComponent(data.role)}`, {
        method: 'Post',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);

        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  const clicktues = () => {
    if (t1 === true) {
      settuesday("tuesday 1st slot")
    }
    if (t2 === true) {
      settuesday("tuesday 2nd slot")
    }
    if (t3 === true) {
      settuesday("tuesday 3rd slot")
    }
    if (t4 === true) {
      settuesday("tuesday 4th slot")
    }
    if (t5 === true) {
      settuesday("tuesday 5th slot")
    }
    if (t6 === true) {
      settuesday("tuesday 6th slot")
    }
    if (t7 === true) {
      settuesday("tuesday 7th slot")
    }
    if (tuesday != null&selectedCourse!=null) {

      global.tuesdayy = tuesday;

      const data = { email: storedata.email, subject: selectedCourse, slot: tuesday, role: storedata.role };

      fetch(`http://192.168.43.201/hotapi/api/Main/addschedule?email=${encodeURIComponent(data.email)}&subject=${encodeURIComponent(data.subject)}&slot=${encodeURIComponent(data.slot)}&role=${encodeURIComponent(data.role)}`, {
        method: 'Post',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);

        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  const clickwed = () => {
    if (w1 === true) {
      setwednesday("wednesday 1st slot")
    }
    if (w2 === true) {
      setwednesday("wednesday 2nd slot")
    }
    if (w3 === true) {
      setwednesday("wednesday 3rd slot")
    }
    if (w4 === true) {
      setwednesday("wednesday 4th slot")
    }
    if (w5 === true) {
      setwednesday("wednesday 5th slot")
    }
    if (w6 === true) {
      setwednesday("wednesday 6th slot")
    }
    if (w7 === true) {
      setwednesday("wednesday 7th slot")
    } if (wednesday != null&selectedCourse!=null) {

      global.wednesdayy = wednesday;
      const data = { email: storedata.email, subject: selectedCourse, slot: wednesday, role: storedata.role };

      fetch(`http://192.168.43.201/hotapi/api/Main/addschedule?email=${encodeURIComponent(data.email)}&subject=${encodeURIComponent(data.subject)}&slot=${encodeURIComponent(data.slot)}&role=${encodeURIComponent(data.role)}`, {
        method: 'Post',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);

        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  const clickthurs = () => {
    if (th1 === true) {
      setthursday("thursday 1st slot")
    }
    if (th2 === true) {
      setthursday("thursday 2nd slot")
    }
    if (th3 === true) {
      setthursday("thursday 3rd slot")
    }
    if (th4 === true) {
      setthursday("thursday 4th slot")
    }
    if (th5 === true) {
      setthursday("thursday 5th slot")
    }
    if (th6 === true) {
      setthursday("thursday 6th slot")
    }

    if (th7 === true) {
      setthursday("thursday 7th slot")
    }
    if (thursday != null&selectedCourse!=null) {

      global.thursdayy = thursday;
      const data = { email: storedata.email, subject: selectedCourse, slot: thursday, role: storedata.role };

      fetch(`http://192.168.43.201/hotapi/api/Main/addschedule?email=${encodeURIComponent(data.email)}&subject=${encodeURIComponent(data.subject)}&slot=${encodeURIComponent(data.slot)}&role=${encodeURIComponent(data.role)}`, {
        method: 'Post',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);

        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  const clickfri = () => {
    if (fr1 === true) {
      setfriday("friday 1st slot")
    }
    if (fr2 === true) {
      setfriday("friday 2nd slot")
    }
    if (fr3 === true) {
      setfriday("friday 3rd slot")
    }
    if (fr4 === true) {
      setfriday("friday 4th slot")
    }
    if (fr5 === true) {
      setfriday("friday 5th slot")
    }
    if (fr6 === true) {
      setfriday("friday 6th slot")
    }
    if (fr7 === true) {
      setfriday("friday 7th slot")
    }
    if (friday != null&selectedCourse!=null) {
      global.fridayy = friday;
      const data = { email: storedata.email, subject: selectedCourse, slot: friday, role: storedata.role };

      fetch(`http://192.168.43.201/hotapi/api/Main/addschedule?email=${encodeURIComponent(data.email)}&subject=${encodeURIComponent(data.subject)}&slot=${encodeURIComponent(data.slot)}&role=${encodeURIComponent(data.role)}`, {
        method: 'Post',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);

        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  const clicksat = () => {
    if (sa1 === true) {
      setsaturday("saturday 1st slot")
    }
    if (sa2 === true) {
      setsaturday("saturday 2nd slot")
    }
    if (sa3 === true) {
      setsaturday("saturday 3rd slot")
    }
    if (sa4 === true) {
      setsaturday("saturday 4th slot")
    }
    if (sa5 === true) {
      setsaturday("saturday 5th slot")
    }
    if (sa6 === true) {
      setsaturday("saturday 6th slot")
    }
    if (sa7 === true) {
      setsaturday("saturday 7th slot")
    }
    if (saturday != null&selectedCourse!=null) {

      global.saturdayy = saturday;
      const data = { email: storedata.email, subject: selectedCourse, slot: saturday, role: storedata.role };

      fetch(`http://192.168.43.201/hotapi/api/Main/addschedule?email=${encodeURIComponent(data.email)}&subject=${encodeURIComponent(data.subject)}&slot=${encodeURIComponent(data.slot)}&role=${encodeURIComponent(data.role)}`, {
        method: 'Post',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);

        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  const clicksun = () => {
    if (su1 === true) {
      setsunday("sunday 1st slot")
    }
    if (su2 === true) {
      setsunday("sunday 2nd slot")
    }
    if (su3 === true) {
      setsunday("sunday 3rd slot")
    }
    if (su4 === true) {
      setsunday("sunday 4th slot")
    }
    if (su5 === true) {
      setsunday("sunday 5th slot")
    }
    if (su6 === true) {
      setsunday("sunday 6th slot")
    }
    if (su7 === true) {
      setsunday("sunday 7th slot")
    }
    if (sunday != null&selectedCourse!=null) {

      global.sundayy = sunday;
      const data = { email: storedata.email, subject: selectedCourse, slot: sunday, role: storedata.role };

      fetch(`http://192.168.43.201/hotapi/api/Main/addschedule?email=${encodeURIComponent(data.email)}&subject=${encodeURIComponent(data.subject)}&slot=${encodeURIComponent(data.slot)}&role=${encodeURIComponent(data.role)}`, {
        method: 'Post',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);

        })
        .catch((error) => {
          console.error(error);
        });
    }
  }


  return (
    <View style={StyleSheet.container}>
      <Text style={styles.hot}>house of Tutor</Text>
      <Text style={styles.ss}>SET SCHEDULE</Text>
      <View style={styles.dropddown}>
        <Text style={styles.ssb}>SELECT SUBJECT:</Text>

        <SelectDropdown style={styles.dropdown }
        
          data = {data}
          onSelect={(selecteditems,index) => {
            console.log(selecteditems.C_code)
            setSelectedCourse(selecteditems.C_code)
            global.sub = selectedCourse;
          }}
          defaultButtonText={'Select course'}

          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem.C_code;
          }}
          renderCustomizedRowChild={(selecteditem, index) => {
            
            return (
              <View >
                <Text style={styles.dropdown }>{selecteditem.C_code}</Text>
              </View>
            );
        
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item.C_code;
          }}
        />
       
        {/* <DropDownPicker
          items={items}
          placeholder="Select your favorite country"
          defaultValue={selectedCourse}
          containerStyle={{ height: 40, marginBottom: 100 }}
          controller={instance => controller = instance}

          onChangeItem={(item) => {
            setSelectedCourse(item.value);
          }}
        /> */}


      </View>
      <Text style={styles.st}>SELECT TIME:</Text>
      <View style={styles.days}>
        <Text style={styles.day}>     TIME</Text>
        <Text style={styles.day}>MON</Text>
        <Text style={styles.day}>TUE</Text>
        <Text style={styles.day}>WED</Text>
        <Text style={styles.day}>THU</Text>
        <Text style={styles.day}>FRI</Text>
        <Text style={styles.day}>SAT</Text>
        <Text style={styles.day}>SUN</Text>
      </View>
      <View style={styles.days}>
        <Text style={styles.day}>8 - 8 : 30AM</Text>


        <CheckBox
          isChecked={m1}
          style={styles.checkbox}
          onClick={() => setm1(!m1)}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={t1}
          onClick={() => sett1(!t1)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'

        />
        <CheckBox
          isChecked={w1}
          onClick={() => setw1(!w1)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'

        />
        <CheckBox
          isChecked={th1}
          onClick={() => setth1(!th1)}
          checkedCheckBoxColor='red'
          style={styles.checkbox}
        />
        <CheckBox
          isChecked={fr1}
          onClick={() => setfr1(!fr1)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={sa1}
          onClick={() => setsa1(!sa1)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={su1}
          onClick={() => setsu1(!su1)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
      </View>
      <View style={styles.days}>
        <Text style={styles.day}>8:30 - 10AM</Text>

        <CheckBox
          isChecked={m2}
          onClick={() => setm2(!m2)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={t2}
          onClick={() => sett2(!t2)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={w2}
          onClick={() => setw2(!w2)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={th2}
          onClick={() => setth2(!th2)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={fr2}
          onClick={() => setfr2(!fr2)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={sa2}
          onClick={() => setsa2(!sa2)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={su2}
          onClick={() => setsu2(!su2)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
      </View>
      <View style={styles.days}>
        <Text style={styles.day}>10-11:30AM</Text>
        <CheckBox
          isChecked={m3}
          onClick={() => setm3(!m3)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={t3}
          onClick={() => sett3(!t3)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={w3}
          onClick={() => setw3(!w3)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={th3}
          onClick={() => setth3(!th3)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={fr3}
          onClick={() => setfr3(!fr3)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={sa3}
          onClick={() => setsa3(!sa3)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={su3}
          onClick={() => setsu3(!su3)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
      </View>
      <View style={styles.days}>
        <Text style={styles.day}>11:30 -1PM  </Text>
        <CheckBox
          isChecked={m4}
          onClick={() => setm4(!m4)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={t4}
          onClick={() => sett4(!t4)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={w4}
          onClick={() => setw4(!w4)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={th4}
          onClick={() => setth4(!th4)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={fr4}
          onClick={() => setfr4(!fr4)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={sa4}
          onClick={() => setsa4(!sa4)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={su4}
          onClick={() => setsu4(!su4)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
      </View>
      <View style={styles.days}>
        <Text style={styles.day}>1 :3 0 - 3 P M</Text>
        <CheckBox
          isChecked={m5}
          onClick={() => setm5(!m5)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={t5}
          onClick={() => sett5(!t5)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={w5}
          onClick={() => setw5(!w5)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={th5}
          onClick={() => setth5(!th5)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={fr5}
          onClick={() => setfr5(!fr5)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={sa5}
          onClick={() => setsa5(!sa5)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={su5}
          onClick={() => setsu5(!su5)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
      </View>
      <View style={styles.days}>
        <Text style={styles.day}>3 - 4 : 3 0 PM</Text>
        <CheckBox
          isChecked={m6}
          onClick={() => setm6(!m6)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={t6}
          onClick={() => sett6(!t6)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={w6}
          onClick={() => setw6(!w6)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={th6}
          onClick={() => setth6(!th6)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={fr6}
          onClick={() => setfr6(!fr6)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={sa6}
          onClick={() => setsa6(!sa6)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={su6}
          onClick={() => setsu6(!su6)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
      </View>
      <View style={styles.days}>
        <Text style={styles.day}>4 : 3 0 - 6 PM</Text>
        <CheckBox
          isChecked={m7}
          onClick={() => setm7(!m7)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={t7}
          onClick={() => sett7(!t7)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={w7}
          onClick={() => setw7(!w7)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={th7}
          onClick={() => setth7(!th7)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={fr7}
          onClick={() => setfr7(!fr7)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={sa7}
          onClick={() => setsa7(!sa7)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
        <CheckBox
          isChecked={su7}
          onClick={() => setsu7(!su7)}
          style={styles.checkbox}
          checkedCheckBoxColor='red'
        />
      </View>
      <Pressable
        onPress={() => {
          clickMon();
          clicktues();
          clickwed();
          clickthurs();
          clickfri();
          clicksat();
          clicksun();

        }}
        style={styles.finish}>
        <Text style={styles.signup}>FINISH</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: `#d8bfd8`,

  },
  hot: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20

  },
  ss: {
    color: 'black',
    textAlign: 'center',
    fontSize: 38,
    fontWeight: 'bold',
    paddingTop: 10

  },

  ssb: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 20

  },
  st: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10
  },
  day: {
    color: `black`,
    fontWeight: 'bold',
    fontSize: 15

  },
  days: {

    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  finish: {

    textAlign: 'center',
    backgroundColor: `#4682b4`,
    width: 100,
    height: 50,

  },
  signup: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkbox: {
    color: `#a9a9a9`,
  },
  dropdown:{
    alignItems: "center", 
    justifyContent: "center", 
    fontSize: 22, 
    fontWeight: 'bold',
    color: 'black'

  }
})
export default Studentschedule;