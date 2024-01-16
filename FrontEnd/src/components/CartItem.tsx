import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageProps,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BORDERRADIUS, COLORS, SPACING } from "../themes/theme";
import { FONTFAMILY, FONTSIZE } from "../themes/font";
// import CustomIcon from "./CustomIcon";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

interface CartItemProps {
  id: string;
  name: string;
  // imagelink_square: ImageProps;
  // special_ingredient: string;
  // roasted: string;
  price: any;
  // type: string;
  // incrementCartItemQuantityHandler: any;
  // decrementCartItemQuantityHandler: any;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  // imagelink_square,
  // special_ingredient,
  // roasted,
  price,
  // type,
  // incrementCartItemQuantityHandler,
  // decrementCartItemQuantityHandler,
  // imagelink_square,
  // special_ingredient,
  // roasted,
  price,
  // type,
  // incrementCartItemQuantityHandler,
  // decrementCartItemQuantityHandler,
}) => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.CartItemLinearGradient}
      >
        <View style={styles.CartItemRow}>
          <Image
            source={require("../assets/coffee_assets/americano/square/americano_pic_1_square.png")}
            style={styles.CartItemImage}
          />
          <View style={styles.CartItemInfo}>
            <View>
              <Text style={styles.CartItemTitle}>{name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.CartItemSizeRowContainer}>
          <View style={styles.CartItemSizeValueContainer}>
            <View style={styles.SizeBox}>
              <Text
                style={[
                  styles.SizeText,
                  {
                    fontSize: FONTSIZE.size_16,
                  },
                ]}
              >
                {/* {data.size} */}
              </Text>
            </View>
            <Text style={styles.SizeCurrency}>
              {/* {data.currency} */}
              <Text style={styles.SizePrice}>${price}</Text>
            </Text>
          </View>
          <View style={styles.CartItemSizeValueContainer}>
            <TouchableOpacity
              style={styles.CartItemIcon}
              // onPress={() => {
              //   decrementCartItemQuantityHandler(id, data.size);
              // }}
            >
              <AntDesign
                name="minus"
                color={COLORS.primaryWhiteHex}
                size={FONTSIZE.size_10}
              />
            </TouchableOpacity>
            <View style={styles.CartItemQuantityContainer}>
              <Text style={styles.CartItemQuantityText}>1</Text>
            </View>
            <TouchableOpacity
              style={styles.CartItemIcon}
              // onPress={() => {
              //   incrementCartItemQuantityHandler(id, data.size);
              // }}
            >
              <Ionicons
                name="add"
                color={COLORS.primaryWhiteHex}
                size={FONTSIZE.size_10}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  CartItemLinearGradient: {
    flex: 1,
    gap: SPACING.space_12,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CartItemRow: {
    flexDirection: "row",
    gap: SPACING.space_12,
    flex: 1,
  },
  CartItemImage: {
    height: 130,
    width: 130,
    borderRadius: BORDERRADIUS.radius_20,
  },
  CartItemInfo: {
    flex: 1,
    paddingVertical: SPACING.space_4,
    justifyContent: "space-between",
  },
  CartItemTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSubtitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  CartItemRoastedContainer: {
    height: 50,
    width: 50 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  CartItemRoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSizeRowContainer: {
    flex: 1,
    alignItems: "center",
    gap: SPACING.space_20,
    flexDirection: "row",
    justifyContent: "center",
  },
  CartItemSizeValueContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  SizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 40,
    width: 100,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: "center",
    alignItems: "center",
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.secondaryLightGreyHex,
  },
  SizeCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  SizePrice: {
    color: COLORS.primaryWhiteHex,
  },
  CartItemIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_10,
  },
  CartItemQuantityContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    width: 80,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
    borderColor: COLORS.primaryOrangeHex,
    alignItems: "center",
    paddingVertical: SPACING.space_4,
  },
  CartItemQuantityText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSingleLinearGradient: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.space_12,
    gap: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CartItemSingleImage: {
    height: 150,
    width: 150,
    borderRadius: BORDERRADIUS.radius_20,
  },
  CartItemSingleInfoContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "space-around",
  },
  CartItemSingleSizeValueContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  CartItemSingleQuantityContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default CartItem;
