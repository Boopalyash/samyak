import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useSamyakAddMemberListPostMutation} from '../redux/service/AddMemberListService';

const AddManageMembersSettingScreen = ({navigation}: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [title, setTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDOB] = useState('');
  const [sex, setSex] = useState('');
  const [patientRelation, setPatientRelation] = useState('');

  console.log(
    '****************',
    phoneNumber,
    title,
    fullName,
    dob,
    sex,
    patientRelation,
  );

  const [addMemberAPIReq, addMemberAPIRes] =
    useSamyakAddMemberListPostMutation();

  useEffect(() => {
    const addMemberObj = {
      userName: '7358722588',
      password: 'Ram@12345678',
    };
    addMemberAPIReq(addMemberObj);
  }, []);

  const handleSubmit = async () => {
    let addMemberObj = {
      UserName: title,
      Pt_Name: fullName,
      Dob: dob,
      Gender_code: '',
      Gender: sex,
      Mobile_No: phoneNumber,
      relationShip_code: '002',
      Title_Code: '',
      Link_Pt_Code: '',
    };
    console.log('addMemberAPI-----------', addMemberObj);
    await addMemberAPIReq(addMemberObj);
  };

  useEffect(() => {
    if (addMemberAPIRes.isSuccess) {
      console.log('success');
    } else {
      console.log('error');
    }
  }, [addMemberAPIRes]);

  const handleCross = () => {
    navigation.navigate('ManageMembers');
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.AddMemberView}>
        <View>
          <Text style={styles.headerText}>Add Member</Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleCross}>
            <Image source={require('../assets/images/black_cross.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />
        <TouchableOpacity style={styles.touchableContainer}>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.SearchImg}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={setTitle}
          value={title}
        />
        <TouchableOpacity style={styles.touchableContainer}>
          <Image
            source={require('../assets/images/downArrow.png')}
            style={styles.downArrow}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={setFullName}
          value={fullName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Select DOB"
          onChangeText={setDOB}
          value={dob}
        />
        <TouchableOpacity style={styles.touchableContainer}>
          <Image
            source={require('../assets/images/calender.png')}
            style={styles.CalenderImg}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Sex"
          onChangeText={setSex}
          value={sex}
        />
        <TouchableOpacity style={styles.touchableContainer}>
          <Image
            source={require('../assets/images/downArrow.png')}
            style={styles.downArrow}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Patient Relation"
          onChangeText={setPatientRelation}
          value={patientRelation}
        />
        <TouchableOpacity style={styles.touchableContainer}>
          <Image
            source={require('../assets/images/downArrow.png')}
            style={styles.downArrow}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.SubmitButtonView}>
          <Text style={styles.ButtonText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddManageMembersSettingScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#eef3fd',
  },
  AddMemberView: {
    flexDirection: 'row',
    marginTop: 60,
    marginBottom: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 20,
    color: '#a19b9b',
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
    padding: 20,
    backgroundColor: 'white',
    margin: 15,
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  downArrow: {
    width: 15,
    height: 15,
    position: 'absolute',
    right: 30,
    alignSelf: 'center',
    tintColor: '#9e9e9e',
  },
  SearchImg: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 30,
    alignSelf: 'center',
    tintColor: 'black',
  },
  CalenderImg: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 30,
    alignSelf: 'center',
    tintColor: 'red',
  },
  SubmitButtonView: {
    width: '90%',
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#1e75c0',
    padding: 15,
    margin: 15,
  },
  ButtonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },
  touchableContainer: {
    marginTop: 35,
  },
});
