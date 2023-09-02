import React from 'react';
import {useRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import BookingScreen from '../screens/BookingScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BookingNavigation from './BookingNavigation';
import DashBoardScreen from '../screens/DashBoardScreen';
import TestTrendsScreen from '../screens/TestTrendsScreen';
import LabScreen from '../screens/LabScreen';
import SettingNavigation from './SettingNavigation';
import LabNavigation from './LabNavigation';

const Bottom = createBottomTabNavigator();

const BookingIcon = ({focused}: any) => {
  return (
    <Image
      source={
        focused
          ? require('../assets/images/bookings_1.png')
          : require('../assets/images/bookings_0.png')
      }
      style={{width: 24, height: 28, top: 5}}
    />
  );
};

const LabIcon = ({focused}: any) => {
  return (
    <Image
      source={
        focused
          ? require('../assets/images/lab_1.png')
          : require('../assets/images/lab_0.png')
      }
      style={{width: 24, height: 28, top: 5}}
    />
  );
};

const DashBoardIcon = ({focused}: any) => {
  return (
    <Image
      source={
        focused
          ? require('../assets/images/dashboard_1.png')
          : require('../assets/images/dashboard_0.png')
      }
      style={{width: 28, height: 24, top: 5}}
    />
  );
};

const TestIcon = ({focused}: any) => {
  return (
    <Image
      source={
        focused
          ? require('../assets/images/trends_1.png')
          : require('../assets/images/trends_0.png')
      }
      style={{width: 32, height: 24, top: 5}}
    />
  );
};

const SettingsIcon = ({focused}: any) => {
  return (
    <Image
      source={
        focused
          ? require('../assets/images/settings_1.png')
          : require('../assets/images/settings_0.png')
      }
      style={{width: 24, height: 24, top: 5}}
    />
  );
};

const BottomNavigation = () => {
  return (
    <Bottom.Navigator screenOptions={{headerShown: false}}>
      <Bottom.Screen
        name="Bookings"
        component={BookingNavigation}
        options={{
          tabBarIcon: ({focused}) => <BookingIcon focused={focused} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            top: 5,
            color: 'grey',
          },
        }}
      />
      <Bottom.Screen
        name="Lab"
        component={LabNavigation}
        options={{
          tabBarIcon: ({focused}) => <LabIcon focused={focused} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            top: 5,
            color: 'grey',
          },
        }}
      />
      <Bottom.Screen
        name="DashBoard"
        component={DashBoardScreen}
        options={{
          tabBarIcon: ({focused}) => <DashBoardIcon focused={focused} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            top: 5,
            color: 'grey',
          },
        }}
      />
      <Bottom.Screen
        name="Test Trends"
        component={TestTrendsScreen}
        options={{
          tabBarIcon: ({focused}) => <TestIcon focused={focused} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            top: 5,
            color: 'grey',
          },
        }}
      />
      <Bottom.Screen
        name="Settings"
        component={SettingNavigation}
        options={{
          tabBarIcon: ({focused}) => <SettingsIcon focused={focused} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            top: 5,
            color: 'grey',
          },
        }}
      />
    </Bottom.Navigator>
  );
};
export default BottomNavigation;
