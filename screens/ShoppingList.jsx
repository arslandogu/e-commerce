import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./shoppingList.style";
import { Ionicons } from "@expo/vector-icons";
import Cart from "../components/cart/Cart";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { COLORS, SIZES } from "../constants";
import cartStore from "../store/cartStore";
const ShoppingList = (navigation) => {
  navigation = useNavigation();
  let isLoading;
  const { shoppingCart } = cartStore();
  console.log("Shopping cart: "+ shoppingCart);
  if (shoppingCart.lenght > 0) {
    for (let i = 0; i < shoppingCart.length; i++) {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons size={28} name="chevron-back-circle-outline" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Cart</Text>
            <TouchableOpacity>
              <Ionicons name="trash-bin-outline" size={28} />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContainer}>

              <Cart item={shoppingCart[i]} />

          </View>
          <View style={styles.footerContainer}>
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  fontFamily: "regular",
                  fontSize: SIZES.large,
                  color: COLORS.white,
                }}
              >
                Total amount
              </Text>
              <Text
                style={{
                  fontFamily: "bold",
                  fontSize: SIZES.medium + 2,
                  color: COLORS.white,
                }}
              >
                $790
              </Text>
            </View>
            <View>
              <Button
                titleStyle={{ color: COLORS.black }}
                buttonStyle={styles.button}
                title={"Buy now"}
              />
            </View>
          </View>
        </SafeAreaView>
      );
    }
  } else {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons size={28} name="chevron-back-circle-outline" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Cart</Text>
            <TouchableOpacity>
              <Ionicons name="trash-bin-outline" size={28} />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyContainer}>

              <Text style={{fontSize:SIZES.large,fontFamily:'semibold',color:COLORS.gray2}}>Cart is empty</Text>

          </View>
        <View style={styles.footerContainer}>
        <View>
              <Text
                style={{
                  fontFamily: "regular",
                  fontSize: SIZES.large,
                color: COLORS.white,
                }}
              >
                Total amount
              </Text>
              <Text
                style={{
                  fontFamily: "bold",
                  fontSize: SIZES.medium + 5,
                color: COLORS.white,
                }}
              >
                $0
            </Text>

          </View>
          <View>
              <Button
                titleStyle={{ color: COLORS.gray2 }}
                buttonStyle={styles.button}
                title={"Buy now"}
              />
            </View>
          </View>
        </SafeAreaView>
    )
  }
};

export default ShoppingList;
