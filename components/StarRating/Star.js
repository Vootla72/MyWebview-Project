import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

export const Star = ({ filled, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View
        style={[
          styles.star,
          filled && styles.starFilled, // Apply filled style if `filled` is true
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  star: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    backgroundColor: '#ccc',
    borderRadius: 20, // Makes it a circle (optional)
    borderWidth: 2,
    borderColor: '#999',
  },
  starFilled: {
    backgroundColor: '#FFD700', // Gold color for filled stars
    borderColor: '#FFA500', // Orange border for filled stars
  },
});

