import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
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
      {notificationListAPIRes?.isSuccess && notificationListAPIRes?.data?.Message[0]?.Notification_List?.map((item:any)=>{
      return(
      <View>
        <Text>{item?.Notify_Message}</Text>
      </View>)})}
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
