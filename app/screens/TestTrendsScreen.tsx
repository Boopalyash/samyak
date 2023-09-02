import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const TestTrendsScreen = () => {
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
            <Image
              source={require('../assets/images/bellwhite.png')}
              style={styles.image}
            />
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
          <TouchableOpacity>
            <Image
              source={require('../assets/images/downArrow.png')}
              style={styles.DownArrowImg}
            />
          </TouchableOpacity>
        </View>
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
            <TouchableOpacity>
              <Image
                source={require('../assets/images/downArrow.png')}
                style={styles.DownArrowImg1}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{marginTop: 10, marginLeft: 12, fontSize: 16}}>
          # CHOLESTEROL
        </Text>
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
    marginLeft: 40,
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
});
