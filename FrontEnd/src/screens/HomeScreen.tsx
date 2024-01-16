import React, { useRef, useState, useEffect } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  // ToastAndroid,
} from "react-native";
import { useStore } from "../store/store";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BORDERRADIUS, COLORS, SPACING } from "../themes/theme";
import { FONTFAMILY, FONTSIZE, loadFonts } from "../themes/font";
import HeaderBar from "../components/HeaderBar";
import { FlatList } from "react-native";
import CoffeeCard from "../components/CoffeeCard";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] === undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift("All");
  return categories;
};

// const getCoffeeList = (category: string, data: any) => {
//   if (category == "All") {
//     return data;
//   } else {
//     let coffeeList = data.filter((item: any) => item.category === category);
//     return coffeeList;
//   }
// };

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const response = await fetch("http://192.168.2.15:8080/category/");
      const json = await response.json();
      setCategories(json);
    } catch (error) {
      console.log("Error fetching data:", error);
      console.log(error);
    }
  };
  const getAllProducts = async () => {
    try {
      const response = await fetch("http://192.168.2.15:8080/product/");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("Error fetching data:", error);
      console.log(error);
    }
  };
  // const [products, setProducts] = useState([]);
  const [sortedCoffee, setSortedCoffee] = useState(
    []
    // getCoffeeList(categoryIndex.category, CoffeeList)
  );

  const getProductsByCategory = async (id_category: any) => {
    try {
      const response = await fetch(
        `http://192.168.2.15:8080/product/category/${id_category}`
      );
      const json = await response.json();
      setSortedCoffee(json.data);
    } catch (error) {
      console.log("Error fetching data:", error);
      console.log(error);
    }
  };

  // console.log(data);
  // console.log(categories);
  const listCategories = getCategoriesFromData(categories);
  // console.log(listCategories);
  useEffect(() => {
    getCategories();
  }, []);

  // const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  // console.log(categories);
  const [searchText, setSearchText] = useState("");
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });

  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();

  const searchCoffee = (search: string) => {
    if (search != "") {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({ index: 0, category: categories[0] });
      setSortedCoffee([
        ...data.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      ]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({ index: 0, category: categories[0] });
    setSortedCoffee([...data]);
    setSearchText("");
  };

  const CoffeCardAddToCart = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    });
    calculateCartPrice();
    // ToastAndroid.showWithGravity(
    //   `${name} is Added to Cart`,
    //   ToastAndroid.SHORT,
    //   ToastAndroid.CENTER
    // );
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        {/* App Header */}
        <HeaderBar />

        <Text style={styles.ScreenTitle}>
          Find the best{"\n"}coffee for you
        </Text>

        {/* Search Input */}

        <View style={styles.InputContainerComponent}>
          <TouchableOpacity
            onPress={() => {
              searchCoffee(searchText);
            }}
          >
            <Ionicons
              name="search"
              style={styles.InputIcon}
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              searchCoffee(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchCoffee();
              }}
            >
              <Ionicons
                style={styles.InputIcon}
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        {/* Category Scroller */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
        >
          {categories.map((category: any, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}
            >
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({
                    index: index,
                    category: categories[index],
                  });
                  getProductsByCategory(category._id);
                  // console.log(sortedCoffee);
                }}
              >
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index
                      ? { color: COLORS.primaryOrangeHex }
                      : {},
                  ]}
                >
                  {category.name}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Coffee Flatlist */}

        {/* <FlatList
          ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
              <Text style={styles.CategoryText}>No Coffee Available</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => { */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {sortedCoffee?.map((product: any, key: any) => {
            if (sortedCoffee.length === 0) {
              return (
                <View style={styles.EmptyListContainer}>
                  <Text style={styles.CategoryText}>No Coffee Available</Text>
                </View>
              );
            } else {
              return (
                <View style={styles.FlatListContainer} key={key}>
                  <TouchableOpacity
                    key={key}
                    onPress={() => {
                      navigation.push("Details", {
                        id: product._id,
                        // type: item.type,
                      });
                    }}
                  >
                    <CoffeeCard
                      id={product._id}
                      // imagelink_square={product.image}
                      name={product.nameProduct}
                      price={product.price}
                    />
                  </TouchableOpacity>
                </View>
              );
            }
          })}
        </ScrollView>

        {/* }}
        /> */}

        <Text style={styles.CoffeeBeansTitle}>Hot Deals</Text>

        {/* Beans Flatlist */}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeanList}
          contentContainerStyle={[
            styles.FlatListContainer,
            { marginBottom: tabBarHeight },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push("Details", {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}
              >
                {/* <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                /> */}
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
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
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryScrollViewItem: {
    alignItems: "center",
  },
  CategoryText: {
    // fontFamily: "Poppins_Semibold",
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    // gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_10,
    flexDirection: "row",
  },
  EmptyListContainer: {
    width: Dimensions.get("window").width - SPACING.space_30 * 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.space_36 * 3.6,
  },
  CoffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
});

export default HomeScreen;
