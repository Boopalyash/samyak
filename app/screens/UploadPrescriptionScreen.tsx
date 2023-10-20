// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
// } from 'react-native';

// const UploadPrescriptionScreen = ({navigation}: any) => {
//   const handleCross = () => {
//     navigation.navigate('Lab');
//   };

//   return (
//     <View>
//       <View style={styles.AddMemberView}>
//         <Text style={styles.headerText}>Upload Description</Text>
//         <TouchableOpacity onPress={handleCross}>
//           <Image source={require('../assets/images/black_cross.png')} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// export default UploadPrescriptionScreen;
// const styles = StyleSheet.create({
//   AddMemberView: {
//     flexDirection: 'row',
//     marginTop: 60,
//     marginBottom: 30,
//     justifyContent: 'space-between',
//     paddingHorizontal: 30,
//   },
//   headerText: {
//     fontSize: 20,
//   },
// });
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const UploadPrescriptionScreen = ({navigation}: any) => {
  const handleCross = () => {
    navigation.navigate('Lab');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Upload Prescription</Text>
        <TouchableOpacity onPress={handleCross}>
          <Image source={require('../assets/images/black_cross.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.failureContainer}>
          <View style={styles.exclamationCircle}>
            <Text style={styles.exclamationText}>!</Text>
          </View>
          <Text style={styles.failureText}>BROWSE FILES HERE</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.mainText}>
            Take a picture or Browse files here
          </Text>
          <Text style={[styles.mainText, styles.centeredText]}>
            or browse your device
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>BROWSE FILES</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>or</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CLICK A PICTURE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef3fd',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 60,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 20,
    color: '#1e75c0',
  },
  content: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    padding: 10,
    alignSelf: 'center',
    width: '90%',
    height: '80%',
    backgroundColor: '#dae5f8',
  },
  failureContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  exclamationCircle: {
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#c60606',
    borderWidth: 2,
  },
  exclamationText: {
    color: '#c60606',
    fontSize: 40,
  },
  textContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 18,
  },
  centeredText: {
    textAlign: 'center',
  },
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 30,
    width: '60%',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  orText: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  failureText: {
    fontSize: 22,
    marginTop: 20,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default UploadPrescriptionScreen;