import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View,Alert,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Studentlogout = ({ navigation }) => {
    Alert.alert(
        "Logout",
       "Are you sure? You want to logout?",
        [
         {
           text: "Cancel",
          onPress: () => {
            navigation.navigate('Studenth');
        },
         },
          {
           text: "Confirm",
          onPress: () => {
             navigation.navigate('Login');
           },
         },
       ],
       { cancelable: false }
    );
  return (
   
      <View>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
          <Text style={styles.signup}>LOG OUT</Text>
        </Pressable>
      </View>
  );
}
const styles = StyleSheet.create({
 
})
export default Studentlogout;