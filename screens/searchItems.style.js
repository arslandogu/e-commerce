import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES,COLORS } from '../constants';




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    upperRow: {
        zIndex: 999,
        width:SIZES.width-32,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
        backgroundColor: COLORS.gray2,
        marginHorizontal: SIZES.medium,
        borderRadius: 15,
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.black,
        padding: 5,
        borderRadius: 15,
    }
})

export default styles;