import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSamyakContactUsPostMutation} from '../redux/service/ContactUsService';
import {useSamyakAboutUsPostMutation} from '../redux/service/AboutUsService';

const SettingsScreen = ({navigation}: any) => {
  const [contactUsAPIReq] = useSamyakContactUsPostMutation();
  const [aboutUsAPIReq] = useSamyakAboutUsPostMutation();

  // To display the contactUs screen
  useEffect(() => {
    const contactUsObj = {
      userName: '7358722588',
    };
    contactUsAPIReq(contactUsObj);
  }, []);

  // To display the aboutUs screen
  useEffect(() => {
    const aboutUsObj = {
      userName: '7358722588',
    };
    aboutUsAPIReq(aboutUsObj);
  }, []);

  const settingsData = [
    {
      id: '1',
      backgroundColor: '#696a6d',
      icon: require('../assets/images/code-branch1.png'),
      text: 'Manage Branch',
    },
    {
      id: '2',
      backgroundColor: '#1e564a',
      icon: require('../assets/images/username.png'),
      text: 'Manage Members',
    },
    {
      id: '3',
      backgroundColor: '#af794e',
      icon: require('../assets/images/location.png'),
      text: 'Manage Address',
    },
    {
      id: '4',
      backgroundColor: '#172073',
      icon: require('../assets/images/about.png'),
      text: 'About',
    },
    {
      id: '5',
      backgroundColor: '#ef9724',
      icon: require('../assets/images/callIcon.png'),
      text: 'Contact Us',
    },
    {
      id: '6',
      backgroundColor: '#e92e40',
      icon: require('../assets/images/sign-out.png'),
      text: 'Logout',
    },
  ];
  const handleSettingItemPress = (item: any) => {
    switch (item.text) {
      case 'Manage Branch':
        navigation.navigate('ManageBranch');
        break;
      case 'Manage Address':
        navigation.navigate('ManageAddress');
        break;
      case 'About':
        navigation.navigate('About');
        break;
      case 'Contact Us':
        navigation.navigate('Contact');
        break;
      case 'Manage Members':
        navigation.navigate('ManageMembers');
        break;

      default:
        break;
    }
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity onPress={() => handleSettingItemPress(item)}>
      <View style={styles.itemContainer}>
        <View
          style={{
            backgroundColor: item.backgroundColor,
            padding: 10,
            borderRadius: 8,
          }}>
          <Image source={item.icon} style={styles.CodeBranchImg} />
        </View>
        <Text style={{marginLeft: 20, flex: 1}}>{item.text}</Text>
        <Image
          source={require('../assets/images/nextArrow.png')}
          style={styles.ArrowImg}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.SettingsText}>Settings</Text>
        <View style={styles.imageRow}>
          <Image
            source={require('../assets/images/alarm.png')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/bellwhite.png')}
            style={styles.image}
          />
          <TouchableOpacity onPress={handleProfile}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>RA</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.LocationView}>
        <Image
          source={require('../assets/images/location.png')}
          style={styles.LocationImg}
        />
        <Text>RT-MAIN(PORUR)</Text>
      </View>
      <FlatList
        data={settingsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: 100,
    backgroundColor: 'orange',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  SettingsText: {
    fontSize: 20,
    color: 'white',
    top: 20,
  },
  imageRow: {
    flexDirection: 'row',
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 30,
    top: 20,
  },
  LocationView: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'flex-end',
    right: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  LocationImg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  CodeBranchImg: {
    width: 25,
    height: 25,
    tintColor: 'white',
    resizeMode: 'contain',
  },
  ArrowImg: {
    width: 20,
    height: 20,
    tintColor: 'black',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    top: 16,
    marginLeft: 30,
  },
  circleText: {
    color: 'black',
    fontSize: 10,
  },
});

export default SettingsScreen;
