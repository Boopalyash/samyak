import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSamyakNotificationListPostMutation} from '../redux/service/NotificationListService';

const NotificationScreen = ({navigation}: any) => {
  const [notificationListAPIReq, notificationListAPIRes] =
    useSamyakNotificationListPostMutation();

  // to display the notification list
  useEffect(() => {
    const notificationListObj = {
      userName: '7358722588',
    };
    notificationListAPIReq(notificationListObj);
  }, []);

  useEffect(() => {
    if (notificationListAPIRes?.isSuccess) {
      showAlert(
        'Success',
        notificationListAPIRes?.data?.Message[0]?.Description,
      );
    } else if (notificationListAPIRes?.isError) {
      showAlert(
        'info',
        notificationListAPIRes?.error?.data?.Message[0]?.Message,
      );
    }
  }, [notificationListAPIRes]);
  console.log('notificationListAPIRes', notificationListAPIRes);

  const showAlert = (title, message) => {
    Alert.alert(title, message, [], {cancelable: false});
  };

  const handleCross = () => {
    navigation.navigate('Settings');
  };

  return (
    <View>
      <View style={styles.AddMemberView}>
        <Text style={styles.headerText}>Notification</Text>
        <TouchableOpacity onPress={handleCross}>
          <Image source={require('../assets/images/black_cross.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <View>
        <Text>{notificationListAPIRes?.data?.Message[0]?.Message}</Text>
      </View>
    </View>
  );
};

export default NotificationScreen;
const styles = StyleSheet.create({
  AddMemberView: {
    flexDirection: 'row',
    marginTop: 60,
    marginBottom: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 20,
  },
  separator: {
    borderBottomWidth: 0.5,
    width: '100%',
  },
});
