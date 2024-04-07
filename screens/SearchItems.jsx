import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './searchItems.style.js';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/index.js';
import ProductList from '../components/products/ProductList.jsx';
const SearchItems = (navigation) => {
    navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
              <View style={styles.upperRow}>
              <TouchableOpacity style={styles.heading} onPress={() =>navigation.goBack()}>
                      <Ionicons color={COLORS.white} size={28} name='chevron-back-circle-outline' />
                      <Text style={{color:COLORS.white,padding:5}}>Products</Text>
        </TouchableOpacity>
              </View>
              <ProductList/>
        </View>
    </SafeAreaView>
  )
}

export default SearchItems
