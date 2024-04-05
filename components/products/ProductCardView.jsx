import { View, Text, Image,TouchableOpacity } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
const ProductCardView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('ProductDetails');
      }}>

    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
                  source={require("../../assets/images/fn1.jpg")}
        />
          </View>
          <View style={styles.details}>
              <Text style={styles.productName}>
                    Product
              </Text>
              <Text style={styles.productSupplier}>
                    Supplier
              </Text>
              <View style={styles.productFooter}>
              <Text style={styles.productPrice}>
                  $321
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
