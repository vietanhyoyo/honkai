import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import InfoItem from './item/InfoItem';
import React from 'react';
import styles from './style';
import Menu from '../menu/Menu';
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../../../asset/color/color';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react'

function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return day + "-" + month + "-" + year;
  }

export default function Home({ navigation }) {

    const [date, setDate] = useState(new Date(Date.now()));
    const [showDate, setShowDate] = useState(false);

    const changeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowDate(false);
        setDate(currentDate);
      };

    return (
        <View style={styles.home}>
            <View style={styles.top}>
                <TouchableOpacity
                    style={styles.topcontent}
                    onPress={() => setShowDate(true)}
                >
                    <View
                        style={styles.input}
                    >
                        <Text>
                            {getFormattedDate(date)}
                        </Text>
                    </View>
                    <Icon
                        style={{ position: 'absolute', right: 30, top: 24 }}
                        name='calendar' size={24} color={color.primary}
                    />

                    {showDate && <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        onChange={changeDate}
                    />}

                </TouchableOpacity>
                <View style={styles.filter}>
                    <Icon name='filter' size={40} color={color.primary} />
                </View>
            </View>
            <View style={styles.body}>
                <ScrollView style={styles.scrollview}>
                    <InfoItem />
                    <InfoItem />
                    <InfoItem />
                    <InfoItem />
                    <InfoItem />
                    <InfoItem />
                </ScrollView>
            </View>
            <View style={styles.bottom}>
                <Menu />
            </View>
        </View>
    )
}