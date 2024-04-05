import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS,SIZES,SHADOWS } from '../constants';
import styles from './search.style';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Search = () => {

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