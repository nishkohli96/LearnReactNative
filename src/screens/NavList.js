import React, { useState, useEffect } from 'react';
import { BackHandler, Alert, Platform } from 'react-native';
import {
	FlatList,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Listdata } from '../constants/Listdata';
import Collapsible from 'react-native-collapsible';
import PropTypes from 'prop-types';

const NavList = ({ navigation }) => {
	/* Back Button Implementation For Android, to Close the app in this case */
	useEffect(() => {
		const backAction = () => {
			if (Platform.OS === 'android') {
				// if(  Stack.Screen.name === 'NavList'){
				Alert.alert('Hold on!', 'Close the App?', [
					{
						text: 'Cancel',
						onPress: () => null,
						style: 'cancel',
					},
					{
						text: 'YES',
						onPress: () => BackHandler.exitApp(),
					},
				]);
				//}
			}
			return true;
		};

		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction
		);

		return () => backHandler.remove();
	}, []);

	const expand_icon = require('../assets/icons/expand-icon.png');
	const collapse_icon = require('../assets/icons/collapse-icon.png');

	const [dataArr, setData] = useState(Listdata);

	/* Implement an expansion panel; onclick of the icon expands/contracts; clicking elsewhere
    takes to the item route page */
	const Item = ({ itemObject, onItemPress, panelCollapse }) => (
		<View>
			<View style={styles.rowAlign}>
				<View style={styles.textContainer}>
					<TouchableOpacity onPress={onItemPress}>
						<Text style={styles.listItem}>
							{itemObject.screenName}{' '}
						</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.btnAlign}>
					<TouchableOpacity onPress={panelCollapse}>
						<Image
							style={styles.buttonImage}
							source={
								itemObject.collapsed
									? expand_icon
									: collapse_icon
							}
						></Image>
					</TouchableOpacity>
				</View>
			</View>
			<Collapsible collapsed={itemObject.collapsed} align="center">
				<View style={styles.content}>
					<Text style={{ textAlign: 'center' }}>
						{itemObject.description}
					</Text>
				</View>
			</Collapsible>
		</View>
	);

	const renderItem = ({ item }) => (
		<Item
			itemObject={item}
			onItemPress={() => navigateToScreen(item)}
			panelCollapse={() => expandPanel(item)}
		/>
	);

	function expandPanel(item) {
		item.collapsed = !item.collapsed;
		/* Update the dataArr state */
		setData(
			dataArr.map((rec) =>
				rec.index === item.index
					? { ...rec, collapsed: !rec.collapsed }
					: rec
			)
		);
	}

	function navigateToScreen(item) {
		navigation.navigate(item.screenName);
	}

	return (
		<View style={styles.listContainer}>
			<Text style={styles.headerText}>
                Please Click on the List Item for Demo, or expand the item,for
                brief description. Code in same file as the item name
			</Text>
			<FlatList
				data={Listdata}
				renderItem={renderItem}
				keyExtractor={(item) => item.index}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		marginTop: 20,
	},
	headerText: {
		color: 'blue',
		fontSize: 15,
		padding: 10,
	},
	listItem: {
		color: 'orange',
		fontSize: 20,
		padding: 10,
	},
	textContainer: {
		width: 300,
		height: 50,
	},
	buttonImage: {
		width: 20,
		height: 20,
	},
	btnAlign: {
		justifyContent: 'center',
		paddingRight: 10,
		paddingLeft: 10,
		width: 50,
		alignItems: 'flex-end',
		backgroundColor: 'beige',
	},
	rowAlign: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#4e4e4e',
		justifyContent: 'space-between',
		margin: 5,
	},
});

/* To prevent the linting err */
NavList.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
	itemObject: PropTypes.object,
	onItemPress: PropTypes.func,
	panelCollapse: PropTypes.bool,
};

export default NavList;
