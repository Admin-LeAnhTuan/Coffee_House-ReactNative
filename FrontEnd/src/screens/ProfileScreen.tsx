import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({navigation}: any) => {
  return (
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.bgTop}>
                    <TouchableOpacity style={styles.backButton} onPress={() => {navigation.push('Profile');}}>
                        <AntDesign name="arrowleft" size={24} color="#fff" />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.editButton} onPress={() => {navigation.push('EditProfile');}}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
                <View>
                    <Image
                        source={require('../assets/user/avatar-dep-cute.jpg')}
                        style={styles.imgUser}
                        resizeMode="contain"
                    />
                    <Text style={styles.nameUser}>Nguyễn Thị User</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.phoneContainer}>
                    <Text style={styles.textPhone}>Phone Number:</Text>
                    <Text style={styles.phone}>097638832</Text>
                </View>
                <View style={styles.phoneContainer}>
                    <Text style={styles.textPhone}>Email:</Text>
                    <Text style={styles.phone}>expample@gmail.com</Text>
                </View>
                <View style={styles.phoneContainer}>
                    <Text style={styles.textAddress}>Address:</Text>
                    <Text style={styles.address}>01/23 AB, district20, HO CHI MINH city 01/23 AB</Text>
                </View>
                <View style={styles.separator} />
                    <View>
                        <View style={styles.textContainer}>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <MaterialIcons name="border-color" size={24} color="#fff" />
                                    <Text className='text-white text-[16px] ml-5'>Order history</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textContainer}>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <AntDesign name="heart" size={24} color="#fff" />
                                <Text className='text-white text-[16px] ml-5'>Favorite</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textContainer}>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <MaterialCommunityIcons name="logout" size={24} color="#fff" />
                                <Text className='text-white text-[16px] ml-5'>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView> 
        </SafeAreaView>
  )
}

export default ProfileScreen

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
    nameUser: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 14,
        color: '#fff',
        marginBottom: 16,
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
})