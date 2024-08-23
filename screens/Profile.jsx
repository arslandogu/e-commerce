import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./profile.style";
import { Ionicons } from "@expo/vector-icons";
import { SIZES } from "../constants";
import axios from "axios";
const Profile = () => {
  
  const ListItems = (props) => {
    return (

        <View style={styles.listItems}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "50%",
              alignItems: "center",
              marginHorizontal: -SIZES.xxLarge,
            }}
          >
            <Ionicons style={styles.icons} size={30} name={props.name} />
            <Text style={styles.listItemsText}>{props.title}</Text>
          </View>
        </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <Image
          style={styles.userImage}
          source={require("../assets/images/userDefault.png")}
        />
        <Text style={styles.userText}>Username</Text>
      </View>
      <View style={styles.bodyContainer}>
        <ListItems name="wallet-outline" title="Siparişlerim" />
        <ListItems name="heart-outline" title="Favoriler" />
        <ListItems name="person-outline" title="Hesabım" />
        <ListItems title="Siparişlerim" />
        <ListItems title="Siparişlerim" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
