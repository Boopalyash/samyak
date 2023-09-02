import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import BottomNavigation from './BottomNavigation';
import SettingNavigation from './SettingNavigation';
import BookingIdScreen from '../screens/BookingIdScreen';
import AddAddressSettingScreen from '../screens/AddAddressSettingScreen';
import ManageBranchSettingScreen from '../screens/ManageBranchSettingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchTestLabScreen from '../screens/SearchTestLabScreen';
import AddManageMembersSettingScreen from '../screens/AddManageMembersSettingScree';
import EmergencyAlertScreen from '../screens/EmergencyAlertScreen';

const stack = createStackNavigator();

const ApplicationNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="SignUp" component={SignUpScreen} />
        <stack.Screen name="Bottom" component={BottomNavigation} />
        <stack.Screen name="BookingId" component={BookingIdScreen} />
        <stack.Screen name="SearchTest" component={SearchTestLabScreen} />
        <stack.Screen name="Profile" component={ProfileScreen} />
        <stack.Screen
          name="ManageBranch"
          component={ManageBranchSettingScreen}
        />
        <stack.Screen name="AddAddress" component={AddAddressSettingScreen} />
        <stack.Screen name="SosAlert" component={EmergencyAlertScreen} />
        <stack.Screen
          name="AddMember"
          component={AddManageMembersSettingScreen}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default ApplicationNavigation;
