import { StyleSheet } from "react-native";
import { SIZES, COLORS, SHADOWS } from "../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  welcomeText: (color, marginTop) => ({
    fontSize: SIZES.xLarge,
    fontFamily: "bold",
    marginTop: marginTop,
    color: color,
    marginHorizontal: 20,
  }),
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    color: COLORS.white,
    marginHorizontal: 15,
  },
  searchIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: COLORS.black,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    fontWeight: "bold",
  },
  searchBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    paddingHorizontal: 5,
  },
});

export default styles;
