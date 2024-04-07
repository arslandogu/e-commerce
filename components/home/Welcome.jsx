import { Text, View, TouchableOpacity, TextInput,SafeAreaView } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Welcome = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          Welcome
        </Text>
        <Text style={styles.welcomeText(COLORS.gray, 0)}>
          You can find anything
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons
            color={COLORS.gray2}
            size={SIZES.xxLarge}
            name="camera-outline"
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => {navigation.navigate('Search')}}
            placeholder="Search"
          />
        </View>
        <View>
          <TouchableOpacity>
            <Feather name="search" size={28} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
