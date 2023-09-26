import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import {useSamyakDefaultBranchPostMutation} from '../redux/service/DefaultBranchService';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookingIdScreen = ({navigation}: any) => {
  const [selectedbranch, setSelectedBranch] = useState('RT-MAIN(PORUR)');
  const [defaultManageBranchAPIReq, defaultManageBranchAPIRes] =
    useSamyakDefaultBranchPostMutation();
  const route = useRoute();
  const userDetails = route.params;

  const handleButtonPresss = () => {
    navigation.navigate('Bookings');
  };

  const formattedBookingDate = moment(
    userDetails?.userDetails?.Booking_Date,
    'YYYY/MM/DD',
  );

  const dayOfWeek = formattedBookingDate.format('dddd');

  const formattedBookingTime = moment(
    userDetails?.userDetails?.Booking_Time,
    'h:mmA',
  ).format('hh:mm A');

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('selectedBranch')
        .then(value => {
          if (value) {
            defaultManageBranchAPIReq({
              userName: '7358722588',
              Default_Firm_No: value,
            });
          }
        })
        .catch(error => console.error('Error ', error));
      return () => {
        console.log('Screen is unfocused');
      };
    }, []),
  );

  useEffect(() => {
    if (defaultManageBranchAPIRes?.isSuccess) {
      setSelectedBranch(
        defaultManageBranchAPIRes?.data?.Message[0]?.Branch_Name,
      );
    }
  }, [defaultManageBranchAPIRes]);

  return (
    <View style={styles.MainContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.BookingText}>
            Booking ID: {userDetails?.userDetails?.Booking_No}
          </Text>
          <View style={styles.imageRow}>
            <Image
              source={require('../assets/images/alarm.png')}
              style={styles.image}
            />
            <Image
              source={require('../assets/images/bellwhite.png')}
              style={styles.image}
            />
            <TouchableOpacity>
              <View style={styles.Circle}>
                <Text style={styles.CircleText}>RA</Text>
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
        <Text>{selectedbranch}</Text>
      </View>

      <View style={{left: 20}}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            color: '#797979',
            fontWeight: 'bold',
          }}>
          Booking Type: {userDetails?.userDetails?.Booking_Type_Desc}
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            color: '#797979',
            fontWeight: 'bold',
          }}>
          Booking ID: {userDetails?.userDetails?.Booking_No}
        </Text>
        <Text style={{fontSize: 14, color: '#797979'}}>
          {dayOfWeek}, {formattedBookingDate.format('MMMM D YYYY')},{' '}
          {formattedBookingTime}
        </Text>
      </View>

      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>RA</Text>
        </View>
        <View style={{left: 25}}>
          <Text style={{fontSize: 18, marginBottom: 10, color: '#7d7d7d'}}>
            {userDetails?.userDetails?.Pt_Name},
            {userDetails?.userDetails?.Pt_First_Age}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={require('../assets/images/gender.png')}
                style={{width: 35, height: 30}}
              />
            </View>
            <View>
              <Text style={{left: 20, fontSize: 20, color: '#797979'}}>
                {userDetails?.userDetails?.Pt_Gender}
              </Text>
            </View>
            <View>
              <Image
                source={require('../assets/images/mobile.png')}
                style={{width: 30, height: 30, left: 40}}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.PaymentCashView}>
        <Text style={{fontSize: 18, color: 'white'}}>
          Payment to be done by cash
        </Text>
      </View>

      <View style={styles.AllocatedView}>
        <Text style={{fontSize: 18, color: 'white'}}>
          {userDetails?.userDetails?.Booking_Status_Desc}
        </Text>
      </View>

      <View style={styles.LipidView}>
        <Text style={{color: '#676767'}}>LIPID PROFILE</Text>
        <Text style={{color: '#696969'}}>
          INR {userDetails?.userDetails?.Due_Amount}
        </Text>
      </View>

      <View style={styles.AmoutPayableView}>
        <Text style={{color: '#3a5ba1'}}>Amount Payable</Text>
        <Text style={{color: '#6c6c6c'}}>
          INR {userDetails?.userDetails?.Due_Amount}
        </Text>
      </View>

      <View style={styles.outerView}>
        <Text style={{left: 10, fontWeight: 'bold'}}>Post your review</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.innerView}>
            <TextInput style={styles.input} placeholder="" multiline />
          </View>
          <TouchableOpacity>
            <View style={styles.PostView}>
              <Text style={{color: 'black', top: 5}}>post</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          width: '30%',
          left: 25,
        }}>
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

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
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
    marginTop: 5,
  },
  imageRow: {
    flexDirection: 'row',
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: 3,
  },
  LocationView: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'flex-end',
    right: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  LocationImg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  circleContainer: {
    left: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  circleText: {
    color: 'black',
    fontSize: 16,
  },
  PaymentCashView: {
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#5aa218',
    padding: 4,
    borderRadius: 10,
  },
  AllocatedView: {
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#f2b94b',
    padding: 4,
    borderRadius: 10,
  },
  LipidView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f7f7f7',
    padding: 15,
    margin: 20,
  },
  AmoutPayableView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    margin: 20,
    paddingVertical: 20,
    padding: 15,
    marginTop: -25,
  },
  outerView: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    margin: 20,
  },
  innerView: {
    padding: 5,
    borderRadius: 10,
  },
  input: {
    height: 100,
    width: 280,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  PostView: {
    backgroundColor: '#dddbdb',
    padding: 10,
    height: 50,
    marginTop: 30,
    borderRadius: 10,
    left: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#676767',
    borderRadius: 20,
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
  Circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  CircleText: {
    color: 'black',
    fontSize: 10,
  },
});

export default BookingIdScreen;
