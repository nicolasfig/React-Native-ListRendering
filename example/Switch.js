import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { Button, View } from "react-native";

class ScreenComponentOne extends Component {
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
					title="Go to screen one"
					onPress={() => {
						this.props.navigation.navigate("RouteNameOne");
					}}
				/>
			</View>
		);
	}
}

const MainNavigator = createSwitchNavigator({
	RouteNameOne: ScreenComponentOne,
	RouteNameTwo: ScreenComponentTwo
});

const AppNavigator = createAppContainer(MainNavigator);

export default class App extends Component {
	render() {
		return <AppNavigator />;
	}
}
