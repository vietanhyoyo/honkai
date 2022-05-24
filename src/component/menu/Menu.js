import color from '../../../asset/color/color';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from './menustyle'

export default function Menu() {
    return (
        <View style={styles.menu}>
            <View style={styles.element}>
                <Icon name='list' size={30} color={color.primary} />
                <Text
                    style={styles.select}
                    ellipsizeMode='tail' numberOfLines={1}
                >Danh sách</Text>
            </View>
            <View style={styles.element}>
                <Icon name='tv' size={30} color='#aaa' />
                <Text
                    style={styles.text}
                    ellipsizeMode='tail' numberOfLines={1}
                >Theo dõi và giám sát</Text>
            </View>
            <View style={styles.element}>
                <Icon name='pie-chart' size={30} color='#aaa' />
                <Text
                    style={styles.text}
                    ellipsizeMode='tail' numberOfLines={1}
                >Biểu đồ</Text>
            </View>
            <View style={styles.element}>
                <Icon name='bell' size={30} color='#aaa' />
                <Text style={styles.text}
                    ellipsizeMode='tail' numberOfLines={1}
                >Thông báo</Text>
            </View>
            <View style={styles.element}>
                <Icon name='user' size={30} color='#aaa' />
                <Text style={styles.text}
                    ellipsizeMode='tail' numberOfLines={1}
                >Cá nhân</Text>
            </View>
        </View>
    )
}