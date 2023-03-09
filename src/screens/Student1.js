import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Student1 = ({ navigation }) => {
    return (
        <View styles={StyleSheet.container}>

                <Text style={styles.txt}>Saeed</Text>
                <TouchableOpacity style={styles.button1}
          onPress={() => navigation.navigate('Studenth')}>
          <View style={styles.button} >
          <Text style={styles.txt}>abdullah</Text>
          </View>
        </TouchableOpacity>
            

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flex: 1,
        justifyContent: 'center',
    },
    txt: {

        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 24,
        paddingLeft: 10

    }
}
)

export default Student1;