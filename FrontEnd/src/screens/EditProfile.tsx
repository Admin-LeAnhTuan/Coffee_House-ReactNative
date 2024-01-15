import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const EditProfile = ({navigation}: any) => {
    const [username, setUsername] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');

    const handleSave = () => {
        
    };
  return (
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.bgTop}>
                    <TouchableOpacity style={styles.backButton}>
                        <AntDesign name="arrowleft" size={24} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editText}>Save</Text>
                    </TouchableOpacity>
                    <View>
                        <Image
                            source={require('../assets/user/avatar-dep-cute.jpg')}
                            style={styles.imgUser}
                            resizeMode="contain"
                        />
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add-circle" size={35} color="#fff" />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            value={username}
                            onChangeText={(text) => setUsername(text)}/>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.label}>Phone number</Text>
                    <TextInput
                        style={styles.inputContent}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        style={styles.inputContent}
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.inputContent}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <View style={styles.SaveButtonContainer}>
                        <TouchableOpacity style={styles.SaveButton} onPress={() => {navigation.push('AddDrinkScreen');}}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView> 
        </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0F14',
    },
    scrollContent: {
        flexGrow: 1,
    },
    bgTop: {
        backgroundColor: '#1A1B1D',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 10,
        padding: 10,
        borderRadius: 5,
        zIndex: 1,
    },
    editButton: {
        position: 'absolute',
        top: 40,
        right: 10,
        padding: 10,
        borderRadius: 5,
        zIndex: 1,
    },
    editText: {
        fontSize: 18,
        color: '#d17842',
        fontWeight: 'bold',
    },
    imgUser: {
        width: 200, 
        height: 200,
        borderRadius: 100,
        marginTop: 110,
        alignSelf: 'center',
    },
    addButton: {
        position: 'absolute',
        top: 260,
        right: 110,
        padding: 10,
        borderRadius: 5,
        zIndex: 1,
    },
    input: {
        marginTop: 10,
        borderWidth: 0, 
        backgroundColor: '#252A32',
        borderRadius: 15,
        padding: 10,
        marginBottom: 15,
        color: '#fff',
        marginLeft: 50,
        marginRight: 50,
        textAlign: "center",
        fontSize: 20,
    },
    contentContainer: {
        
    },
    phoneContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20, 
        marginTop: 20, 
    },
      addressContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
      textPhone: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
      phone: {
        fontSize: 16,
        color: '#fff',
    },
      textAddress: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        marginRight: 0,
    },
      address: {
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        alignItems: 'center',
        fontSize: 16,
        color: '#fff',
        paddingHorizontal: 47
    },
      separator: {
        borderBottomWidth: 1, 
        borderBottomColor: '#433E3E',
        marginTop: 20,
    },
      textContainer: {
        backgroundColor: '#141921',
        paddingHorizontal: 20, // Padding xung quanh nội dung văn bản
        paddingVertical: 12,
        marginTop: 20
    },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        width: 150,
        height: 30,
    },
    label: {
        marginTop: 20,
        marginBottom: 5,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 50,
        marginRight: 50,
    },
    inputContent: {
        marginTop: 10,
        borderWidth: 0, 
        backgroundColor: '#252A32',
        borderRadius: 15,
        padding: 10,
        marginBottom: 15,
        color: '#fff',
        marginLeft: 50,
        marginRight: 50,
        fontSize: 20,
        paddingLeft: 20
    },
    SaveButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%', 
    },
    SaveButton: {
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
})