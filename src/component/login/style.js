import color from '../../../asset/color/color'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    box: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    session: {
        backgroundColor: '#fff',
        padding: 20
    },
    row: {
        paddingVertical: 20,
        width: 320,
    },
    logo: {
        alignItems: 'center'
    },
    label: {
        fontSize: 14,
        fontWeight: '700',
        color: color.black,
        marginBottom: 6
    },
    input: {
        borderWidth: 1,
        padding: 8,
        width: '100%',
        borderColor: color.gray,
        borderRadius: 10,
        backgroundColor: '#f2f5f6' 
    },
    submit: {
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: color.primary,
        justifyContent: 'center',
        padding: 16,
        borderRadius: 10
    },
    textbtn: {
        color: 'white'
    },
    err: {
        position: 'absolute',
        marginTop: 4,
        color: color.red
    }
})

export default styles;