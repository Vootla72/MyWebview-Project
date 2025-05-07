import React, {createContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CommentBoxContainer } from './commentBox/CommentBoxContainer';

export default function App() {


  return (
    <CommentBoxContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});



