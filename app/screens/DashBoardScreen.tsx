import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSamyakPromotionPostMutation} from '../redux/service/DashBoardPromotionService';
import {useSamyakHealthPostMutation} from '../redux/service/DashBoardHealthTipsPostService';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/Store';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSamyakDefaultBranchPostMutation} from '../redux/service/DefaultBranchService';
import {useSamyakLabChooseBonePostMutation} from '../redux/service/LabChoosePackageBone';
import {useSamyakSpecialPackagePostMutation} from '../redux/service/SpecialPackageService';

const DashBoardScreen = ({navigation}: any) => {
  const [showPackageOffer, setShowPackageOffer] = useState(false);
  const [showHealthTips, setShowHealthTips] = useState(false);
  const [showPromotion, setShowPromotion] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedbranch, setSelectedBranch] = useState('RT-MAIN(PORUR)');
  const [setBoneData] = useState([]);
  const [setSpecialPackage] = useState([]);
  const [isDataVisible, setIsDataVisible] = useState(false);

  // to display the branch
  const [defaultManageBranchAPIReq, defaultManageBranchAPIRes] =
    useSamyakDefaultBranchPostMutation();

  // to display promotion
  const [promotionAPIReq] = useSamyakPromotionPostMutation();

  // to display health
  const [healthAPIReq] = useSamyakHealthPostMutation();

  // to display bone profile
  const [boneAPIReq, boneAPIRes] = useSamyakLabChooseBonePostMutation();
  console.log('boneAPIRes', boneAPIRes);

  //api for special package
  const [specialPackageAPIReq, specialPackageAPIRes] =
    useSamyakSpecialPackagePostMutation();

  // useEffect for promotion
  useEffect(() => {
    const promotionObj = {
      userName: '7358722588',
      password: 'Ram@12345678',
    };
    promotionAPIReq(promotionObj);
  }, []);

  const promotionData = useSelector(
    (state: RootState) => state.promotion.samyakPromotionDetailsPost,
  );

  // useEffect for health
  useEffect(() => {
    const healthObj = {
      userName: '7358722588',
      password: 'Ram@12345678',
    };
    healthAPIReq(healthObj);
  }, []);

  const healthData = useSelector(
    (state: RootState) => state.healthTips.samyakHealthDetailsPost,
  );

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('selectedBranch')
        .then(value => {
          if (value) {
            defaultManageBranchAPIReq({
              userName: '7358722588',
              Default_Firm_No: value,
            });
          }
        })
        .catch(error => console.error('Error ', error));
      return () => {
        console.log('Screen is unfocused');
      };
    }, []),
  );

  useEffect(() => {
    if (defaultManageBranchAPIRes?.isSuccess) {
      setSelectedBranch(
        defaultManageBranchAPIRes?.data?.Message[0]?.Branch_Name,
      );
    }
  }, [defaultManageBranchAPIRes]);

  // useEffect for special package
  useEffect(() => {
    const specialPackageObj = {
      userName: '7358722588',
    };
    specialPackageAPIReq(specialPackageObj)
      .unwrap()
      .then(response => {
        if (response.SuccessFlag === 'true') {
          setSpecialPackage(response.Message);
        }
      });
  }, []);

  // useEffect for bone profile
  useEffect(() => {
    const boneObj = {
      userName: '7358722588',
      Service_Code: 'P00360',
    };
    boneAPIReq(boneObj)
      .unwrap()
      .then(response => {
        if (response.SuccessFlag === 'true') {
          setBoneData(response.Message);
        }
      });
  }, []);

  // default show the package offer screen
  useEffect(() => {
    setShowPackageOffer(true);
    setShowPromotion(false);
    setShowHealthTips(false);
  }, []);

  const handleArrowDownPress = () => {
    setIsDataVisible(prevState => !prevState);
  };

  const data = [
    {
      id: 'packageOffer',
      title: 'Package Offer',
      image: require('../assets/images/offerBlack.png'),
      state: showPackageOffer,
    },
    {
      id: 'promotion',
      title: 'Promotion',
      image: require('../assets/images/promotionBlack.png'),
      state: showPromotion,
    },
    {
      id: 'healthTips',
      title: 'Health Tips',
      image: require('../assets/images/tipsBlack.png'),
      state: showHealthTips,
    },
  ];

  const renderPromotionCard = ({item}: any) => (
    <LinearGradient
      colors={['#002d87', '#000000']}
      start={{x: 0, y: 1}}
      end={{x: 10, y: 1}}
      style={styles.SquareCard2}>
      <View style={styles.CouponCodeView}>
        <View>
          <View style={{marginTop: 15}}>
            <Text style={styles.CouponCodeText}>{item.Coupon_Code}</Text>
          </View>
          <View style={{marginTop: 8}}>
            <Text style={styles.PercentageText}>{item.Offer_Percentage}%</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.CopyCodeView}>
            <Text
              style={{
                color: '#824ecf',
              }}>
              Copy Code
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10, alignSelf: 'center'}}>
        <Text style={{color: '#bc90cd', fontWeight: 600}}>
          {item.Coupon_Heading}
        </Text>
      </View>
      <View style={styles.ValidView}>
        <Text style={{color: '#bc90cd', fontWeight: 600}}>
          Valid till {item.Validity_ToDate}
        </Text>
      </View>
    </LinearGradient>
  );

  const renderHealthTipsItem = ({item}: any) => (
    <LinearGradient
      colors={['#002d87', '#000000']}
      start={{x: 0, y: 1}}
      end={{x: 10, y: 1}}
      style={styles.SquareCard1}>
      <View style={{marginTop: 15, left: 10}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
          {item.Updated_Date}
        </Text>
      </View>
      <View style={{marginTop: 10, left: 10}}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
          {item.Health_Title}
        </Text>
      </View>
      <View style={{alignSelf: 'flex-end', paddingHorizontal: 15}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HealthTips', {healthTipData: item});
          }}>
          <Text style={{color: 'white', fontWeight: '900'}}>Read More</Text>
        </TouchableOpacity>
        {showFullDescription && (
          <Text style={{color: 'white'}}>{item.Health_Desc}</Text>
        )}
      </View>
    </LinearGradient>
  );

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.BookingText}>Dashboard</Text>
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

        <View style={styles.separator} />

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.OfferImgView}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setShowPackageOffer(item.id === 'packageOffer');
                setShowPromotion(item.id === 'promotion');
                setShowHealthTips(item.id === 'healthTips');
              }}
              style={styles.offerCardContainer}>
              <View
                style={[
                  styles.offerCard,
                  item.state && styles.selectedOfferCard,
                ]}>
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.image1} />
                </View>
                <Text style={styles.offerCardTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.cardContainer}>
          {!showPromotion && (
            <View style={styles.LocationView}>
              <Image
                source={require('../assets/images/location.png')}
                style={styles.LocationImg}
              />
              <Text>{selectedbranch}</Text>
            </View>
          )}

          {showPackageOffer && (
            <View>
              <View style={{left: 20}}>
                <Text style={styles.PackageOfferText}>Package Offer</Text>
              </View>

              <View style={styles.SquareCard}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 16,
                  }}>
                  <Text>
                    {specialPackageAPIRes?.data?.Message[0]?.Service_Name}
                  </Text>
                  <Text style={{color: '#3478c1', left: 60}}>INR 1</Text>
                  <TouchableOpacity onPress={handleArrowDownPress}>
                    <Image
                      source={require('../assets/images/arrowDown.png')}
                      style={{tintColor: 'black', width: 15, height: 15}}
                    />
                  </TouchableOpacity>
                </View>
                {isDataVisible && (
                  <View style={{left: 20}}>
                    <TouchableOpacity>
                      <View
                        style={{
                          backgroundColor: 'blue',
                          padding: 5,
                          width: 200,
                          borderRadius: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 18,
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          Book Package
                        </Text>
                      </View>
                    </TouchableOpacity>
                    {boneAPIRes?.isSuccess &&
                      boneAPIRes?.data?.Code === 200 &&
                      boneAPIRes?.data?.Message &&
                      boneAPIRes?.data?.Message[0]?.Service_Detail?.map(
                        item => (
                          <Text
                            style={{marginTop: 10, fontSize: 14}}
                            key={item.Test_Code}>
                            {item.Test_Name}
                          </Text>
                        ),
                      )}
                  </View>
                )}
              </View>
            </View>
          )}

          {showPromotion && (
            <View>
              <View style={{paddingHorizontal: 20, marginTop: 10}}>
                <Text style={{fontSize: 17, color: '#808080'}}>
                  Promotions are based on the user and based on their usability.
                </Text>
              </View>

              <FlatList data={promotionData} renderItem={renderPromotionCard} />
            </View>
          )}

          {showHealthTips && (
            <View>
              <View style={{left: 20}}>
                <Text style={styles.HealthTipsText}>Health Tips</Text>
              </View>

              <FlatList
                data={healthData}
                renderItem={renderHealthTipsItem}
                keyExtractor={item => item}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    backgroundColor: '#f9a929',
    padding: 16,
    flexGrow: 1,
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
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: 5,
  },

  image1: {
    width: 25,
    height: 25,
    tintColor: 'black',
    alignSelf: 'center',
  },
  cardContainer: {
    position: 'absolute',
    top: 140,
    left: 0,
    right: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fafbfb',
  },
  LocationView: {
    flexDirection: 'row',
    marginTop: 20,
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
  PackageOfferText: {
    fontSize: 22,
    color: '#808080',
  },
  HealthTipsText: {
    fontSize: 22,
    color: '#808080',
  },
  SquareCard: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 1000,
  },
  SquareCard1: {
    width: '90%',
    height: 150,
    backgroundColor: '#002d87',
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 8,
    marginBottom: 70,
  },
  SquareCard2: {
    width: '90%',
    height: 150,
    backgroundColor: '#002d87',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
  },
  separator: {
    height: 2,
    backgroundColor: '#eca12c',
    top: 50,
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
  OfferImgView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 80,
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  offerCard: {
    alignItems: 'center',
  },

  selectedOfferCard: {
    // backgroundColor: '#d58303',
  },
  offerCardContainer: {
    marginHorizontal: 10,
  },
  offerCardTitle: {
    marginTop: 10,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  CouponCodeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  CouponCodeText: {
    color: '#bc90cd',
    fontSize: 18,
    fontWeight: '600',
  },
  PercentageText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
  },
  CopyCodeView: {
    marginTop: 15,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  ValidView: {
    marginTop: 15,
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
  },
});

export default DashBoardScreen;
