import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet } from 'react-native';
import color from "../../../../asset/color/color";

export default function FormDate(props) {

    //Hiển thị ngày
    const [showDate, setShowDate] = React.useState(false);
    //Trạng thái
    const [status, setStatus] = React.useState('start');

    const changeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowDate(false);
        if (status === 'start')
            props.setStartDate(currentDate);
        else props.setEndDate(currentDate);
    };

    return (
        <View style={styles.form}>
            <View
                style={styles.back}
                onTouchEnd={() => {
                    props.setShowDate(false);
                }}
            ></View>
            <View style={styles.box}>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setStatus('start');
                            setShowDate(true)
                        }}
                    >
                        <Text style={styles.text}>
                            Ngày bắt đầu
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setStatus('end');
                            setShowDate(true)
                        }}
                    >
                        <Text style={styles.text}>
                            Ngày kết thúc
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {showDate && status === 'start' && <DateTimePicker
                testID="dateTimePicker"
                value={props.startDate}
                mode='date'
                is24Hour={true}
                onChange={changeDate}
            />}
            {showDate && status === 'end' && <DateTimePicker
                testID="dateTimePicker"
                value={props.endDate}
                mode='date'
                is24Hour={true}
                onChange={changeDate}
            />}
        </View>

    )
}

const styles = StyleSheet.create({
    form: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%'
    },
    back: {
        backgroundColor: 'black',
        opacity: 0.2,
        position: 'absolute',
        top: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 1,
        backgroundColor: '#fff',
        padding: 26,
        width: 300,
        height: 200,
        transform: [{ translateX: -150 }, { translateY: -100 }],
        justifyContent: 'space-around',
        borderRadius: 10
    },
    button: {
        backgroundColor: color.primary,
        marginVertical: 10,
        padding: 16,
        borderRadius: 10,
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    }
})

