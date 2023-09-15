import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {Calendar} from 'react-native-calendars';
import {RadioButton} from 'react-native-paper';

const LabScreen = ({navigation}: any) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showChooseTestView, setShowChooseTestView] = useState(true);
  const [showPreferredOptionView, setShowPreferredOptionView] = useState(false);
  const [showChoosePatientView, setShowChoosePatientView] = useState(false);
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [voucherCode, setVoucherCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('online');

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);

      if (currentStep === 1) {
        setShowChooseTestView(false);
        setShowPreferredOptionView(true);
      } else if (currentStep === 2) {
        setShowPreferredOptionView(false);
        setShowChoosePatientView(true);
      } else if (currentStep === 3) {
        setShowChoosePatientView(false);
        setShowBookingDetails(true);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);

      if (currentStep === 2) {
        setShowChooseTestView(true);
        setShowPreferredOptionView(false);
      } else if (currentStep === 3) {
        setShowPreferredOptionView(true);
        setShowChoosePatientView(false);
      } else if (currentStep === 4) {
        setShowChoosePatientView(true);
        setShowBookingDetails(false);
      }
    }
  };

  const isBookingDetailsVisible = currentStep === 4;

  const handleButtonPress = () => {
    navigation.navigate('UploadDescription');
  };

  const handleSearch = () => {
    navigation.navigate('SearchTest');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelect = ({date}: any) => {
    const selectedDateObject = new Date(date.timestamp);
    const day = selectedDateObject.getDate().toString().padStart(2, '0');
    const month = (selectedDateObject.getMonth() + 1)
      .toString()
      .padStart(2, '0');
    const year = selectedDateObject.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    setSelectedDate(formattedDate);
    setShowCalendar(true);
  };

  return (
    <ScrollView style={styles.MainContainer}>
      {/* lab Test view */}
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.BookingText}>Lab Test</Text>
          <View style={styles.imageRow}>
            <Image
              source={require('../assets/images/alarm.png')}
              style={styles.image}
            />
            <Image
              source={require('../assets/images/bellwhite.png')}
              style={styles.image}
            />
            <TouchableOpacity onPress={handleProfile}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>RA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* location view */}
      <View style={styles.LocationView}>
        <Image
          source={require('../assets/images/location.png')}
          style={styles.LocationImg}
        />
        <Text>RT-MAIN(PORUR)</Text>
      </View>

      {/* stepper View */}
      <View style={styles.stepperContainer}>
        <View style={styles.stepContainer}>
          <TouchableOpacity
            style={[styles.step, currentStep >= 1 && styles.activeStep]}
            onPress={() => setCurrentStep(1)}>
            <Text
              style={[
                styles.stepText,
                currentStep === 1 && styles.activeStepText,
              ]}>
              1
            </Text>
          </TouchableOpacity>
          <Text style={styles.stepDescription}>Lab Test</Text>
        </View>

        <View style={styles.stepContainer}>
          <TouchableOpacity
            style={[styles.step, currentStep >= 2 && styles.activeStep]}
            onPress={() => setCurrentStep(2)}>
            <Text
              style={[
                styles.stepText,
                currentStep === 2 && styles.activeStepText,
              ]}>
              2
            </Text>
          </TouchableOpacity>
          <Text style={styles.stepDescription}>Book</Text>
        </View>

        <View style={styles.stepContainer}>
          <TouchableOpacity
            style={[styles.step, currentStep >= 3 && styles.activeStep]}
            onPress={() => setCurrentStep(3)}>
            <Text
              style={[
                styles.stepText,
                currentStep === 3 && styles.activeStepText,
              ]}>
              3
            </Text>
          </TouchableOpacity>
          <Text style={styles.stepDescription}>Patient info</Text>
        </View>

        <View style={styles.stepContainer}>
          <TouchableOpacity
            style={[styles.step, currentStep >= 4 && styles.activeStep]}
            onPress={() => setCurrentStep(4)}>
            <Text
              style={[
                styles.stepText,
                currentStep === 4 && styles.activeStepText,
              ]}>
              4
            </Text>
          </TouchableOpacity>
          <Text style={styles.stepDescription}>Payment</Text>
        </View>
      </View>

      {/* stepper 1 */}
      {showChooseTestView && (
        <View>
          <View style={styles.ChooseTestView}>
            <View>
              <Text style={{fontSize: 20}}>Choose test</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text
                  style={{
                    right: 20,
                    fontSize: 12,
                    marginTop: 5,
                    color: '#b9c5a0',
                  }}>
                  Cart value
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 20, color: '#3478c1'}}>INR 0</Text>
              </View>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={handleSearch}>
              <Image
                source={require('../assets/images/search.png')}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.inputText}
              placeholder="Select Test"
              placeholderTextColor="#b9c5a0"
            />
            <Image
              source={require('../assets/images/addCart.png')}
              style={styles.CartIcon}
            />
          </View>

          <View
            style={{
              marginTop: 30,
              width: '60%',
              alignSelf: 'flex-end',
              right: 30,
            }}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Image
                source={require('../assets/images/up_arrow.png')}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}>Upload Prescription</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.PackageOfferText}>Choose Package</Text>
          </View>

          <View style={styles.SquareCard}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 16,
              }}>
              <View>
                <Text>BONE PROFILE (MINI)</Text>
              </View>
              <View>
                <Text style={{color: '#3478c1', left: 60}}>INR 1</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/images/arrowDown.png')}
                    style={{tintColor: 'black', width: 15, height: 15}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 30,
              width: '30%',
              alignSelf: 'flex-end',
              right: 30,
            }}>
            <TouchableOpacity style={styles.buttons} onPress={handleNext}>
              <Text style={styles.buttonTexts}>Next</Text>
              <Image
                source={require('../assets/images/nextArrow.png')}
                style={styles.buttonImages}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* stepper 2 */}
      {showPreferredOptionView && (
        <View>
          <View style={styles.PreferredOptionView}>
            <Text style={{fontSize: 20}}>Preferred Option</Text>
          </View>

          <View>
            <SegmentedControlTab
              values={['Home', 'Walk IN']}
              selectedIndex={selectedIndex}
              onTabPress={index => setSelectedIndex(index)}
              tabsContainerStyle={styles.tabContainer}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}
              tabTextStyle={styles.tabTextStyle}
              activeTabTextStyle={styles.activeTabTextStyle}
            />
          </View>

          <View style={{marginTop: 15, marginLeft: 15}}>
            <Text style={{fontSize: 18, fontWeight: '300'}}>
              Choose date and time
            </Text>
          </View>

          <View style={styles.inputContainer1}>
            {/* <TextInput style={styles.inputText1} value={selectedDate} /> */}
            <TextInput
              style={styles.inputText1}
              value={selectedDate}
              editable={false}
            />
            <TouchableOpacity onPress={handleCalendarToggle}>
              <Image
                source={require('../assets/images/calender.png')}
                style={styles.CalenderIcon}
              />
            </TouchableOpacity>
          </View>

          {showCalendar && (
            <View style={styles.calendarContainer}>
              <Calendar
                onDayPress={handleDateSelect}
                markedDates={{[selectedDate]: {selected: true}}}
                theme={{
                  selectedDayBackgroundColor: 'blue',
                  selectedDayTextColor: 'white',
                  todayTextColor: '#005dab',
                  dotColor: 'blue',
                }}
              />
            </View>
          )}

          <View style={styles.BackNextButtonView}>
            <TouchableOpacity style={styles.backButton} onPress={handlePrev}>
              <Image
                source={require('../assets/images/backArrowBlack.png')}
                style={styles.buttonImagess}
              />
              <Text style={styles.buttonTexts}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.buttonTexts}>Next</Text>
              <Image
                source={require('../assets/images/nextArrow.png')}
                style={styles.buttonImagesss}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* stepper 3 */}
      {showChoosePatientView && (
        <View style={{backgroundColor: '#ffffff'}}>
          <View style={styles.ChoosePatientView}>
            <Text style={{fontSize: 20}}>Choose Patient</Text>
            <TouchableOpacity>
              <Text style={{color: '#0f97f5', fontSize: 20}}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.ImgView}>
              <Image
                source={require('../assets/images/human.png')}
                style={styles.ImgStyle}
              />
              <Text style={{left: 10, alignSelf: 'center'}}>Self</Text>
            </View>

            <View style={styles.ImgView}>
              <Image
                source={require('../assets/images/human.png')}
                style={styles.ImgStyle}
              />
              <Text style={{left: 10, alignSelf: 'center'}}>Father</Text>
            </View>

            <View style={styles.ImgView}>
              <Image
                source={require('../assets/images/human.png')}
                style={styles.ImgStyle}
              />
              <Text style={{left: 10, alignSelf: 'center'}}>Mother</Text>
            </View>
          </View>

          <View style={styles.ChooseAddressView}>
            <Text style={{fontSize: 20}}>Choose Address</Text>
            <TouchableOpacity>
              <Text style={{color: '#0f97f5', fontSize: 20}}>Add</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.AddressView}>
            <Text>Home</Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Text style={{flex: 1}}>
                2/21, Rajeswari Nagar, Porur, Chennai, Tamil Nadu, 60016
              </Text>
              <TouchableOpacity>
                <View style={styles.DotView} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.BackNextButtonView}>
            <TouchableOpacity style={styles.backButton} onPress={handlePrev}>
              <Image
                source={require('../assets/images/backArrowBlack.png')}
                style={styles.buttonImagess}
              />
              <Text style={styles.buttonTexts}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.buttonTexts}>Next</Text>
              <Image
                source={require('../assets/images/nextArrow.png')}
                style={styles.buttonImagesss}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* stepper 4 */}
      {showBookingDetails && isBookingDetailsVisible && (
        <View style={{backgroundColor: '#fbfbfb'}}>
          <View style={{marginTop: 15, paddingHorizontal: 10}}>
            <Text style={{fontSize: 18}}>Booking Details</Text>
          </View>
          <View style={styles.AddressViewDetails}>
            <Text style={{color: '#676767', fontWeight: 'bold'}}>
              MR.RAMANI
            </Text>
            <Text style={{marginTop: 10, color: '#6a6a6a'}}>
              2/21, Rajeswari Nagar, Porur, Chennai, Tamil Nadu, 60016
            </Text>
            <Text style={{marginTop: 10, color: '#6a6a6a'}}>7358722588</Text>
          </View>

          <View style={styles.HomeView}>
            <Text style={{color: '#676767'}}>HOME</Text>
            <View style={{left: 50}}>
              <Text style={{color: '#676767'}}>11/08/2023</Text>
            </View>
            <Text style={{color: '#676767'}}>12.00PM</Text>
          </View>

          <View style={{paddingHorizontal: 10, marginTop: 20}}>
            <Text style={{fontSize: 18, color: '#9d9d9d'}}>Voucher Code</Text>
          </View>

          <View style={styles.inputContainer2}>
            <TextInput
              style={styles.input}
              placeholder="Enter Voucher Code"
              placeholderTextColor={'#7a7a7a'}
              onChangeText={setVoucherCode}
              value={voucherCode}
            />
            <View style={styles.ChooseView}>
              <TouchableOpacity>
                <Text style={{color: 'white'}}>Choose</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{paddingHorizontal: 10, marginTop: 20}}>
            <Text style={{fontSize: 18, color: '#9d9d9d'}}>Payment Mode</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View style={styles.OnlinePaymentView}>
              <TouchableOpacity onPress={() => setPaymentMethod('online')}>
                <View
                  style={[
                    styles.radioButtonContainer,
                    {
                      backgroundColor:
                        paymentMethod === 'online' ? 'red' : 'transparent',
                    },
                  ]}>
                  <RadioButton
                    value="online"
                    status={
                      paymentMethod === 'online' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setPaymentMethod('online')}
                    color="yellow"
                  />
                </View>
              </TouchableOpacity>
              <Text style={{left: 10}}>Online Payment</Text>
            </View>

            <View style={styles.OnlinePaymentView}>
              <TouchableOpacity onPress={() => setPaymentMethod('cash')}>
                <View
                  style={[
                    styles.radioButtonContainer,
                    {
                      backgroundColor:
                        paymentMethod === 'cash' ? 'yellow' : 'transparent',
                    },
                  ]}>
                  <RadioButton
                    value="cash"
                    status={paymentMethod === 'cash' ? 'checked' : 'unchecked'}
                    onPress={() => setPaymentMethod('cash')}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
              <Text style={{left: 10}}>Cash Payment</Text>
            </View>
          </View>

          <View style={styles.BackNextButtonView}>
            <TouchableOpacity style={styles.backButton} onPress={handlePrev}>
              <Image
                source={require('../assets/images/backArrowBlack.png')}
                style={styles.buttonImagess}
              />
              <Text style={styles.buttonTexts}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.buttonTexts}>Next</Text>
              <Image
                source={require('../assets/images/nextArrow.png')}
                style={styles.buttonImagesss}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default LabScreen;

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#fafbfb',
    flex: 1,
  },
  container: {
    height: 100,
    backgroundColor: 'orange',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 30,
  },
  BookingText: {
    fontSize: 20,
    color: 'white',
    marginTop: 5,
  },
  imageRow: {
    flexDirection: 'row',
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  LocationView: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'flex-end',
    right: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  LocationImg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  stepperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    padding: 20,
    backgroundColor: '#f3f3f3',
  },
  stepContainer: {
    alignItems: 'center',
  },
  step: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.3,
  },
  stepText: {
    fontSize: 16,
  },
  activeStep: {
    backgroundColor: '#666666',
  },
  activeStepText: {
    color: 'white',
  },
  stepDescription: {
    marginTop: 5,
  },

  ChooseTestView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#eaeaea',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 20,
    borderWidth: 0.3,
    borderColor: 'black',
    marginTop: 15,
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
  inputText1: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    padding: 5,
  },
  CartIcon: {
    width: 25,
    height: 25,
    tintColor: 'black',
    right: 30,
  },
  CalenderIcon: {
    width: 30,
    height: 30,
    tintColor: 'black',
    right: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8ecf2',
    borderRadius: 30,
    padding: 20,
  },
  buttonImage: {
    width: 24,
    height: 24,
    marginRight: 8,
    tintColor: '#2e5b9e',
  },
  buttonText: {
    color: '#2c579f',
    fontSize: 16,
  },
  PackageOfferText: {
    fontSize: 20,
    marginLeft: 20,
    color: 'black',
    marginTop: 30,
  },
  SquareCard: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: 20,
    borderColor: '#eaeaea',
    borderRadius: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#676767',
    borderRadius: 20,
    padding: 15,
  },
  buttonImages: {
    width: 22,
    height: 22,
    tintColor: 'white',
  },
  buttonImagess: {
    width: 16,
    height: 16,
    tintColor: 'white',
    right: 15,
  },
  buttonImagesss: {
    width: 16,
    height: 16,
    tintColor: 'white',
    left: 15,
  },
  buttonTexts: {
    color: 'white',
    fontSize: 20,
  },
  PreferredOptionView: {
    left: 20,
    marginTop: 20,
  },
  tabContainer: {
    height: 45,
    width: 200,
    marginTop: 15,
    borderWidth: 0.8,
    borderRadius: 30,
    overflow: 'hidden',
    borderColor: 'grey',
    marginLeft: 15,
  },
  tabStyle: {
    borderWidth: 0,
    borderEndWidth: 0,
  },
  activeTabStyle: {
    backgroundColor: '#005dab',
  },
  tabTextStyle: {
    color: 'black',
    fontWeight: 'normal',
  },
  activeTabTextStyle: {
    color: 'white',

    fontWeight: 'bold',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 2,
  },
  circleText: {
    color: 'black',
    fontSize: 10,
  },
  calendarContainer: {
    marginTop: 10,
    padding: 5,
  },
  nextButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#676767',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#676767',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },

  //choose Patient stepper 3
  ChoosePatientView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  ImgView: {
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 30,
    padding: 10,
  },
  ImgStyle: {
    backgroundColor: '#d0555e',
    borderRadius: 50,
    width: 30,
    height: 30,
  },
  ChooseAddressView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  AddressView: {
    backgroundColor: '#f7f7f7',
    padding: 20,
    paddingVertical: 30,
    margin: 10,
    marginTop: 20,
  },
  BackNextButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 200,
  },
  DotView: {
    backgroundColor: 'white',
    width: 15,
    height: 15,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#acacac',
  },

  //Booking Details stepper 4
  AddressViewDetails: {
    backgroundColor: '#f7f7f7',
    padding: 20,
    paddingVertical: 20,
    margin: 10,
    marginTop: 20,
  },
  HomeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    padding: 15,
    backgroundColor: 'white',
    margin: 10,
    marginTop: -15,
  },
  inputContainer2: {
    flexDirection: 'row',
    backgroundColor: '#c5c5c5',
    borderRadius: 50,
    marginHorizontal: 7,
    marginTop: 20,
  },
  input: {
    padding: 20,
  },
  ChooseView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#58afff',
    paddingHorizontal: 20,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 310,
  },
  OnlinePaymentView: {
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 150,
    borderRadius: 10,
    borderColor: '#cdcdcd',
  },
  radioButtonContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 6,
    backgroundColor: 'white',
  },
  DotViewOnline: {
    backgroundColor: 'white',
    width: 15,
    height: 15,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: '#58afff',
  },
});
