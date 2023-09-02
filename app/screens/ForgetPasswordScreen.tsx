import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const ForgetPasswordScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleMobileNumberChange = (text: string) => {
    const numericRegex = /^[0-9]*$/;
    if (numericRegex.test(text)) {
      setMobileNumber(text);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/left_chevron.png')}
              style={styles.ChevronImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>Reset Password</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../assets/images/samyakLogo.png')}
          style={styles.cardImage}
          resizeMode="contain"
        />
        <Text style={styles.inputLabel}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the Mobile Number"
          onChangeText={handleMobileNumberChange}
          keyboardType="numeric"
          value={mobileNumber}
        />

        <View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Get OTP</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={styles.BackToView}>
            <Text style={styles.BackToText}>Back to Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f9a929',
    height: 300,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  ChevronImage: {
    width: 20,
    height: 20,
    top: 65,
  },
  text: {
    top: 60,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    left: 90,
  },
  card: {
    top: 120,
    position: 'absolute',
    backgroundColor: 'white',
    width: 380,
    height: 600,
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    overflow: 'hidden',
  },
  inputLabel: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 40,
  },
  input: {
    width: 300,
    alignSelf: 'center',
    borderRadius: 30,
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginTop: 10,
  },
  cardImage: {
    top: 10,
    width: 250,
    height: 125,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: '#f9a929',
    paddingVertical: 16,
    paddingHorizontal: 110,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  BackToView: {
    alignSelf: 'center',
    marginTop: 20,
  },
  BackToText: {
    fontSize: 18,
  },
});

export default ForgetPasswordScreen;
