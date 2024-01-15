import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({navigation}: any) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleLogin = () => {
        
    };
    

    const handleSignUpPress = () => {
        
    };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.scrollContent}>
            <View style={styles.logoContainer}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={require('../assets/logoLogin.jpg')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
            </View>
            <Text style={styles.nameApp}>APP CAFE</Text>
            <Text style={styles.textLogin}>Login</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.bottomLeftLink} onPress={() => {navigation.push('Regitser');}}>
                        <Text style={styles.linkText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomRightLink}>
                        <Text style={styles.linkText}>Forget Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginButtonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => {navigation.push('Profile');}}>
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0F14',
    },
    scrollContent: {
        flexGrow: 1,
        marginTop: 100
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
    nameApp:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'
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