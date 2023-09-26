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
    <View>
      <View style={styles.AddMemberView}>
        <Text style={styles.headerText}>Upload Description</Text>
        <TouchableOpacity onPress={handleCross}>
          <Image source={require('../assets/images/black_cross.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default UploadPrescriptionScreen;
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
});
