import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const WalletScreen = ({navigation}: any) => {
  const handleLeftChevron = () => {
    navigation.navigate('Booking');
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={handleLeftChevron}>
        <Image
          source={require('../assets/images/left_chevron.png')}
          style={styles.Left_chevron}
        />
      </TouchableOpacity>

      <View style={styles.PaypalContainer}>
        <View style={styles.RowContainer}>
          <Image
            source={require('../assets/images/paypal.png')}
            style={styles.PaypalImg}
          />
          <View style={styles.TextColumn}>
            <Text style={styles.PayText}>pay</Text>
            <Text style={styles.AmountText}>$ 400.00</Text>
          </View>
          <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>View Details</Text>
            <Image
              source={require('../assets/images/addCart.png')}
              style={styles.ButtonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.CardContainer}>
        <Text style={styles.PaymentOptiontext}>PAYMENT OPTIONS</Text>

        <View style={styles.CreditCardView}>
          <View style={styles.CreditCardRowView}>
            <Image
              source={require('../assets/images/creditCard.png')}
              style={styles.CreditCardImg}
            />
            <View style={styles.TextColumn}>
              <Text style={styles.CreditText1}>Cards (credit/debit)</Text>
              <Text style={styles.DebitText1}>
                pay using credit or debit card
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/nextArrow.png')}
                style={styles.NextArrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.CreditCardView}>
          <View style={styles.CreditCardRowView}>
            <Image
              source={require('../assets/images/netBanking.png')}
              style={styles.CreditCardImg}
            />
            <View style={styles.TextColumn}>
              <Text style={styles.CreditText2}>Net Banking</Text>
              <Text style={styles.DebitText2}>
                pay using any of 40+ supported banks
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/nextArrow.png')}
                style={styles.NextArrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.CreditCardView}>
          <View style={styles.CreditCardRowView}>
            <Image
              source={require('../assets/images/upi.png')}
              style={styles.CreditCardImg}
            />
            <View style={styles.TextColumn}>
              <Text style={styles.CreditText3}>UPI</Text>
              <Text style={styles.DebitText3}>
                pay using your UPI or VPA from any bank
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/nextArrow.png')}
                style={styles.NextArrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.CreditCardView}>
          <View style={styles.CreditCardRowView}>
            <Image
              source={require('../assets/images/wallet.png')}
              style={styles.CreditCardImg}
            />
            <View style={styles.TextColumn}>
              <Text style={styles.CreditText4}>Wallets</Text>
              <Text style={styles.DebitText4}>
                phonePe,Paytm,YES PAY Wallet and more
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/nextArrow.png')}
                style={styles.NextArrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default WalletScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#25272c',
  },
  Left_chevron: {
    width: 10,
    height: 10,
    tintColor: 'white',
    top: 60,
    left: 35,
  },
  PaypalContainer: {
    marginTop: 100,
    left: 30,
  },
  RowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextColumn: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  PayText: {
    color: 'white',
    fontSize: 16,
  },
  AmountText: {
    color: 'white',
    fontSize: 30,
  },
  PaypalImg: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  ButtonContainer: {
    flexDirection: 'row',
    backgroundColor: '#515256',
    borderRadius: 6,
    padding: 6,
    marginLeft: 50,
  },
  ButtonIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
    tintColor: 'white',
  },
  ButtonText: {
    color: 'white',
    fontSize: 14,
  },
  CardContainer: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
  },
  PaymentOptiontext: {
    fontSize: 14,
    color: '#8f9dbd',
  },
  CreditCardView: {
    marginTop: 30,
  },
  CreditCardRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  CreditCardImg: {
    width: 30,
    height: 30,
  },
  CreditText: {
    color: 'black',
    fontSize: 20,
  },
  DebitText: {
    color: '#8f9dbd',
    fontSize: 14,
    marginTop: 5,
  },
  NextArrowIcon: {
    tintColor: '#c7c8cb',
    width: 16,
    height: 16,
  },
  CreditText1: {
    color: 'black',
    fontSize: 20,
    right: 40,
  },
  DebitText1: {
    color: '#8f9dbd',
    fontSize: 14,
    marginTop: 5,
    right: 40,
  },
  CreditText2: {
    color: 'black',
    fontSize: 20,
    right: 10,
  },
  DebitText2: {
    color: '#8f9dbd',
    fontSize: 14,
    marginTop: 5,
    right: 10,
  },
  CreditText3: {
    color: 'black',
    fontSize: 20,
    right: 2,
  },
  DebitText3: {
    color: '#8f9dbd',
    fontSize: 14,
    marginTop: 5,
    right: 2,
  },
  CreditText4: {
    color: 'black',
    fontSize: 20,
    right: 2,
  },
  DebitText4: {
    color: '#8f9dbd',
    fontSize: 14,
    marginTop: 5,
    right: 2,
  },
});
