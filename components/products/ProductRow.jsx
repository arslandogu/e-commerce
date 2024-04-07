import { FlatList, View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import styles from "./productRow.style";
import { SIZES, COLORS, SHADOWS } from "../../constants/index";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";
const ProductRow = () => {
  const { data, isLoading, error } = useFetch();
  return (

    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.large} color={COLORS.black}/>
      ) : error ? (
          <Text>Something went wrong</Text>
      ):(<FlatList
        data={data}
            keyExtractor={( item ) => item._id}
        renderItem={({ item }) => <ProductCardView item={item} />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />)}
    </View>
  );
};

export default ProductRow;
