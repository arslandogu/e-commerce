import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './heading.style'
import {Ionicons} from '@expo/vector-icons'
import { SIZES } from '../../constants'
const Heading = () => {
  return (
    <View style={styles.headingContainer}>
      <Text style={{ fontFamily: 'semibold', fontSize: SIZES.large, }}>New Products</Text>
      <TouchableOpacity>
        <Ionicons name='ios-grid-outline' size={26}/>
      </TouchableOpacity>
    </View>
  )
}

export default Heading
