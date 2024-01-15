import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const RegisterScreen = ({navigation}: any) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [conFirmPassword, setConFirmPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const handleLogin = () => {
        
    };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }} >
        <View style={styles.scrollContent}>
            <TouchableOpacity style={styles.backButton}>
                <AntDesign name="arrowleft" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={require('../assets/logoLogin.jpg')}
                        style={styles.logo}
                        resizeMode="contain"
                />
                </View>
            </View>
            <Text style={styles.textLogin}>Sign up</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Text style={styles.label}>Confirm password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={conFirmPassword}
                    onChangeText={(text) => setConFirmPassword(text)}
                />
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <Text style={styles.label}>Phone number</Text>
                <TextInput
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                />
                <View style={styles.bottomContainer}>
                    <Text style={styles.linkText}>Already have an account?</Text>
                    <TouchableOpacity style={styles.bottomLeftLink} onPress={() => {navigation.push('Login');}}>
                        <Text style={styles.linkText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginButtonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => {navigation.push('Login');}}>
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0F14',
    },
    backButton: {
        marginLeft: 20
    },
    scrollContent: {
        flexGrow: 1,
        marginTop: 60
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    imageWrapper: {
        // backgroundColor: '#52555A',
        borderRadius: 75,
        width: 150,
        height: 150, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 140, 
        height: 140,
    },
    textLogin:{
        color: '#fff',
        fontWeight: 'bold',
        margin: 20,
        fontSize: 24,
        textAlign: 'center'
    },
    inputContainer: {
        marginHorizontal: '10%'
    },
    label: {
        marginBottom: 5,
        color: '#fff',
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 0, 
        backgroundColor: '#252A32',
        borderRadius: 15,
        padding: 10,
        marginBottom: 15,
        color: '#fff',
    },
    loginButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%', 
    },
    loginButton: {
        backgroundColor: '#D17842',
        paddingHorizontal: 30, // Padding theo chiều ngang
        paddingVertical: 10, // Padding theo chiều dọc
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25
    },
      bottomLeftLink: {
        flex: 1,
        alignItems: 'flex-start',
    },
      bottomRightLink: {
        flex: 1,
        alignItems: 'flex-end',
    },
      linkText: {
        color: '#D17842',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})