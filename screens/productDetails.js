import { Dimensions, StyleSheet } from 'react-native'
import React from 'react';
import { COLORS, SIZES } from '../constants/index';



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: SIZES.width-44,
        zIndex: 999,
        height: SIZES.height-800,
        top: SIZES.xxLarge,
        marginHorizontal: 20,
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        justifyContent:'space-between'

    },
    image: {
        width: Dimensions.get('screen').width,
        height: 450,
        resizeMode:'cover',
        aspectRatio:1,
    },
    details: {
        marginTop:-SIZES.medium,
        width: SIZES.width,
        backgroundColor:COLORS.offwhite,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    rating: {
        justifyContent:'space-between',
        flexDirection: 'row',
        marginHorizontal: SIZES.small,
    },
    ratingTextContainer: {
        justifyContent:'space-between',
        alignItems: 'flex-end',
        marginHorizontal: SIZES.xxLarge + 16,
        marginVertical:-SIZES.small
    },
    ratingText: {
        fontFamily: 'regular',
        fontSize: 14,
        color: COLORS.gray
    },
    description: {
        marginTop:'2%',
        width: SIZES.width,
        padding:15
    },
    descriptionText: {
        letterSpacing: 1,
        textAlign:'center',
        color:COLORS.gray
    },
    quantityRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        justifyContent:'space-between'
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    delivery: {
        alignItems:'center'
    },
    footerContainer: {
        flexDirection:'row',
        flex: 1,
        justifyContent:'space-between',
        backgroundColor: COLORS.black,
        width: SIZES.width,
        padding:15,
        borderTopLeftRadius: 20,
        borderTopRightRadius:20
    },
    cartButton: {
        backgroundColor: COLORS.lightWhite,
        color: COLORS.black,
        padding: 15,
        width: SIZES.width - 250,
        borderRadius: 20,
        textAlign: 'center',
    }
})
export default styles