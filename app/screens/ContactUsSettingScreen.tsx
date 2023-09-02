import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/Store';

const ContactUsSettingScreen = ({navigation}: any) => {
  const contactUsData = useSelector(
    (state: RootState) => state.contactUs.samyakContactUsDetailsPost,
  );
  console.log('contactData&&&&&&&&&&&', contactUsData);

  const handleProfile = () => {
    navigation.navigate('Settings');
  };

  const handleButtonPresss = () => {
    navigation.navigate('Settings');
  };

  const handleSosAlert = () => {
    navigation.navigate('SosAlert');
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.BookingText}>Contact Us</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity onPress={handleSosAlert}>
            <Image
              source={require('../assets/images/alarm.png')}
              style={styles.image}
            />
            </TouchableOpacity>
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
      </View>

      <View style={styles.LocationView}>
        <Image
          source={require('../assets/images/location.png')}
          style={styles.LocationImg}
        />
        <Text>RT-MAIN(PORUR)</Text>
      </View>

      <View style={styles.CenterView}>
        <View style={styles.roundBackground}>
          <Image
            source={require('../assets/images/callIcon.png')}
            style={styles.phoneImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.CenterText}>
          <Text style={{fontSize: 20, color: '#a19b9b'}}>
            {contactUsData?.Message[0]?.Mobile_No}
          </Text>
          <Text style={{fontSize: 20, color: '#a19b9b'}}>
            {contactUsData?.Message[0]?.Short_Description}
          </Text>
        </View>
      </View>

      <View style={styles.TextView}>
        <TouchableOpacity>
          <Text style={styles.imageText}>Call Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.BackButtonView}>
        <TouchableOpacity style={styles.buttons} onPress={handleButtonPresss}>
          <Image
            source={require('../assets/images/backArrowBlack.png')}
            style={styles.buttonImages}
          />
          <Text style={styles.buttonTexts}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ContactUsSettingScreen;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    height: 100,
    backgroundColor: 'orange',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 30,
  },
  BookingText: {
    fontSize: 20,
    color: 'white',
  },
  imageRow: {
    flexDirection: 'row',
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 40,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  circleText: {
    color: 'black',
    fontSize: 10,
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
  CenterView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  roundBackground: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4e4f50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneImage: {
    width: 60,
    height: 60,
    tintColor: 'white',
  },
  CenterText: {
    marginTop: 15,
  },
  TextView: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#080913',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imageText: {
    fontSize: 16,
    color: 'white',
  },
  BackButtonView: {
    width: '30%',
    left: 15,
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#676767',
    borderRadius: 15,
    padding: 15,
  },
  buttonImages: {
    width: 20,
    height: 20,
    tintColor: 'white',
    right: 15,
  },
  buttonTexts: {
    color: 'white',
    fontSize: 20,
  },
});
