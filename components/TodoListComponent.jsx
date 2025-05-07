// create a todo list using useREDUCER with typescript

// add , delete

import React, { useReducer, useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

// export type TDataType = "add" | "delete";
// export type TData = {
//   id: string;
//   value: string;
// };
// export type TActionType = {
//   data: TData;
// };

export const TodoList = () => {
  const reducer = (type, action) => {
    switch (type) {
      case "add":
        return [...todos, action.data.value];

      case "delete":
        const deletedTodos = todos.filter((ele) => ele.id !== action.data.id);
        return [deletedTodos];
    }
  };

  const [inputVal, setInputValue] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = (id) => {
    dispatch("add", { data: { id, inputVal } });
  };

  const handleDelete = (id) => {
    dispatch("delete", { data: { id, inputVal } });
  };

  const handleRender = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text>{item.value}</Text>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          Delete
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <input type="text" onChange={handleChangeHandler} value={inputVal} />
      <TouchableOpacity onPress={handleAdd}>Add Todo</TouchableOpacity>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={handleRender}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
