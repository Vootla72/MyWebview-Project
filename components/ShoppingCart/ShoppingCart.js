import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const products = [
  { id: "1", name: "Apple", price: 2 },
  { id: "2", name: "Banana", price: 1 },
  { id: "3", name: "Orange", price: 3 },
];

export const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
        // check if item exists
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        // if exists.. then map each itemm..
        //if the current element is wt we changed.. then update the quantity else return as it is
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // if its new item.. then append it
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              {item.name} - ${item.price}
            </Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />

      <Text style={styles.header}>Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              {item.name} x {item.quantity} - ${item.price * item.quantity}
            </Text>
            <Button title="-" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />

      <Text style={styles.total}>Total: ${getTotal()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginVertical: 10 },
  item: { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 },
  total: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
});

