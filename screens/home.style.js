import { Dimensions, StyleSheet } from "react-native"
import { SIZES,COLORS,SHADOWS } from "../constants/index"


const styles = StyleSheet.create({
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop:SIZES.small,
    },
    locationText: {
        fontFamily: 'semibold',
        fontSize: SIZES.large,
        color:COLORS.black,
    },
    cartCount: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent:'center',
        zIndex: 999,
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius:8,
        backgroundColor:COLORS.white

    },
    cartNumber: {
        color: COLORS.black,
        fontSize: 11,
        fontWeight: '600'
    }
})


export default styles;