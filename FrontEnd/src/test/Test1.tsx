import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { createProduct } from '../redux/apiRequest';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';

export default function Test1() {
    const dispatch = useDispatch();
    const [image, setImage] = useState<string | null>(null);
    // const [nameProduct, setNameProduct] = useState<string>("");
    // const [description, setDescription] = useState<string>("");
    // const [price, setPrice] = useState<string>("");
    // const [categoryId, setCategoryId] = useState<string[]>([]);
    // const [sizeIds, setSizeIds] = useState<string[]>([]);
    // const [ingredientId, setIngredientId] = useState<string[]>([]);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    console.log(image);

    const handleSubmit = async () => {
    
        const formData = new FormData();
    
        formData.append('nameProduct', "Milk Tea 1");
        formData.append('description', "Description Milk Tea");
        formData.append('price', "30.00");
        formData.append('categoryId', "65a3b1400164da552bfd5444");
        formData.append('sizeIds', "65a3b83e943da9067c84103c");
        if (image !== null) {
            formData.append('image', image);
        }
        formData.append('ingredientId', "65a3b1c798b0f7adbc4d6f18");
        dispatch(createProduct(formData)  as unknown as AnyAction);
        console.log(formData);
        
        // const formDataObject: { [key: string]: string | Blob } = {};
        // formData.forEach((value, key) => {
        //     formDataObject[key] = value;
        // });
        // console.log(formDataObject);
    };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Chọn hình từ thư viện" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: '100%', height: 200 }} />}
        <Button title='submit' onPress={handleSubmit}/>
    </View>
  );
}
