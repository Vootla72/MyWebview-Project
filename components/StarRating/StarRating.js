import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Star} from './Star';

export const StarRating = ({ maxStars = 5, rating = 0, onRate }) => {
  return (
    <View style={styles.starContainer}>
      {Array.from({ length: maxStars }, (_, index) => (
        <Star
          key={index}
          filled={index < rating} // Determine if the star should be filled(*********************)
          onPress={() => onRate(index + 1)} // Pass the selected rating to the parent
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
  },
});

