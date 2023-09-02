import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TextInput, Card} from 'react-native-paper';
import HeaderCommonComponentScreen from '../components/HeaderCommonComponent';
import {useSamyakManageBranchPostMutation} from '../redux/service/ManageBranchPostService';

const ManageBranchSettingScreen = ({navigation}: any) => {
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [branchData, setBranchData] = useState([]);

  const [manageBranchAPIReq] = useSamyakManageBranchPostMutation();

  useEffect(() => {
    const manageBranchObj = {
      userName: '7358722588',
    };

    manageBranchAPIReq(manageBranchObj)
      .unwrap()
      .then(response => {
        if (response.SuccessFlag === 'true') {
          setBranchData(response.Message);
        }
      });
  }, []);

  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handleOptionSelect = (option: string, index: number) => {
    setInputValue(option);
    setSelectedOptionIndex(index);
    closeDropdown();
  };

  const handleArrowImagePress = () => {
    setShowOptions(!showOptions);
    openDropdown();
  };

  const handleButtonPresss = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.MainContainer}>
      <View>
        <HeaderCommonComponentScreen text={'Manage Branch'} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.selectTextContainer}>
          <Text style={styles.selectText}>Select Branch</Text>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputText}
            value={inputValue}
            onChangeText={text => setInputValue(text)}
            mode="outlined"
            onFocus={openDropdown}
            theme={{
              colors: {
                primary: 'black',
              },
            }}
          />
          <TouchableOpacity onPress={handleArrowImagePress}>
            <Image
              source={require('../assets/images/downArrow.png')}
              style={styles.arrowImage}
            />
          </TouchableOpacity>
        </View>
        {dropdownVisible && (
          <View style={styles.dropdownContainer}>
            <Card elevation={4} style={styles.card}>
              <FlatList
                data={branchData}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => handleOptionSelect(item.Branch_Name, index)}
                    style={[
                      styles.option,
                      selectedOptionIndex === index && styles.selectedOption,
                    ]}>
                    <Text>{item.Branch_Name}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.Firm_No}
              />
            </Card>
          </View>
        )}
      </View>

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

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#f2f6fd',
  },
  selectedOption: {
    backgroundColor: '#E0E0E0',
    padding: 10,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
    height: 50,
  },
  arrowImage: {
    width: 12,
    height: 12,
    right: 30,
    tintColor: '#9e9e9e',
  },
  contentContainer: {
    marginLeft: 20,
    marginTop: 130,
  },
  selectTextContainer: {
    marginBottom: 10,
  },
  selectText: {
    fontSize: 18,
    color: '#747577',
  },
  option: {
    padding: 20,
    borderBottomColor: '#747577',
  },
  dropdownContainer: {
    alignSelf: 'center',
    width: '90%',
    marginTop: 10,
    right: 8,
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
  scrollableList: {
    borderTopWidth: 1,
    borderTopColor: '#747577',
    paddingHorizontal: 10,
  },
  card: {
    maxHeight: 280,
  },
});

export default ManageBranchSettingScreen;
