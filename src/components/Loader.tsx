import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type LoaderProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Loader'>;
};

const Loader: React.FC<LoaderProps> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/img/loader.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6600',
  },
  image: {
    width: 200,
    height: 400,
    resizeMode: 'contain',
  },
});

export default Loader;