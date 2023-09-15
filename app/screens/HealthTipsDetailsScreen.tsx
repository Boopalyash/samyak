import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const HealthTipsDetailScreen = ({route, navigation}: any) => {
  const {healthTipData} = route.params;

  const handleCross = () => {
    navigation.navigate('DashBoard');
  };

  return (
    <View style={styles.container}>
      <View
        style={{alignSelf: 'flex-end', marginTop: 50, paddingHorizontal: 20}}>
        <TouchableOpacity onPress={handleCross}>
          <Image source={require('../assets/images/black_cross.png')} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.description}>{healthTipData.Health_Desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  description: {
    fontSize: 16,
  },
});

export default HealthTipsDetailScreen;
