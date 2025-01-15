import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type OnboardingProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Onboarding'>;
};

const { width: screenWidth } = Dimensions.get('window');

const onboardingData = [
  {
    title: 'Welcome to Bhook',
    description:
      'Food delivery app that helps you get the best dishes quickly and in time from your nearest restaurant.',
    image: require('../../assets/img/onboarding1.png'),
  },
  {
    title: 'Enjoy fast delivery',
    description:
      'We offer 45 minutes delivery guarantee or the food will be delivered for free.',
    image: require('../../assets/img/onboarding2.png'),
  },
  {
    title: 'Order best dishes',
    description:
      'Your order will be immediately collected and sent by our courier.',
    image: require('../../assets/img/onboarding3.png'),
  },
];

const Onboarding: React.FC<OnboardingProps> = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselRef = useRef<Carousel<any>>(null);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  const handleNext = () => {
    if (activeSlide < onboardingData.length - 1) {
      carouselRef.current?.snapToNext(); 
    } else {
      navigation.replace('Login');
    }
  };

  const handleSkip = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={onboardingData}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.9}
        loop={false}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <View style={styles.footer}>
        {activeSlide !== onboardingData.length - 1 ? (
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.buttonText}>
            {activeSlide === onboardingData.length - 1 ? 'Continue' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '80%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  skipButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  nextButton: {
    backgroundColor: '#FF7F50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Onboarding;