import React from 'react';
import color from '../../../asset/color/color';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function PageButtons(props) {

    //Danh sách trang
    const [buttonArray, setButtonArray] = React.useState(['1', '2', '3']);
    //Trang được chọn
    const [selectButton, setSelectButton] = React.useState(props.page);
    //Xử lý chuyển trang
    const change = item => {
        props.changePage(item);
        setSelectButton(item);
    }
    //Display arrow left
    const [leftDisplay, setLeftDisplay] = React.useState(true);
    const backPage = () => {
        const pageIndex = Number(props.page);
        if (pageIndex === 1) return;
        else {
            const backPage = pageIndex - 1;
            change(backPage.toString());
        }
    }
    const nextPage = () => {
        const pageIndex = Number(props.page);
        if (pageIndex === buttonArray.length) return;
        else {
            const nextPage = pageIndex + 1;
            change(nextPage.toString())
        }

    }

    return (
        <View style={styles.contain} >
            <TouchableOpacity
                style={styles.touch}
                onPress={backPage}
            >
                <Text style={styles.text}>
                    {'<'}
                </Text>
            </TouchableOpacity>
            {buttonArray.map((item, index) => {
                return <TouchableOpacity
                    onPress={() => change(item)}
                    key={index}
                    style={selectButton === item ? styles.touchSelect : styles.touch}
                >
                    <Text style={selectButton === item ? styles.textSelect : styles.text}>
                        {item}
                    </Text>
                </TouchableOpacity>
            })}
            <TouchableOpacity
                style={styles.touch}
                onPress={nextPage}
            >
                <Text style={styles.text}>
                    {'>'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        top: -30
    },
    touch: {
        backgroundColor: color.gray,
        width: 20,
        height: 20,
        alignItems: 'center',
        margin: 3,
        borderRadius: 10,
    },
    touchSelect: {
        backgroundColor: color.primary,
        width: 20,
        height: 20,
        alignItems: 'center',
        margin: 3,
        borderRadius: 10,
    },
    text: {
        color: '#333'
    },
    textSelect: {
        color: '#fff'
    }
})