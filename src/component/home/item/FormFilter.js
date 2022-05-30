import React from "react";
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import color from "../../../../asset/color/color";
import ModalPicker from "./ModelPicker";

export default function FromFilter(props) {

    //Lọc theo trạng thái
    const [status, setStatus] = React.useState([0, 1, 2, 3]);
    //Mo danh muc chon
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <View style={styles.form}>
            <View
                style={styles.back}
                onTouchEnd={() => {
                    props.setShowFilterTable(false)
                }}
            ></View>
            <View style={styles.box}>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setModalVisible(true)
                        }}
                    >
                        <Text style={styles.text}>
                            Chọn trạng thái
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <ModalPicker
                    changeModalVisibility={setModalVisible}
                    changeStatusFilter={props.changeStatusFilter}
                    unShow={props.unShow}
                />
            </Modal>
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

