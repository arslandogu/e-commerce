import { View, Text, TouchableOpacity,Image, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './productDetails';
import { Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto } from '@expo/vector-icons';
import { useNavigation,useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants';
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  const increment = () => {
    setQuantity(quantity + 1);
  }
  const decrement = () => {
    if (quantity>1) {
      setQuantity(quantity -1);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() =>navigation.goBack()}>
        <Ionicons size={28} name='chevron-back-circle-outline' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons size={28} name='bookmark-outline'/>
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={{uri:item.imageUrl}} />

      <View style={styles.details}>
        <Text style={{ fontFamily: 'semibold', fontSize: SIZES.medium + 2 }}>{item.title}</Text>
        <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => {
              return (
                <Ionicons color='gold' key={index} size={20} name='star'   />
          )
          })}
        </View>
      </View>
      <View style={styles.ratingTextContainer}>

        <Text style={styles.supplierText}>{item.supplier}</Text>
            <Text style={styles.ratingText}>(5.0)</Text>

      </View>

      <View style={styles.description}>
        <Text style={styles.description}>Description</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <View style={styles.locationRow}>
        <View style={styles.location}>
        <Ionicons name='location-outline' size={24} />
          <Text>{item.product_location}</Text>
        </View>
      <View style={styles.quantityRow}>
        <TouchableOpacity onPress={() => decrement() }>
          <SimpleLineIcons name='minus' size={22}/>
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 10, fontSize: 20 }}>{quantity}</Text>
        <TouchableOpacity onPress={() => increment()

        }>
          <SimpleLineIcons name='plus' size={22}/>
        </TouchableOpacity>
      </View>
        <View style={styles.delivery}>
          <MaterialCommunityIcons name='truck-delivery-outline' size={24} />
          <Text>Free Delivery</Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View>
        <Text style={styles.totalPrice}>
          Total Price
        </Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <View style={{
          flexDirection: 'row',alignItems:'center', gap:SIZES.medium}}>
          <TouchableOpacity onPress={() => {

          }}>
            <Fontisto name='shopping-bag' size={30} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Cart');
        }}>
          <Text style={styles.cartButton}>Buy Now</Text>
        </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default ProductDetails