import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/Store';
import {useSamyakAddAddressPostMutation} from '../redux/service/ManageAddNewAddressPostService';

const AddAddressSettingScreen = ({navigation}: any) => {
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [place, setPlace] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  console.log(
    '+++++++++++++++++',
    address,
    street,
    place,
    city,
    state,
    pincode,
    latitude,
    longitude,
    landmark,
  );

  const addressData = useSelector(
    (state: RootState) => state.getAddressPost.samyakAddressDetailsPost,
  );

  const [addAddressAPIReq, addAddressAPIRes] =
    useSamyakAddAddressPostMutation();

  useEffect(() => {
    const addAddressObj = {
      userName: '7358722588',
      password: 'Ram@12345678',
    };
    addAddressAPIReq(addAddressObj);
  }, []);

  const handleSubmit = async () => {
    let addAddressObj = {
      Address_Type: address,
      Street: street,
      Place: place,
      City: city,
      State: state,
      Pincode: pincode,
      Latitude: latitude,
      Longitude: longitude,
      Username: '7358722588',
      Landmark: landmark,
    };
    console.log('addAddressAPI)))))))))', addAddressObj);
    await addAddressAPIReq(addAddressObj);
  };

  useEffect(() => {
    if (addAddressAPIRes.isSuccess) {
      console.log('success');
    } else {
      console.log('error');
    }
  }, [addAddressAPIRes]);

  const handleCross = () => {
    navigation.navigate('ManageAddress');
  };

  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.AddMemberView}>
        <View>
          <Text style={styles.headerText}>Add Address</Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleCross}>
            <Image source={require('../assets/images/black_cross.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.MapContainer}>
        <View style={styles.MapView}>
          <Text style={styles.MapText}>Select location on map</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/locationArrow.png')}
            style={{tintColor: 'white', right: 30}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Address Type"
          onChangeText={setAddress}
          value={addressData[0].User_Address[0].Address_Type_Desc}
          // value={address}
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
          placeholder="Street"
          onChangeText={setStreet}
          value={addressData[0].User_Address[0].Full_Address}
          // value={street}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Place"
          onChangeText={setPlace}
          value={addressData[0].User_Address[0].Place}
          // value={place}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="City"
          onChangeText={setCity}
          value={addressData[0].User_Address[0].City}
          // value={city}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="State"
          onChangeText={setState}
          value={addressData[0].User_Address[0].State}
          // value={state}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pincode"
          onChangeText={setPincode}
          value={addressData[0].User_Address[0].PinCode}
          // value={pincode}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Landmark (optional)"
          onChangeText={setLandmark}
          value={addressData[0].User_Address[0].Landmark}
          // value={landmark}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Longitude"
          onChangeText={setLongitude}
          value={addressData[0].User_Address[0].Landmark}
          // value={longitude}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Latitude"
          onChangeText={setLatitude}
          value={addressData[0].User_Address[0].Landmark}
          // value={latitude}
        />
      </View>

      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.SubmitButtonView}>
          <Text style={styles.ButtonText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default AddAddressSettingScreen;
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
  MapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 10,
  },
  MapView: {
    backgroundColor: '#7e72ff',
    padding: 15,
    width: '90%',
    borderRadius: 10,
  },
  MapText: {
    color: 'white',
    fontSize: 18,
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
    width: 12,
    height: 12,
    position: 'absolute',
    right: 30,
    tintColor: '#9e9e9e',
  },
  touchableContainer: {
    marginTop: 35,
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
});
