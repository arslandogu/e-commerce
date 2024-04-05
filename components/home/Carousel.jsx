import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'
const Carousel = () => {
    const slides = [
        require("../../assets/images/fn1.jpg"),
        require("../../assets/images/fn2.jpg"),
        require("../../assets/images/fn3.jpg"),
        require("../../assets/images/fn4.jpg"),
    ]
  return (
    <View style={styles.slidesContainer}>
      <SliderBox dotColor={COLORS.black} inactiveDotColor={COLORS.offwhite} ImageComponentStyle={{ width: '92%', borderRadius: 20, marginTop: '2%' }} images={slides} autoplay circleLoop autoplayInterval={2000}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    slidesContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Carousel