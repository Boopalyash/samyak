import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSamyakNotificationListPostMutation} from '../redux/service/NotificationListService';

const NotificationScreen = ({navigation}: any) => {
  // api for notification list
  const [notificationListAPIReq, notificationListAPIRes] =
    useSamyakNotificationListPostMutation();

  const [notificationData, setNotificationData] = useState([]);
  const [isContentVisible, setIsContentVisible] = useState(true);

  // useEffect to display the list of notifications
  useEffect(() => {
    const notificationListObj = {
      userName: '9849390103',
    };
    notificationListAPIReq(notificationListObj);
  }, []);

  useEffect(() => {
    if (notificationListAPIRes?.isSuccess) {
      setNotificationData(
        notificationListAPIRes?.data?.Message[0]?.Notification_List || [],
      );
    }
  }, [notificationListAPIRes]);

  const handleCross = () => {
    navigation.navigate('Settings');
  };

  const handleMarkAllAsRead = () => {
    Alert.alert(
      'Info',
      'Are you sure that you want to mark all notification as read?',
      [
        {
          text: 'Yes',
          onPress: () => setIsContentVisible(false),
        },
        {
          text: 'No',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  const handleClear = () => {
    Alert.alert(
      'Info',
      'Are you sure that you want to clear all notifications?',
      [
        {
          text: 'Yes',
          onPress: () => {
            setNotificationData([]);
          },
        },
        {
          text: 'No',
          style: 'cancel',
        },
      ],
    );
  };

  const handleViewMore = (message: string) => {
    Alert.alert('View More', message);
  };

  return (
    <View style={{backgroundColor: '#f0f5fe', flex: 1, padding: 10}}>
      <View style={styles.AddMemberView}>
        <Text style={styles.headerText}>Notification</Text>
        <TouchableOpacity onPress={handleCross}>
          <Image source={require('../assets/images/black_cross.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
          paddingHorizontal: 10,
          marginTop: 15,
        }}>
        <Text style={{color: '#0645ad', right: 15}} onPress={handleClear}>
          Clear all
        </Text>

        <Text style={{color: '#0645ad'}} onPress={handleMarkAllAsRead}>
          Mark all as Read
        </Text>
      </View>

      {notificationData.map((item: any, index: number) => {
        const showDate =
          index === 0 ||
          item.Notify_Date !== notificationData[index - 1]?.Notify_Date;

        return (
          <View
            key={item?.Notification_Id}
            style={{
              backgroundColor: isContentVisible ? '#e0e0e0' : 'transparent',
              marginBottom: 10,
              padding: 10,
              marginTop: 10,
            }}>
            {showDate && <Text> Date: {item?.Notify_Date}</Text>}
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{flex: 1}}>
                {item?.Notify_Message}
              </Text>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: 'black',
                    alignItems: 'center',
                    padding: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'white'}}>Older</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>{item?.Time_Diff_Desc}</Text>
              <TouchableOpacity
                onPress={() => handleViewMore(item?.Notify_Message)}>
                <Text style={{color: '#0645ad', right: 70}}>View More</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
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
