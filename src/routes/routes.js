import React from "react";
import { Image } from "react-native";
import { Footer, Text, FooterTab, Button } from "native-base";
import { TabNavigator, StackNavigator } from "react-navigation";
import Home from "../screens/Home/";
// import Cart from "../Cart/";
// import Order from "../Order/";
import Account from "../screens/Account/";
import styles from "../screens/Home/styles";
import Login from "../screens/Login/";
// import IndianFoodMenu from "./screens/IndianFoodMenu/";
import WesternFoodMenu from "../screens/WesternFoodMenu/";
// import Location from "./screens/Location/";
// import Favourites from "./screens/Favourites/";
// import Filter from "./screens/Filter/";
// import PhoneNumber from "./screens/PhoneNumber/";


const restaurant = require("../../assets/footer-menu/restaurant-inactive.png");
const cart = require("../../assets/footer-menu/cart-inactive.png");
const order = require("../../assets/footer-menu/order-inactive.png");
const account = require("../../assets/footer-menu/account-inactive.png");
const activeRestaurant = require("../../assets/footer-menu/restaurant.png");
const activeCart = require("../../assets/footer-menu/cart.png");
const activeOrder = require("../../assets/footer-menu/order.png");
const activeAccount = require("../../assets/footer-menu/account.png");


export const TabNavigation = TabNavigator(
	{
		Home: { screen: Home },
		// Cart: { screen: Cart },
		// Order: { screen: Order },
		Account: { screen: Account }
	},
	{
		tabBarPosition: "bottom",
		lazy: true,
		tabBarComponent: props => {
			return (
				<Footer>
					<FooterTab>
						<Button
							style={{ paddingLeft: 0, paddingRight: 0 }}
							onPress={() => props.navigation.navigate("Home")}
						>
							<Image
								source={
									props.navigation.state.index === 0
									? activeRestaurant
									: restaurant
								}
								style={styles.footerImg}
							/>
							<Text
								style={
									props.navigation.state.index === 0
									? styles.footerItemActive
									: styles.footerItemInactive
								}
							>
								Restaurants
							</Text>
						</Button>
						{/*<Button*/}
						{/*style={{ paddingLeft: 0, paddingRight: 0 }}*/}
						{/*onPress={() => props.navigation.navigate("Cart")}*/}
						{/*>*/}
						{/*<Image*/}
						{/*source={props.navigation.state.index === 1 ? activeCart : cart}*/}
						{/*style={styles.footerImg}*/}
						{/*/>*/}
						{/*<Text*/}
						{/*style={*/}
						{/*props.navigation.state.index === 1*/}
						{/*? styles.footerItemActive*/}
						{/*: styles.footerItemInactive*/}
						{/*}*/}
						{/*>*/}
						{/*Cart*/}
						{/*</Text>*/}
						{/*</Button>*/}
						{/*<Button*/}
						{/*style={{ paddingLeft: 0, paddingRight: 0 }}*/}
						{/*onPress={() => props.navigation.navigate("Order")}*/}
						{/*>*/}
						{/*<Image*/}
						{/*source={*/}
						{/*props.navigation.state.index === 2 ? activeOrder : order*/}
						{/*}*/}
						{/*style={styles.footerImg}*/}
						{/*/>*/}
						{/*<Text*/}
						{/*style={*/}
						{/*props.navigation.state.index === 2*/}
						{/*? styles.footerItemActive*/}
						{/*: styles.footerItemInactive*/}
						{/*}*/}
						{/*>*/}
						{/*Order*/}
						{/*</Text>*/}
						{/*</Button>*/}
						<Button
							style={{ paddingLeft: 0, paddingRight: 0 }}
							onPress={() => props.navigation.navigate("Account")}
						>
							<Image
								source={
									props.navigation.state.index === 1 ? activeAccount : account
								}
								style={styles.footerImg}
							/>
							<Text
								style={
									props.navigation.state.index === 1
									? styles.footerItemActive
									: styles.footerItemInactive
								}
							>
								Account
							</Text>
						</Button>
					</FooterTab>
				</Footer>
			);
		}
	}
);


export const Navigation = StackNavigator(
  {
    Login: { screen: Login },
    TabNavigation: { screen: TabNavigation },
    // Location: { screen: Location },
    // Filter: { screen: Filter },
    // IndianFoodMenu: { screen: IndianFoodMenu },
    WesternFoodMenu: { screen: WesternFoodMenu }
    // Favourites: { screen: Favourites },
    // PhoneNumber: { screen: PhoneNumber }
  },
  {
    index: 0,
    initialRouteName: "Login",
    headerMode: "none"
  }
);