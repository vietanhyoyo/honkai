

import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import color from '../../../asset/color/color';



const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#eee'
    },
    text2: {
        fontSize: 20,
        color: '#ddd',
        padding: 20
    }
})

export default function Login({ navigation }) {

    const refresh = () => navigation.navigate('Login');

    return (
        <View style={styles.contain}>
            <Text style={styles.text}>
                404
            </Text>
            <Text style={styles.text}>
                Lỗi không truy cập được máy chủ rồi hehe!!!
            </Text>
            <TouchableOpacity
                onPress={refresh}
            >
                <Text style={styles.text2}>
                    Trở về trang đăng nhập!
                </Text>
            </TouchableOpacity>
        </View>
    )
}
