
import color from '../../../../asset/color/color';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    
    element: {
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 6,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: color.gray,

        borderRadius: 10,
        backgroundColor: '#fff'

    },
    minitext: {
        fontSize: 13,
        fontWeight: '700',
        color: color.yellow
    },
    mayr: {
        fontWeight: '700',
        color: color.primary
    },
    date: {
        fontStyle: 'italic',
        fontSize: 13
    },
    elementleft: {
        flex: 1
    },
    elementright: {
        width: 30,
        justifyContent: 'center'
    },
    threedot: {
        justifyContent: 'center'
    }

})

import { StyleSheet } from 'react-native';

export default function InfoItem() {
    return (
        <View style={styles.element}>
            <View style={styles.elementleft}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.mayr}>MAYR-24-00064</Text>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={styles.minitext}>Phân tích</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.date}>19/02/2021 11:51</Text>
                </View>
                <View><Text>Tự nguyện | Trang thiết bị/cơ sở hạ tầng</Text></View>
                <View><Text>Tôi là người đứng đầu tổ chức Haaaa
                </Text></View>
            </View>
            <View style={styles.elementright}>
                <Text style={styles.threedot}><Icon
                    name='dots-three-vertical' size={30} color={color.primary}
                /></Text>
            </View>
        </View>
    )
}

