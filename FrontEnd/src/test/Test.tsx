import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { getAllProducts, getAllCate, getAllUser } from '../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';

const Test = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts() as unknown as AnyAction);
        dispatch(getAllCate() as unknown as AnyAction);
        dispatch(getAllUser() as unknown as AnyAction);
    }, [dispatch]);
    const products = useSelector((state: any) => state.product.listProducts);
    const cate = useSelector((state: any) => state.category.listCategory);
    const user = useSelector((state: any) => state.user.listUser);
    console.log(products.data);
    console.log(cate);
    console.log(user);
    // const data = products.data
    // console.log(data); 
  // In ra tên của từng danh mục
 

  return (
    
    <View style={styles.container}>
        {/* <Text style={styles.title}>Test1</Text>
            <View style={styles.listContainer}>
            <div>
                { data && data.map((product: any) => (
                    <div key={product._id}>
                        <h2>{product.nameProduct}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category.name}</p>
                        <p>Ingredients: {product.ingredient.map((ingredient:any) => ingredient.nameIngredient).join(', ')}</p>
                        <p>Sizes: {product.size.map((size:any) => size.nameSize).join(', ')}</p>
                    </div>
                ))}
            </div>
        </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    width: '80%', // Example width, adjust as needed
  },
  listItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
});

export default Test;
