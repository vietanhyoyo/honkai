import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style'
import logo from '../../../asset/image/logo_01.png';
import { useState } from 'react';
import { AuthorContext } from '../../App'

export default function Login({ navigation }) {

    const author = React.useContext(AuthorContext);

    const [account, setAccount] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState({
        username: '',
        password: ''
    })

    const postAPI = () => {
        fetch('https://qlsc.maysoft.io/server/api/auth/login', {
            method: "POST",
            body: JSON.stringify(account),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                if (json.status) {
                    author.setAuthor({access_token: json.data.access_token})
                    navigation.navigate('Home');
                }
                else {
                    alert('Tài khoản hoặc mật khẩu không đúng.')
                }
            })
            .catch(err => console.log(err));
    }

    const formValidate = (user, pass) => {
        if (user === '' && pass === '') {
            setError({ username: 'Bạn chưa nhập tài khoản!', password: 'Bạn chưa nhập mật khẩu!' })
            return false;
        }
        if (user === '') {
            setError({ username: 'Bạn chưa nhập tài khoản!', password: '' })
            return false;
        }
        if (pass === '') {
            setError({ username: '', password: 'Bạn chưa nhập mật khẩu!' })
            return false;
        }
        return true;
    }

    const handleSubmit = () => {
        const user = account.username;
        const pass = account.password;
        formValidate(user, pass)
        //navigation.navigate('Home')
        if (user !== '' && pass !== '')
            postAPI();
    }


    return (
        <View style={styles.screen}>
            <View style={styles.box}>
                <View style={styles.session}>
                    <View style={styles.row}>
                        <View style={styles.logo} >
                            <Image source={logo}></Image>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Tên tài khoản</Text>
                        <TextInput
                            onChangeText={(text) => {
                                if (error.username !== '') {
                                    setError(prev => ({ ...prev, username: '' }))
                                }
                                setAccount(prev => ({ ...prev, username: text }))
                            }}
                            placeholder='Nhập tên tài khoản'
                            style={styles.input}
                        />
                        {error.username !== '' && <View>
                            <Text style={styles.err}>{error.username}</Text>
                        </View>}
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Mật khẩu</Text>
                        <TextInput
                            onChangeText={(text) => {
                                if (error.password !== '') {
                                    setError(prev => ({ ...prev, password: '' }))
                                }
                                setAccount(prev => ({ ...prev, password: text }))
                            }}
                            placeholder='Nhập mật khẩu'
                            style={styles.input}
                        />
                        {error.password !== '' && <View>
                            <Text style={styles.err}>{error.password}</Text>
                        </View>}
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.submit}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.textbtn}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}