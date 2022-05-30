
import color from '../../../../asset/color/color';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

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
    minitextYellow: {
        fontSize: 13,
        fontWeight: '700',
        color: color.yellow
    },
    minitextBlue: {
        fontSize: 13,
        fontWeight: '700',
        color: 'blue'
    },
    minitextGreen: {
        fontSize: 13,
        fontWeight: '700',
        color: 'green'
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




function getFormattedDate(int) {

    let date = new Date(int);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    let hours = date.getHours();
    hours = hours >= 10 ? hours : "0" + hours;
    let minutes = date.getMinutes();
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    return day + "/" + month + "/" + year + ' ' + hours + ':' + minutes;
}

export default function InfoItem(props) {

    const showStatus = (status) => {
        if (status === '1') return <Text style={styles.minitextGreen} color='green'>Mới</Text>
        if (status === '0') return <Text style={styles.minitextYellow}>Phân tích</Text>
        else return <Text style={styles.minitextBlue} color='blue'>Hoàn thành</Text>
    }

    const date = props.reportTime !== undefined ? props.reportTime : 0;

    return (
        <View style={styles.element}>
            <View style={styles.elementleft}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.mayr}>
                        {props.reportNo !== undefined && props.reportNo}
                    </Text>
                    <View style={{ paddingHorizontal: 10 }}>
                        {showStatus(props.status)}
                    </View>
                </View>
                <View>
                    <Text style={styles.date}>
                        {props.reportTime !== undefined && getFormattedDate(date)}
                    </Text>
                </View>
                <View><Text>Tự nguyện | Trang thiết bị/cơ sở hạ tầng</Text></View>
                <View><Text>{props.reporterName !== undefined && props.reporterName}
                </Text></View>
                <View><Text>{props.detailDescription !== undefined && props.detailDescription}
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

