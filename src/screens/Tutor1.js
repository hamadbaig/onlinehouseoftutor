import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Tutor1 = ({ navigation }) => {
    return (
        <View styles={StyleSheet.container}>

                <Text style={styles.txt}>MR muneer</Text>
           
            <Text style={styles.txt}>MR raffy</Text>

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

export default Tutor1;