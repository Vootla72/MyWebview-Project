// You will be given a number, and need to prepare N X N boxes on the screen,
//  clicking on it should show a blue colour.
//  While Preparing we need to create a single box first then we need to build the N X N Box grid.

import React from "react";
import { StyleSheet, View } from "react-native";
import { GridComponent } from "./GridComponent";

export const GridContainer = () => {
  const GridLength = 5;

  return (
    <View style={styles.container}>
      {Array.from({ length: GridLength }, (_, rowIndex) => (
        <View key={rowIndex} style={styles.columnStyle}>
          {Array.from({ length: GridLength }, (_, colIndex) => (
            <GridComponent key={`${colIndex}${rowIndex}`} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },

  columnStyle: {
    flexDirection: "row",
  },
});
