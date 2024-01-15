import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { BORDERRADIUS, COLORS, SPACING } from "../../themes/theme";
import { FONTFAMILY, FONTSIZE, loadFonts } from "../../themes/font";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const CARD_WIDTH = Dimensions.get("window").width * 0.32;

const MilkTeaPresetScreen = () => {
    const [searchText, setSearchText] = useState("");
    
  return (
    <View style={styles.ScreenContainer}>
        <TouchableOpacity style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
            <Text style={styles.headerText}>Milk tea preset</Text>
            <ScrollView style={styles.ScrollViewFlex}>
                <View style={styles.cardDrink}>
                    <View style={styles.cardDetai}>
                        <View style={styles.cardImgContainer}>
                            <Image
                                source={require('../../assets/coffee_assets/cappuccino/portrait/cappuccino_pic_2_portrait.png')}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        </View>
                        <View className='ml-4 justify-center'>
                            <Text style={styles.textName}>Boba</Text>
                        </View>
                    </View>
                    <View style={styles.clickContainer}>
                        <Text style={styles.textPrice}>$4.20</Text>
                        <View style={styles.cateContainer}>
                            <TouchableOpacity><Text style={styles.btnText}>Edit</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.btnText}>Delete</Text></TouchableOpacity>
                        </View>
                    </View>
                </View> 
            </ScrollView>
        </View>
        <TouchableOpacity style={styles.addButton}>
            <MaterialIcons name="add-box" size={50} color="#D17842" />
        </TouchableOpacity>
    </View>
  )
}

export default MilkTeaPresetScreen

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
        flexGrow: 1,
        marginHorizontal: SPACING.space_30,
        marginTop: SPACING.space_20,
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 10,
        padding: 10,
        borderRadius: 5,
        zIndex: 1,
    },
    addButton: {
        position: 'absolute',
        top: 700,
        right: 10,
        padding: 10,
        borderRadius: 5,
        zIndex: 1,
    },
    contentContainer: {
        marginTop: 70,
    },
    headerText: {
        color: '#fff', 
        fontSize: 30, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputContainerComponent: {
        flexDirection: "row",
        margin: SPACING.space_30,
        borderRadius: BORDERRADIUS.radius_20,
        backgroundColor: COLORS.primaryDarkGreyHex,
        alignItems: "center",
    },
    InputIcon: {
        marginHorizontal: SPACING.space_20,
    },
    TextInputContainer: {
        flex: 1,
        height: SPACING.space_20 * 3,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex,
    },
    cardDrink: {
        backgroundColor: COLORS.primaryDarkGreyHex,
        borderRadius: BORDERRADIUS.radius_20,
        padding: SPACING.space_4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.space_20,
    },
    cardDetai: {
        flexDirection: 'row'
    },
    cardImgContainer: {
        height: SPACING.space_20 * 4,
    },
    image: {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: BORDERRADIUS.radius_20,
        marginBottom: SPACING.space_15,
        overflow: "hidden",
    },
    textName: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_16        
    },
    productContainer: {
        backgroundColor: "#000", 
    },
    sizeContainer :{
        flexDirection: 'row',
        marginTop: SPACING.space_4,
        marginBottom: SPACING.space_4,
    },
    cateContainer :{
        flexDirection: 'row',
        marginTop: SPACING.space_4,
    },
    sizeName: {
        fontSize: FONTSIZE.size_12,
        color: '#fff',
        backgroundColor: '#141921', 
        borderWidth: 1, 
        borderColor: '#454545', 
        textAlign: 'center',
        borderRadius: BORDERRADIUS.radius_20,
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        marginRight: 5,
    },
    cateName: {
        fontSize: FONTSIZE.size_12,
        color: '#fff',
        backgroundColor: '#000', 
        borderWidth: 1, 
        borderColor: COLORS.primaryDarkGreyHex, 
        textAlign: 'center',
        borderRadius: BORDERRADIUS.radius_20,
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        marginRight: 5,
        paddingVertical: 3,
    },
    clickContainer: {
        justifyContent: 'space-between'
    },
    textPrice: {
        color: COLORS.primaryOrangeHex,
        fontWeight: 'bold',
        marginLeft: SPACING.space_20 * 3,
    },
    btnText: {
        fontSize: FONTSIZE.size_12,
        color: '#fff',
        backgroundColor: COLORS.primaryOrangeHex, 
        borderWidth: 1, 
        borderColor: COLORS.primaryDarkGreyHex, 
        textAlign: 'center',
        borderRadius: BORDERRADIUS.radius_20,
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        marginRight: 5,
        paddingVertical: 3,
    }
})