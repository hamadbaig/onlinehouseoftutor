import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import signup from './src/screens/Signup';
import Signup1 from './src/screens/Signup1';
import Signup2 from './src/screens/Signup2';
import Signup3 from './src/screens/Signup3';
import Login from './src/screens/Login';
import Admin from './src/screens/Admin';
import feespays from './src/screens/feespays';
import noticeboard from './src/screens/noticeboard';
import Tutor from './src/screens/Tutors';
import Tutor1 from './src/screens/Tutor1';
import Student from './src/screens/Student';
import Student1 from './src/screens/Student1';
import Studenth from './src/screens/Studenth';
import Studentprofile from './src/screens/Studentprofile';
import Studentst from './src/screens/Studentst';
import Studentschedule from './src/screens/Studentschedule';
import Studentsetting from './src/screens/Studentsetting';
import Studentlot from './src/screens/Studentlot';
import Studentabout from './src/screens/Studentabout';
import Studentlogout from './src/screens/Studentlogout';
import Teacherhome from './src/screens/Teacherhome';
import Teacherprofile from './src/screens/Teacherprofile';
import Teacherschedule from './src/screens/Teacherschedule';
import TeacherMatching from './src/screens/TeacherMatching';
import RequestTeacher from './src/screens/RequestTeacher';
import Pendingrequest from  './src/screens/Pendingrequest';
import StudentUnexceptedList from './src/screens/StudentUnexceptedList';
import StudentTimetable from  './src/screens/StudentTimetable';
import StudentLesson from './src/screens/StudentLesson';
import Adminlogout from './src/screens/Adminlogout';
import Teacherlogout from './src/screens/Teacherlogout';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Homestack = createNativeStackNavigator();
function Homestackscreen() {
  return (
    <Homestack.Navigator>
      <Homestack.Screen name="Login" component={Login} options={{ title: 'USER NAME' }} />
      <Homestack.Screen name="signup" component={signup} options={{ headerShown: false }} />
      <Homestack.Screen name="Signup1" component={Signup1} options={{ headerShown: false }} />
      <Homestack.Screen name="Signup2" component={Signup2} options={{ headerShown: false }} />
      <Homestack.Screen name="Signup3" component={Signup3} options={{ headerShown: false }} />
      <Homestack.Screen name="Admin" component={MyDrawer} options={{ headerShown: false }} />
      <Homestack.Screen name="Tutor" component={Tutor} options={{
        headerStyle: {
          backgroundColor: 'darkgreen'
        }
      }} />
      <Homestack.Screen name="Tutor1" component={Tutor1} options={{
        title: 'USER NAME', headerStyle: {
          backgroundColor: 'darkgreen'
        }
      }} />
      <Homestack.Screen name="Student" component={Student} options={{
        headerStyle: {
          backgroundColor: 'red'
        }
      }} />
      <Homestack.Screen name="Student1" component={Student1} options={{
        headerStyle: {
          backgroundColor: 'red'
        }
      }} />
      <Homestack.Screen name="Studenth" component={StudentDrawer}options={{ headerShown: false }} />
      {/* <Homestack.Screen name="Studenth" component={StudentTab}options={{ headerShown: false }} /> */}

      <Homestack.Screen name="Teacherhome" component={TeacherDrawer} options={{ headerShown: false }} />
      <Homestack.Screen name="RequestTeacher" component={RequestTeacher}  />
      <Homestack.Screen name="Timetable" component={StudentTimetable}  />
      <Homestack.Screen name="Lesson plan" component={StudentLesson}  />






    </Homestack.Navigator>
  );
}
function StudentDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Studenth} />

      <Drawer.Screen name="Studentprofile" component={Studentprofile} />
      <Drawer.Screen name="Studentschedule" component={Studentschedule} />
      <Drawer.Screen name="TeachersMatching" component={TeacherMatching} />
      <Drawer.Screen name="StudentUnexceptedList" component={StudentUnexceptedList} />
      <Drawer.Screen
        name="logOut"
        component={Studentlogout}
        options={{ drawerLabel: "Log Out" }}
      />



    </Drawer.Navigator>
  );
}
function TeacherDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Teacherhome} />

      <Drawer.Screen name="Teacherprofile" component={Teacherprofile} />
      <Drawer.Screen name="Teacherschedule" component={Teacherschedule} />
      <Drawer.Screen name="Pendingrequest" component={Pendingrequest} />

      <Drawer.Screen
        name="logOut"
        component={Teacherlogout}
        options={{ drawerLabel: "Log Out" }}
      />



    </Drawer.Navigator>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Admin} />
      <Drawer.Screen name="feespays" component={feespays} />
      <Drawer.Screen name="Noticeboard" component={noticeboard} />
      <Drawer.Screen
        name="logOut"
        component={Adminlogout}
        options={{ drawerLabel: "Log Out" }}
      />

    </Drawer.Navigator>
  );
}
// function StudentTab() {
//   return (
//     <Tab.Navigator>
//     {/* <Tab.Screen name="Home" component={Studenth} /> */}
//     <Tab.Screen name="Schedule" component={StudentTimetable} />
//     <Tab.Screen name="Lesson" component={StudentLesson} />

//   </Tab.Navigator>
//   );
// }




const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="a1" component={Homestackscreen} options={{ headerShown: false }} />
        <Stack.Screen name="a2" component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="a3" component={StudentDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="a4" component={TeacherDrawer} options={{ headerShown: false }} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;