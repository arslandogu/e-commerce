import { StyleSheet } from "react-native"
import { SIZES,COLORS } from '../constants/index';





const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,

    },
    header: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        width: '100%',
        height: SIZES.xxLarge + 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderRadius: 20,
        borderBottomWidth:0.2,
    },
    headerText: {
        fontSize: SIZES.large+1,
        fontFamily: 'regular',
    },
    bodyContainer: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal:10
    },
    footerContainer: {
        flex: 1,
        backgroundColor: COLORS.black,
        padding: 10,
        alignItems:'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,

    },
    button: {
        width: 150,
        height: 50,
        borderRadius:20,
        backgroundColor: COLORS.white,
    }
})


export default styles;