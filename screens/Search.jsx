import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS,SIZES,SHADOWS } from '../constants';
import styles from './search.style';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const Search = () => {
  // http://10.0.2.2:3000/api/products
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:3000/api/products/search/${searchKey}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log('Failed to get products', error);
    }
  }


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
            value=""
            onPressIn={() => {}}
            placeholder="Search"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchIconContainer}>
            <Feather name="search" size={28} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search