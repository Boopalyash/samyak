import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

const UploadPrescriptionScreen = ({navigation}: any) => {
  const handleCross = () => {
    navigation.navigate('Lab');
  };

  return (
    <View style={{marginTop: 50}}>
      <View style={{flexDirection: 'row'}}>
        <Text>Upload Prescription</Text>
        <TouchableOpacity onPress={handleCross}>
          <Image source={require('../assets/images/black_cross.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default UploadPrescriptionScreen;
const styles = StyleSheet.create({});
