import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useStore } from "../store/store";
import { BORDERRADIUS, COLORS, SPACING } from "../themes/theme";
import { FONTFAMILY, FONTSIZE } from "../themes/font";
import ImageBackgroundInfo from "../components/ImageBackgroundInfo";
import PaymentFooter from "../components/PaymentFooter";

const DetailsScreen = ({ navigation, route }: any) => {
  const { id } = route.params;
  const [ItemOfIndex, setProduct] = useState(JSON);
  const getProductsById = async (id: any) => {
    try {
      const response = await fetch(`http://192.168.2.15:8080/product/${id}`);
      const json = await response.json();
      setProduct(json.data);
    } catch (error) {
      console.log("Error fetching data:", error);
      console.log(error);
    }
  };
  useEffect(() => {
    getProductsById(id);
  }, []);
  console.log(ItemOfIndex);
  // const ItemOfIndex = useStore((state: any) =>
  //   route.params.type == "Coffee" ? state.CoffeeList : state.BeanList
  // )[route.params.index];
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList
  );
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  // const [price, setPrice] = useState(ItemOfIndex.price[0]);
  const [fullDesc, setFullDesc] = useState(false);

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  const BackHandler = () => {
    navigation.pop();
  };

  const addToCarthandler = ({
    id,
    // index,
    name,
    // roasted,
    // imagelink_square,
    // special_ingredient,
    // type,
    price,
  }: any) => {
    addToCart({
      id,
      // index,
      name,
      // roasted,
      // imagelink_square,
      // special_ingredient,
      // type,
      price,
    });
    calculateCartPrice();
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {Object.values(ItemOfIndex).map(() => {
        // console.log();
        return (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.ScrollViewFlex}
          >
            <ImageBackgroundInfo
              EnableBackHandler={true}
              imagelink_portrait={require("../assets/coffee_assets/americano/square/americano_pic_1_square.png")}
              // type={ItemOfIndex.type}
              id={ItemOfIndex._id}
              // favourite={ItemOfIndex.favourite}
              name={ItemOfIndex.nameProduct}
              // special_ingredient={ItemOfIndex.special_ingredient}
              // ingredients={ItemOfIndex.ingredients}
              // average_rating={ItemOfIndex.average_rating}
              // ratings_count={ItemOfIndex.ratings_count}
              // roasted={ItemOfIndex.roasted}
              BackHandler={BackHandler}
              // ToggleFavourite={ToggleFavourite}
            />

            <View style={styles.FooterInfoArea}>
              <Text style={styles.InfoTitle}>Description</Text>
              {fullDesc ? (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setFullDesc((prev) => !prev);
                  }}
                >
                  <Text style={styles.DescriptionText}>
                    {ItemOfIndex.description}
                  </Text>
                </TouchableWithoutFeedback>
              ) : (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setFullDesc((prev) => !prev);
                  }}
                >
                  <Text numberOfLines={3} style={styles.DescriptionText}>
                    {ItemOfIndex.description}
                  </Text>
                </TouchableWithoutFeedback>
              )}
              <Text style={styles.InfoTitle}>Size</Text>
              <View style={styles.SizeOuterContainer}>
                {/* {ItemOfIndex.prices.map((data: any) => (
                  <TouchableOpacity
                    key={data.size}
                    onPress={() => {
                      setPrice(data);
                    }}
                    style={[
                      styles.SizeBox,
                      {
                        borderColor:
                          data.size == price.size
                            ? COLORS.primaryOrangeHex
                            : COLORS.primaryDarkGreyHex,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.SizeText,
                        {
                          fontSize:
                            ItemOfIndex.type == "Bean"
                              ? FONTSIZE.size_14
                              : FONTSIZE.size_16,
                          color:
                            data.size == price.size
                              ? COLORS.primaryOrangeHex
                              : COLORS.secondaryLightGreyHex,
                        },
                      ]}
                    >
                      {data.size}
                    </Text>
                  </TouchableOpacity>
                ))} */}
              </View>
            </View>
            {/* <PaymentFooter
              price={product.price}
              buttonTitle="Add to Cart"
              buttonPressHandler={() => {
                addToCarthandler({
                  id: product._id,
                  // index: product.index,
                  name: product.nameProduct,
                  // roasted: product.roasted,
                  // imagelink_square: product.imagelink_square,
                  // special_ingredient: product.special_ingredient,
                  // type: product.type,
                  price: product.price,
                });
              }}
            /> */}
            <View style={styles.PriceFooter}>
              <View style={styles.PriceContainer}>
                <Text style={styles.PriceTitle}>Price</Text>
                <Text style={styles.PriceText}>
                  {/* {price.currency}  */}
                  <Text style={styles.Price}>{ItemOfIndex.price}K</Text>
                </Text>
              </View>
              <TouchableOpacity
                style={styles.PayButton}
                onPress={() =>
                  addToCarthandler({
                    id: ItemOfIndex._id,
                    name: ItemOfIndex.nameProduct,
                    price: ItemOfIndex.price,
                  })
                }
              >
                <Text style={styles.ButtonText}>Add Cart</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    // flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  FooterInfoArea: {
    padding: SPACING.space_20,
  },
  InfoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
  DescriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
  },
  SizeOuterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: SPACING.space_20,
  },
  SizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: "center",
    justifyContent: "center",
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
  PriceFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.space_20,
    padding: SPACING.space_20,
  },
  PriceContainer: {
    alignItems: "center",
    width: 100,
  },
  PriceTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryLightGreyHex,
  },
  PriceText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryOrangeHex,
  },
  Price: {
    color: COLORS.primaryWhiteHex,
  },
  PayButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: SPACING.space_36 * 2,
    borderRadius: BORDERRADIUS.radius_20,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
});

export default DetailsScreen;
