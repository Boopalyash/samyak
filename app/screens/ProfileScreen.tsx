import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useSamyakProfilePostMutation} from '../redux/service/ProfileService';
import {useSamyakProfileUpdatePostMutation} from '../redux/service/ProfileUpdateService';

const ProfileScreen = ({navigation}: any) => {
  const [profileAPIReq, profileAPIRes] = useSamyakProfilePostMutation();

  const [fullName, setFullName] = useState();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const [updateProfileAPIReq, updateProfileAPIRes] =
    useSamyakProfileUpdatePostMutation();

  useEffect(() => {
    const profileObj = {
      userName: '7358722588',
    };
    profileAPIReq(profileObj);
  }, []);

  const handleHome = async () => {
    if (isEditMode) {
      const updateProfileObj = {
        userName: '7358722588',
        password: password,
        Name: fullName,
        User_Email_Id: email,
        mobileNumber: mobileNumber,
        dob: dob,
      };
      await updateProfileAPIReq(updateProfileObj);
    }
  };

  useEffect(() => {
    if (profileAPIRes?.isSuccess) {
      setFullName(profileAPIRes?.data?.Message[0]?.Name);
      setEmail(profileAPIRes?.data?.Message[0]?.User_Email_Id);
      setDOB(profileAPIRes?.data?.Message[0]?.User_DOB);
      setMobileNumber(profileAPIRes?.data?.Message[0]?.User_Mobile_No);
    }
  }, [profileAPIRes]);

  useEffect(() => {
    if (updateProfileAPIRes.isSuccess) {
      console.log('success');
      showAlert('Success', 'Profile Updated Successfully');
      navigation.navigate('Settings');
    } else if (updateProfileAPIRes.isError) {
      showAlert('Error', updateProfileAPIRes?.error?.data?.Message[0]?.Message);
    }
  }, [updateProfileAPIRes]);

  const showAlert = (title, message) => {
    Alert.alert(title, message, [], {cancelable: false});
  };

  const handleCross = () => {
    navigation.navigate('Settings');
  };

  const handleEditProfile = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <View>
      <View style={styles.myProfileView}>
        <View>
          <Text style={{fontSize: 20, color: '#757677'}}>My Profile</Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleCross}>
            <Image
              source={require('../assets/images/black_cross.png')}
              style={styles.crossImg}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.NameView}>
        <View>
          <Text style={styles.NameText}>
            {profileAPIRes?.data?.Message[0]?.Name}
          </Text>
        </View>
        <View style={styles.editProfileContainer}>
          <TouchableOpacity onPress={handleEditProfile}>
            <Text style={styles.editProfileText}>
              {isEditMode ? 'Cancel' : 'Edit Profile'}
            </Text>
          </TouchableOpacity>
          <View style={styles.circle}>
            <Text style={styles.circleText}>RA</Text>
          </View>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}> Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={fullName}
          onChangeText={setFullName}
          editable={isEditMode}
        />
      </View>
      {/* <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          editable={isEditMode}
        />
      </View> */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={newEmail => setEmail(newEmail.toLowerCase())}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>D.O.B</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your DOB"
          keyboardType="numeric"
          value={dob}
          onChangeText={setDOB}
          editable={isEditMode}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          editable={isEditMode}
        />
      </View>
      <View>
        <TouchableOpacity onPress={handleHome} style={styles.HomeButton}>
          <Text style={styles.HomeButtonText}>
            {isEditMode ? 'Update' : 'Home'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  myProfileView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  crossImg: {
    width: 20,
    height: 20,
  },
  divider: {
    height: 1,
    marginTop: 10,
    backgroundColor: 'gray',
  },
  editProfileContainer: {
    alignItems: 'center',
  },
  editProfileText: {
    fontSize: 15,
    color: '#1e75c0',
    textAlign: 'center',
    marginBottom: 5,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#b19c7a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontSize: 12,
  },
  input: {
    height: 40,
    margin: 12,
  },
  inputContainer: {
    marginVertical: 5,
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fb5861',
  },
  NameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  NameText: {
    fontSize: 25,
    marginTop: 60,
    color: '#757677',
  },
  HomeButton: {
    backgroundColor: '#040619',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: '30%',
  },
  HomeButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
