import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { Dimensions, StyleSheet } from "react-native";
import { SIZES,COLORS,SHADOWS } from '../constants/index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.offwhite,
    },
    upperRow: {
        borderRadius:50,
        backgroundColor: COLORS.lightWhite,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding:20
    },
    userImage: {
        width: 200,
        height: 200,
        marginVertical:20
    },
    userText: {
        fontSize: SIZES.xLarge,
        fontFamily: 'regular',
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'center',
        marginTop:25
    },
    listItems: {
        height: 70,
        width:'90%',
        backgroundColor: COLORS.lightWhite,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        borderRadius:20,
        justifyContent: 'flex-start',
        borderColor:COLORS.black
    },
    listItemsText: {
        position:'absolute',
        fontSize: SIZES.large,
    },
    icons: {
        marginHorizontal:-SIZES.xxLarge
    }
});


export default styles;