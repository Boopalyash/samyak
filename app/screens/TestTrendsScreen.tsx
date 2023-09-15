import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useSamyakTestTrendsPostMutation} from '../redux/service/TestTrendsTest';
import {useSamyakTrendsPatientListPostMutation} from '../redux/service/TrendsPatientList';

const TestTrendsScreen = ({navigation}: any) => {
  const [setTestData] = useState([]);
  const [setPatientListData] = useState([]);

  // Api for test
  const [testTrendsAPIReq, testTrendsAPIRes] =
    useSamyakTestTrendsPostMutation();

  // useEffect for test
  useEffect(() => {
    const testTrendsTestObj = {
      userName: '7358722588',
      Pt_Code: '0100511265',
      Test_Code: '000245',
      Test_Sub_Code: '',
    };
    testTrendsAPIReq(testTrendsTestObj)
      .unwrap()
      .then(response => {
        console.log(response, 'resp)');

        if (response.SuccessFlag === 'true') {
          setTestData(response.Message);
        }
      });
  }, []);

  const handleArrowImagePress = () => {
    console.log(testTrendsAPIRes, 'testData');
  };

  // Api for Patient
  const [patientListAPIReq, patientListAPIRes] =
    useSamyakTrendsPatientListPostMutation();

  // useEffect for Patient
  useEffect(() => {
    const trendsPatientListObj = {
      userName: '7358722588',
      Pt_Code: '0100511265',
      // Test_Code: '000245',
    };
    patientListAPIReq(trendsPatientListObj)
      .unwrap()
      .then(response => {
        console.log(response, 'patientList)');

        if (response.SuccessFlag === 'true') {
          setPatientListData(response.Message);
        }
      });
  }, []);

  const handlePatientArrow = () => {
    console.log(patientListAPIRes, 'testData');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.BookingText}>Test Trends</Text>
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
      </View>

      <View style={styles.LocationView}>
        <Image
          source={require('../assets/images/location.png')}
          style={styles.LocationImg}
        />
        <Text>RT-MAIN(PORUR)</Text>
      </View>

      <View style={styles.SelectPatientView}>
        <View>
          <Text style={styles.SelectPatientText}>Select Patient</Text>
        </View>
        <View>
          <TouchableOpacity onPress={handlePatientArrow}>
            <Image
              source={require('../assets/images/downArrow.png')}
              style={styles.DownArrowImg}
            />
          </TouchableOpacity>
        </View>
        {patientListAPIRes?.isSuccess &&
          patientListAPIRes?.data?.Code === 200 &&
          patientListAPIRes?.data?.Message.map(item => {
            return (
              <Text style={{marginTop: 10, marginLeft: 12, fontSize: 16}}>
                {item.Test_Sub_Code}
              </Text>
            );
          })}
      </View>

      <View style={styles.cardView}>
        <View style={styles.textContainer}>
          <Text>RAMACHANDRAN , 30</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Male</Text>
        </View>
        <View>
          <Text>Self</Text>
        </View>
      </View>

      <View style={{backgroundColor: '#f1f1f1', padding: 8, margin: 15}}>
        <View style={styles.SelectPatientView1}>
          <View>
            <Text style={styles.SelectPatientText1}>Select Test</Text>
          </View>
          <View>
            <TouchableOpacity onPress={handleArrowImagePress}>
              <Image
                source={require('../assets/images/downArrow.png')}
                style={styles.DownArrowImg1}
              />
            </TouchableOpacity>
          </View>
        </View>
        {testTrendsAPIRes?.isSuccess &&
          testTrendsAPIRes?.data?.Code === 200 &&
          testTrendsAPIRes?.data?.Message.map(item => {
            return (
              <Text style={{marginTop: 10, marginLeft: 12, fontSize: 16}}>
                {item.Service_Name}
              </Text>
            );
          })}
      </View>

      <View style={{flexDirection: 'row', alignSelf: 'flex-end', right: 20}}>
        <View style={{backgroundColor: '#3399ff', right: 10, padding: 5}}>
          <Image
            source={require('../assets/images/graphImage.png')}
            style={{width: 40, height: 40}}
          />
        </View>
        <View>
          <Image
            source={require('../assets/images/tableImage.png')}
            style={{width: 50, height: 50}}
          />
        </View>
      </View>

      <View
        style={{alignSelf: 'center', backgroundColor: 'white', marginTop: 20}}>
        <Image
          source={require('../assets/images/graph.png')}
          style={{width: 300, height: 250, marginTop: 20}}
        />
      </View>

      <TouchableOpacity>
        <View style={{alignSelf: 'flex-end', right: 20, marginTop: 30}}>
          <Image
            source={require('../assets/images/rotation.png')}
            style={{width: 40, height: 40}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default TestTrendsScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fafbfb',
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
    marginLeft: 20,
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
  SelectPatientView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  SelectPatientText: {
    fontSize: 20,
  },
  DownArrowImg: {
    width: 20,
    height: 20,
  },
  SelectPatientView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  SelectPatientText1: {
    fontSize: 16,
    color: '#60b450',
  },
  DownArrowImg1: {
    width: 20,
    height: 20,
  },
  cardView: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'grey',
    margin: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  textContainer: {
    borderRightWidth: 1,
    borderRightColor: 'gray',
    paddingRight: 20,
  },
  SelectPatientTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  TestOption: {
    fontSize: 16,
    color: '#60b450',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 2,
  },
  circleText: {
    color: 'black',
    fontSize: 10,
  },
});
