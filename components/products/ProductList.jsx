import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import styles from "./productList.style";
import useFetch from "../../hook/useFetch";
import ProductCardView from "./ProductCardView";
import { COLORS, SIZES } from "../../constants";
const ProductList = () => {
  const { data, isLoading, error, refetch } = useFetch();
  if (isLoading) {
    return <ActivityIndicator size={SIZES.large} color={COLORS.black} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
              renderItem={({ item }) => (<ProductCardView item={item} />)}
        contentContainerStyle={styles.container}
        ItemSeperatorComponent={() => {
          <View style={styles.seperator} />;
        }}
      />
    </View>
  );
};

export default ProductList;
