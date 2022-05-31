import React from "react";
import color from "../../../../asset/color/color";
import {
    StyleSheet, Text, View,
    TouchableOpacity, Dimensions, ScrollView
} from 'react-native'

const OPTIONS = ['Tự nguyện', 'Bắt buộc', 'Tất cả'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModalTypePicker = (props) => {

    //Sư kiện khi click vào một lựa chọn
    const onPressItem = (option) => {
        props.changeTypeFilter(option);
        props.changeModalVisibility(false);
        props.unShow();
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(index)}
            >
                <Text style={Number(props.type) === index ? styles.textChoose : styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 2 }]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    option: {
        alignItems: 'flex-start'
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textChoose: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: color.primary
    }
})

export default ModalTypePicker;