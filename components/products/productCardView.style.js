import { StyleSheet } from "react-native";
import {COLORS,SIZES,SHADOWS} from '../../constants/index'
const styles = StyleSheet.create({
    container: {
        marginStart:8,
        marginEnd:8,
        flex: 1,
        backgroundColor: COLORS.white,
        width: 182,
        height: 250,
        borderRadius: 20,
        marginVertical:10
    },
    imageContainer: {
        flex: 1,
        width: 170,
        marginLeft:SIZES.small/2,
        marginTop:SIZES.small/2,
        overflow: 'hidden',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center'
    },
    image: {
        resizeMode: 'cover',
        aspectRatio: 1,
        width:170
    },
    details: {
        padding:SIZES.xSmall
    },
    productName: {
        fontFamily: 'semibold',
        fontSize: SIZES.medium,
    },
    productSupplier: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
    },
    productPrice: {
        fontFamily: 'bold',
        fontSize:SIZES.small +3
    },
    productFooter: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    addButton: {
        alignSelf: 'flex-end',
    }
})
export default styles;