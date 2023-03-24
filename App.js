import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import CategoriesScreen from './screens/CategoriesScreen';

import ShowAllInquiriesScreen from "./screens/inquiry-screens/ShowAllInquiriesScreen";
import ShowSingleInquiryScreen from "./screens/inquiry-screens/ShowSingleInquiryScreen";
import AddInquiryScreen from "./screens/inquiry-screens/AddInquiryScreen";
import UpdateInquiryScreen from "./screens/inquiry-screens/UpdateInquiryScreen";
import ViewInquiryPoliciesScreen from "./screens/inquiry-screens/ViewInquiryPoliciesScreen";
import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";
import { Profile } from "./screens/Profile";
import { Users } from "./screens/Users";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Users" component={Users} />
          <Stack.Screen
            name="PlatMe Inquiries"
            component={ShowAllInquiriesScreen}
          />
          <Stack.Screen
            name="Show Inquiry"
            component={ShowSingleInquiryScreen}
          />
          <Stack.Screen name="Create Inquiry" component={AddInquiryScreen} />
          <Stack.Screen name="Update Inquiry" component={UpdateInquiryScreen} />
          <Stack.Screen
            name="Inquiry Policies"
            component={ViewInquiryPoliciesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
