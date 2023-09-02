import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const SearchTestLabScreen = ({navigation}: any) => {
  const handleCross = () => {
    navigation.navigate('Lab');
  };

  const data = [
    {testName: 'BLEEDING TIME', price: 'INR 75'},
    {testName: 'CLOTTING TIME', price: 'INR 75'},
    {testName: 'GFR Estimated', price: 'INR 0'},
    {testName: 'GNRH SIMULATION TEST(LHRH)', price: 'INR 5000'},
    {testName: 'PT (PROTHROMBIN TIME)', price: 'INR 250'},
  ];

  const renderItem = ({item}: any) => (
    <View style={styles.testItemContainer}>
      <Text style={styles.testName}>{item.testName}</Text>
      <Text style={styles.testPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addToCartButton}>
        <View style={styles.addToCartContainer}>
          <Image
            source={require('../assets/images/addCart.png')}
            style={styles.CartIcon}
          />
          <Text style={styles.addToCartText}>Add Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.MainContainer}>
      <View style={styles.AddMemberView}>
        <View>
          <Text style={styles.headerText}>Search Test</Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleCross}>
            <Image source={require('../assets/images/black_cross.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput style={styles.inputText} placeholderTextColor="#b9c5a0" />
        <Image
          source={require('../assets/images/addCart.png')}
          style={styles.CartIcon}
        />
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.testName}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
      />

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Total Cart Value INR 0</Text>
      </View>

      <TouchableOpacity>
        <View style={styles.SubmitButtonView}>
          <Text style={styles.ButtonText}>Proceed</Text>
        </View>
      </TouchableOpacity>

      <View style={{marginLeft: 50, marginBottom: 500}}>
        <Text style={{color: '#fd1a1b'}}>
          Note:*-Indicates Non Discounted Test
        </Text>
      </View>
    </View>
  );
};
export default SearchTestLabScreen;

const styles = StyleSheet.create({
  MainContainer: {
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
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
    shadowColor: '#d9dee7',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    elevation: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: 'black',
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    paddingVertical: 5,
  },
  CartIcon: {
    width: 25,
    height: 25,
    tintColor: 'black',
  },
  flatListContainer: {
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  testItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  testName: {
    width: '40%',
    color: '#686868',
  },
  testPrice: {
    width: '20%',
    fontWeight: 'bold',
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToCartText: {
    marginLeft: 8,
  },
  bottomTextContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  bottomText: {
    fontSize: 20,
    color: 'black',
  },
  SubmitButtonView: {
    width: '80%',
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#58afff',
    padding: 15,
    margin: 15,
  },
  ButtonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#bcc0c7',
    margin: 10,
    padding: 4,
    borderRadius: 5,
  },
});
