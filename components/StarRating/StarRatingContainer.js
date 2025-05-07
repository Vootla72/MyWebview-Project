import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {StarRating} from './StarRating';

export const StarRatingContainer = () => {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate this product:</Text>
      <StarRating rating={rating} onRate={(rate) => setRating(rate)} />
      <Text style={styles.ratingText}>You rated: {rating} stars</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  ratingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

