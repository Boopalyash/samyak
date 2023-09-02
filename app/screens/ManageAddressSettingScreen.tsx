import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/Store';
import HeaderCommonComponentScreen from '../components/HeaderCommonComponent';
import {useSamyakAddressPostMutation} from '../redux/service/ManageAddressPostService';
import {useSamyakManageShowAddressPostMutation} from '../redux/service/ManageShowAddressService';

const ManageAddressSettingsScreen = ({navigation}: any) => {
  const [getAddressAPIReq, getAddressAPIRes] = useSamyakAddressPostMutation();
  const [showAddressAPIReq] = useSamyakManageShowAddressPostMutation();

  const showAddressData = useSelector(
    (state: RootState) => state.showAddress.samyakDetailsManageShowAddressPost,
  );

  //api for get address
  useEffect(() => {
    if (getAddressAPIRes.isSuccess) {
      console.log('success');
      navigation.navigate('AddAddress');
    } else {
      console.log('error');
    }
  }, [getAddressAPIRes]);

  //api for show address
  useEffect(() => {
    const showAddressObj = {
      userName: '7358722588',
    };
    showAddressAPIReq(showAddressObj);
  }, []);

  const handleAdd = () => {
    let getAddressObj = {
      Username: '7358722588',
    };
    getAddressAPIReq(getAddressObj);
  };

  const handleEdit = () => {
    navigation.navigate('AddAddress');
  };

  const handleButtonPresss = () => {
    navigation.navigate('Settings');
  };

  const renderAddressItem = ({item}: any) => {
    return (
      <View style={{backgroundColor: '#f7f7f7', margin: 10, padding: 10}}>
        <View style={styles.HomeView}>
          <View style={{left: 10}}>
            <Text style={{color: '#2f2f2f'}}>{item?.Address_Type_Desc}</Text>
          </View>
          <View style={{left: 140}}>
            <TouchableOpacity onPress={handleEdit}>
              <Image
                source={require('../assets/images/edit.png')}
                style={styles.EditImg}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Image
              source={require('../assets/images/delete.png')}
              style={styles.DeleteImg}
            />
          </TouchableOpacity>
        </View>

        <View style={{left: 10, marginTop: 10}}>
          <Text style={{color: '#2a2a2a'}}>{item.address}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.MainContainer}>
      <View>
        <HeaderCommonComponentScreen text={'Manage Address'} />
      </View>

      <View style={styles.LocationView}>
        <Image
          source={require('../assets/images/location.png')}
          style={styles.LocationImg}
        />
        <Text>RT-MAIN(PORUR)</Text>
      </View>

      <View style={{alignSelf: 'flex-end', paddingHorizontal: 20}}>
        <TouchableOpacity onPress={handleAdd}>
          <Text style={{fontSize: 18, color: '#1e75c0'}}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={showAddressData.Message}
        renderItem={renderAddressItem}
        keyExtractor={item => item.id}
      />

      <View style={styles.BackButtonView}>
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

export default ManageAddressSettingsScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fafbfb',
  },
  LocationView: {
    flexDirection: 'row',
    marginTop: 120,
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
  BackButtonView: {
    width: '30%',
    left: 30,
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#676767',
    borderRadius: 15,
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
  HomeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  EditImg: {
    width: 15,
    height: 15,
    tintColor: '#b6d8fa',
  },
  DeleteImg: {
    width: 15,
    height: 15,
    tintColor: '#d83737',
  },
});
