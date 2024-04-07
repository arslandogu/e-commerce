import { View, Text, Image,TouchableOpacity } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
const ProductCardView = ({item}) => {
  const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('ProductDetails',{item});
      }}>

    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
                  source={{uri:item.imageUrl}}
        />
          </View>
          <View style={styles.details}>
              <Text numberOfLines={1} style={styles.productName}>
                    {item.title}
              </Text>
              <Text style={styles.productSupplier}>
                    {item.supplier}
              </Text>
              <View style={styles.productFooter}>
              <Text style={styles.productPrice}>
                {item.price}
              </Text>
              <TouchableOpacity style={styles.addButton}>
              <Ionicons color={COLORS.black} size={30} name={"add-circle-outline"} />
              </TouchableOpacity>
              </View>
          </View>
    </View>
      </TouchableOpacity>
  );
};

export default ProductCardView;
