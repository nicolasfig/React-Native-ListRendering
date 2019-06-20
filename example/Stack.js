import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Button, View, Text } from "react-native";

function randomNumber() {
	return Math.floor(Math.random() * 10);
}

class ScreenComponentOne extends Component {
	static navigationOptions = {
		headerTitle: "First Screen",
		headerStyle: {
			backgroundColor: "teal"
		},
		headerTitleStyle: {
			flex: 1,
			textAlign: "center"
		},
		headerTintColor: "white"
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
					borderWidth: 21,
					borderColor: "teal"
				}}
			>
				<Button
					title="Go to screen two"
					onPress={() => {
						this.props.navigation.navigate("RouteNameTwo");
					}}
				/>
			</View>
		);
	}
}

class ScreenComponentTwo extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: "Second Screen",
			headerRight: (
				<Button
					title="Press me"
					onPress={() =>
						navigation.navigate("RouteNameThree", {
							number: 11
						})
					}
				/>
			),
			headerStyle: {
				backgroundColor: "orange"
			},
			headerTitleStyle: {
				flex: 1,
				textAlign: "center"
			},
			headerTitleContainerStyle: {
				left: 0
			},
			headerTintColor: "white"
		};
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
					borderWidth: 21,
					borderColor: "orange"
				}}
			>
				<Button
					title="Go to screen three"
					onPress={() => {
						this.props.navigation.navigate("RouteNameThree", {
							number: randomNumber()
						});
					}}
				/>
			</View>
		);
	}
}

class ScreenComponentThree extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: `Number is: ${navigation.getParam("number")}`,
			headerStyle: {
				backgroundColor: "purple"
			},
			headerTitleStyle: {
				flex: 1,
				textAlign: "center"
			},
			headerTitleContainerStyle: {
				left: 0
			},
			headerTintColor: "white"
		};
	};

	/* static navigationOptions = {
		headerTitle: "TODO",
		headerLayoutPreset: "center",
		headerStyle: {
			backgroundColor: "purple"
		},
		headerTitleStyle: {
			flex: 1,
			textAlign: "center"
		},
		headerTitleContainerStyle: {
			left: 0
		},
		headerTintColor: "white"
	}; */

	render() {
		return (
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
					borderWidth: 21,
					borderColor: "purple"
				}}
			>
				<Text style={{ fontSize: 55, paddingBottom: 21 }}>
					{this.props.navigation.getParam("number")}
				</Text>
				<Button
					title="New Number"
					onPress={() => {
						this.props.navigation.setParams({
							number: randomNumber()
						});
					}}
				/>
				<Button
					title="Go Back"
					onPress={() => {
						this.props.navigation.goBack();
					}}
				/>
			</View>
		);
	}
}

const MainNavigator = createStackNavigator({
	RouteNameOne: ScreenComponentOne,
	RouteNameTwo: ScreenComponentTwo,
	RouteNameThree: ScreenComponentThree
});

const AppNavigator = createAppContainer(MainNavigator);

export default class App extends Component {
	render() {
		return <AppNavigator />;
	}
}
