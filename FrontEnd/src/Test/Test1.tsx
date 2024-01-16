import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { getAllCourses } from '../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';

const Test1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCourses() as unknown as AnyAction);
  }, [dispatch]);
  const products = useSelector((state: any) => state.product.listCourses);
  const category = products.map((item: any) => item.category);

  // In ra tên của từng danh mục
  console.log(products);
  console.log(category);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test1</Text>
      <View style={styles.listContainer}>
        
      </View>
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

export default Test1;
