import React from "react";
import {
    StyleSheet, Text, View,
    TouchableOpacity, Dimensions, ScrollView
} from 'react-native'

const OPTIONS = ['Phân tích', 'Mới', 'Hoàn thành', 'Tất cả'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModalPicker = (props) => {

    //Sư kiện khi click vào một lựa chọn
    const onPressItem = (option) => {
        props.changeStatusFilter(option);
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
                <Text style={styles.text}>
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
    }
})

export default ModalPicker;