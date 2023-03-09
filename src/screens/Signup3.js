import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Admin from './Admin';
const Signup3 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titlename}>HOUSE OF TUTOR</Text>
            <Text style={styles.signup}>Sign Up!</Text>
            <Text style={styles.code}>ENTER  CONFIRMATION CODE</Text>
            <TextInput style={styles.txtname} placeholder={''} />

            <View style={styles.btncontainer}>
                <TouchableOpacity style={styles.button1}
                    onPress={() => navigation.navigate('Signup2')}>
                    <View style={styles.button} >
                        <Text >BACK</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}
                    onPress={() => navigation.navigate('Admin')}>
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

    txtname: {
        height: 45,
        width: 350,
        borderBottomWidth: 2,
        fontSize: 20,
        borderRadius: 70,
        marginTop: 30,
        marginLeft: 20
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
    code: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30,
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


    btncontainer: {
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


});
export default Signup3;