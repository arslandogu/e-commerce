import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, SHADOWS } from "../constants";
import styles from "./search.style";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import ProductList from "../components/products/ProductList";
import ProductCardView from "../components/products/ProductCardView";
const Search = () => {
  // http://10.0.2.2:3000/api/products
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isPressed, setIsPressed] = useState(false);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:3000/api/products/search/${searchKey}`
      );
      setSearchResults(response.data);
      setSearchKey("");
      return (
        <View style={{alignItems:'center',justifyContent:'center',paddingTop:SIZES.xxLarge}}>
          <FlatList
            data={searchResults}
            numColumns={2}
            keyExtractor={(item)=>item._id}
            renderItem={({ item }) => <ProductCardView item={item} />}
            contentContainerStyle={{alignItems:'center',justifyContent:'center',paddingTop:SIZES.xxLarge}}
            ItemSeperatorComponent={() => {
              <View style={{height:16}} />;
            }}
          />
        </View>
      );
    } catch (error) {
      console.log("Failed to get products", error);
    }
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons
            color={COLORS.black}
            size={SIZES.xxLarge}
            name="camera-outline"
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onPressIn={() => {}}
            placeholder="Search"
            onChangeText={(text) => setSearchKey(text)}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              handleSearch();
              setIsPressed(true);
              console.log(searchResults);
            }}
            style={styles.searchIconContainer}
          >
            <Feather name="search" size={28} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {isPressed ? (
       <View style={{alignItems:'center',justifyContent:'center',paddingTop:SIZES.xxLarge}}>
       <FlatList
         data={searchResults}
         numColumns={2}
         keyExtractor={(item)=>item._id}
         renderItem={({ item }) => <ProductCardView item={item} />}
         contentContainerStyle={{alignItems:'center',justifyContent:'center',paddingTop:SIZES.xxLarge}}
         ItemSeperatorComponent={() => {
           <View style={{height:16}} />;
         }}
       />
     </View>
      ) : (<View></View>)}
    </SafeAreaView>
  );
};

export default Search;
