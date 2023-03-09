import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Pressable } from 'react-native';
import { asyncStorage } from 'react-native-async-storage';

const Pendingrequest = ({ navigation }) => {
    const [data, setData] = useState([]);
   
    const Acceptrequest = async (data) => {
        try {
            const user = {
                
                Semail: data.Semail,
                Temail: storedata.email,
                C_code: data.C_code,
                Slot: data.Slot,
            


            }
            const response = await fetch("http://192.168.43.201/hotapi/api/Main/AcceptStudents", {
                method: 'Post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    
                },

                body: JSON.stringify(user),
            })
            console.log(user,"hammad");

            const resJson = await response.json();
            alert(JSON.stringify(resJson))
            console.log(response.status)
        } catch (error) {
            alert(error)
        }
    }
    const fetchData = async () => {
        const dataf = { email: storedata.email };

        fetch(`http://192.168.43.201/hotapi/api/Main/PendingRequest?email=${encodeURIComponent(dataf.email)}`, {
            method: 'Get',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                const dataR = responseJson;
                global.dataR = responseJson;

                setData(dataR);
                console.log(data.Semail)
            })
            .catch((error) => {
                console.error(error);
            });

    };



    useEffect(() => {
        fetchData();
    }, []);
 
    return (
        <View styles={StyleSheet.container}>
            {/* <View>
        <Pressable
          onPress={() => {
             Pendingrequest();
          }}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
          <Text style={styles.logintxt}>Get Requests</Text>
        </Pressable>
      </View> */}

            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                
                    <View style={styles.flatview}>
                        <Text style={styles.name}>{item.Semail}</Text>
                        <Text style={styles.name}>{item.C_code}</Text>
                        <Text style={styles.name}>{item.Slot}</Text>

                        
                        <TouchableOpacity
                            onPress={() => {
                                Acceptrequest(item)
                            }}>
                            <Text style={styles.request}>AcceptRequest</Text>
                        </TouchableOpacity>
                        <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 5,
              }}
            />


                    </View>
                }
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
        paddingTop: 10,

    },
    names: {
        fontFamily: 'Verdana',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        paddingTop: 10,

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
    request: {
        textAlign: 'right',
        fontSize: 22,
        fontFamily: 'Verdana',
    
        fontWeight: 'bold',
        backgroundColor: "yelloe",
    
      },
}
)

export default Pendingrequest;