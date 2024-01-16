import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const AddTopping = ({navigation}: any) => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');

  return (
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.scrollContent}>
                <TouchableOpacity style={styles.backButton}>
                    <AntDesign name="arrowleft" size={24} color="#fff" />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={require('../assets/logoLogin.jpg')}
                            resizeMode="contain"
                            style={styles.logoImage}
                        />
                        <TouchableOpacity style={{ position: 'absolute', top: 180, right: 50, zIndex: 999 }}>
                            <MaterialIcons name="add-circle" size={35} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Text style={styles.label}>Price</Text>
                    <TextInput
                        style={styles.input}
                        value={price}
                        onChangeText={(text) => setPrice(text)}
                    />
                </View>
                <View style={styles.SaveButtonContainer}>
                    <TouchableOpacity style={styles.SaveButton}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default AddTopping

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
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    imageWrapper: {
        backgroundColor: '#1A1B1D',
        padding: 10, 
        borderRadius: 10,
    },
    logoImage: {
        width: 300,
        height: 200,
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
    inputText: {
        borderWidth: 0, 
        backgroundColor: '#252A32',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        color: '#fff',
        fontSize: 17,
    },
    combobox: {
        backgroundColor: '#252A32',
        color: '#fff'
    },
    SaveButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%', 
        marginBottom: 20
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