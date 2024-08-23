import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import cartStore from "../../store/cartStore";
import useFetch from "../../hook/useFetch";
const addToShoppingCart = (item) => {
  // 1. Sepete ekleme işlemini gerçekleştirmek için `addToCart` fonksiyonunu kullanın
  cartStore.getState().addToCart(item);

  // 2. Ekleme işlemi tamamlandıktan sonra, ürünü carttan kaldırın

  // 3. (Opsiyonel) Alışveriş sepetine eklenen ürünle ilgili bir mesaj veya bildirim gösterin
};
const ProductCardView = ({ item }) => {
  const { data } = useFetch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails", { item });
      }}
    >
      {data.map((item) => (
        <View key={item._id} style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
          </View>
          <View style={styles.details}>
            <Text numberOfLines={1} style={styles.productName}>
              {item.title}
            </Text>
            <Text style={styles.productSupplier}>{item.supplier}</Text>
            <View style={styles.productFooter}>
              <Text style={styles.productPrice}>${item.price}</Text>
              <TouchableOpacity
                onPress={() => {
                  cartStore.getState().addToCart(item);
                  console.log("shopping cart: "+ cartStore.getState().shoppingCart);
                }}
                style={styles.addButton}
              >
                <Ionicons
                  color={COLORS.black}
                  size={30}
                  name={"add-circle-outline"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </TouchableOpacity>
  );
};

export default ProductCardView;
