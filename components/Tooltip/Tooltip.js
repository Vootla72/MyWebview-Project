import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        {children}
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>{text}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  tooltip: {
    position: 'absolute',
    top: 30, // Adjust this value to position the tooltip correctly
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  tooltipText: {
    color: 'white',
    fontSize: 14,
  },
});

