import { StyleSheet } from "react-native";
import { SIZES,COLORS,SHADOWS } from "../../constants";


const styles = StyleSheet.create({
    headingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.xSmall,
        flexDirection: 'row',
        marginHorizontal: 15,
    }
})


export default styles;