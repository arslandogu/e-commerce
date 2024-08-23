import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES, COLORS, SHADOWS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const Cart = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerItems}>
        <View>
          <Image
            source={require("../../assets/images/fn4.jpg")}
            style={styles.imageStyle}
          />
        </View>
        <View style={{ alignSelf: "flex-start" }}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Text style={{ textAlign: "left" }}>Satıcı:</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Ionicons name="chevron-back-circle-outline" size={25} />
          <Text
            style={{
              fontFamily: "regular",
              fontSize: SIZES.medium,
              marginHorizontal: 5,
            }}
          >
            1
          </Text>
          <Ionicons name="chevron-forward-circle-outline" size={25} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View></View>
          <BouncyCheckbox
            style={{
              marginStart: 80,
              marginTop: 20,
            }}
          />
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: SIZES.medium,
              alignSelf: "flex-end",
            }}
          >
            {item.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "15%",
    borderColor: COLORS.black,
    borderBottomWidth: 0.1,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 110,
    height: 110,
    borderRadius: 20,
    marginRight: 10,
  },
  containerItems: {
    flexDirection: "row",
  },
  itemText: {
    fontFamily: "regular",
    fontSize: SIZES.medium - 1,
  },
});
