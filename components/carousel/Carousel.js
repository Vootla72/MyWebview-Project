import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const DATA = [
  { id: '1', text: 'Slide 1', color: '#FF5733' },
  { id: '2', text: 'Slide 2', color: '#33FF57' },
  { id: '3', text: 'Slide 3', color: '#3357FF' },
];

export const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleDotPress = (index) => {
    flatListRef.current?.scrollToOffset({ offset: index * width, animated: true });
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={[styles.slide, { backgroundColor: item.color }]}> 
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        getItemLayout={(data, index) => (
          { length: width, offset: width * index, index }
        )}
        initialScrollIndex={currentIndex}
      />
      <View style={styles.pagination}>
        {DATA.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
            <View style={[
              styles.dot,
              { backgroundColor: index === currentIndex ? '#000' : '#ccc' }
            ]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  slide: { width, height: 250, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  pagination: { flexDirection: 'row', position: 'absolute', bottom: 20 },
  dot: { width: 10, height: 10, borderRadius: 5, marginHorizontal: 5 },
});