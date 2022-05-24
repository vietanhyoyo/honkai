import color from '../../../asset/color/color'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    element: {
        alignItems: 'center',
        width: '23%',
        overflow: 'hidden'
    },
    menu: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 8,
    },
    select: {
        color: color.primary
    },
    text: {
        color: '#aaa'
    }
})

export default styles;