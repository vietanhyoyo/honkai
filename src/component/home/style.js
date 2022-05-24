import color from '../../../asset/color/color'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff'
    },
    top: {
        height: 73,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: 0.6,
        borderColor: color.gray
    },
    body: {
        flex: 1,
        backgroundColor: '#ddd',
        
    },
    bottom: {
        height: 73,
        backgroundColor: '#fff',
        borderTopColor: color.gray,
        borderTopWidth: 0.6
    },
    scrollview: {
        padding: 5
    },
    topcontent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: color.primary,
        paddingLeft: 8,
        justifyContent: 'center'
    },
    filter: {
        padding: 15,
        marginLeft: -12
    }

})

export default styles;