import React, { useState } from "react";
import {StyleSheet,Text,ScrollView,FlatList,Alert,TextInput,
  TouchableOpacity, View, } from "react-native";
 
const DoctorScreen = ({navigation}) => {


  const [data, setdata] = React.useState([]);
  const [Patientname, setPatientname] = React.useState();
  
  const [selectedId, setSelectedId] = useState(null);
  const [Name,setName]=useState('');
  const Patientlist= async () => {
    try {
   
    // const response = await fetch(global.apiRoot+'Accounts/patientLogin?Email='+UserName+'& Passwords='+Password);
    console.log(global.apiRoot);
fetch(
        global.apiRoot+'Accounts/displayPatients',   
  {
      method: "GET",
      headers: {
    
      }
    }
  )
    .then(res => res.json())
    .then(async data => {
      console.log('data',data);
      setdata(data)
      console.log(data.status)
      if (data.status == 200)
       {
        await AsyncStorage.setItem("name",data.Username)
        
        await AsyncStorage.getItem("name")
         setPatientname(name)
        Alert.alert('Succesful');
      }
      else if (data != 'OK')
      {
        //Alert.alert('not found! Check Your Email ');
        }
   });

   } catch (error) {
     console.error(error);
   } 
 };
 
 const getPatientName=(Username)=>
 {
   AsyncStorage.setItem("name",Username)
  
navigation.navigate("Prescription")

 }

 
const renderItem = ({ item }) => {
  console.log(item);
  return (
    <View>
    <View style={styles.Patientlist}>
    
    <TouchableOpacity  onPress={()=> getPatientName(item.Username)}>
     <Text style={styles.Admintxt} >{item.Username}</Text> 
     </TouchableOpacity>
     </View>
    <TouchableOpacity  >
      <View style={{}}  >
      <Text style={styles.Infotxt} >{item.CNIC}</Text>
    
       <Text style={styles.Infotxt} >{item.Username}</Text>
    </View>
    </TouchableOpacity>
    </View>
  );
};


  return (
    
      
  <View style= {{flex:1}} >
        
       
        <View style={styles.header2 } >
        <Text style={styles.Admintxt}>Patients lists</Text>
        </View>
        <View style={styles.Patients } >
            <TouchableOpacity onPress={() => Patientlist()}  >
        <Text  style={styles.Admintxt}>Show all available Patients</Text></TouchableOpacity>
        </View>
        <View style={styles.myBox}>
            <TextInput style={styles.inputStyle}
            placeholder='Enter patient id'
            placeholderTextColor={'#003f5c'}
            autoCapitalize='none'
            onChangeText={(name)=>setName(name)}
            />
           </View>

        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
       </View>
      
  );
};


const styles = StyleSheet.create({

  
   Admintxt:{
        color:'white',
        fontWeight:'bold',
        fontSize:26,
        marginTop:10,
        alignSelf:'center',
    },
    header2:{
      marginTop:10,
      marginLeft:70,
      backgroundColor:'#339FFF',
      width:'50%',
      height:50,
     borderRadius:180,
      
    },
    Patients:{
      marginTop:20,
      //marginLeft:30,
      backgroundColor:'#339FFF',
      width:'100%',
      height:70,
     
      
    },
    Patientlist:{
      marginTop:20,
      marginLeft:30,
      backgroundColor:'#339FFF',
      width:'40%',
      height:70,
      borderRadius:10
      
    },
    Infotxt1:{
      color:'black',
      fontWeight:'bold',
      fontSize:16,
      marginTop:-20,
      marginLeft:180,
      alignSelf:'center',
  },
    Infotxt:{
      color:'black',
      fontWeight:'bold',
      fontSize:16,
      marginTop:-40,
      marginLeft:180,
      alignSelf:'center',
  }, 
  myBox:
  {
       height:50,
      marginTop:10,
      marginLeft:65,
      marginRight:35,
      
      position:"relative",
      width:"63%",  

    },
  
  inputStyle:
  {
      color:'grey',
      paddingLeft:15,
      borderWidth:4,
      borderRadius:18,
      borderColor:'black',
      backgroundColor:"grey",
      fontSize:22,
    },

  
});

export default DoctorScreen;