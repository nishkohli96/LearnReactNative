import React, { useCallback } from 'react';
import { Alert, Button, Linking, StyleSheet, View } from 'react-native';
import qs from 'qs';
import * as SMS from 'expo-sms';
import PropTypes from 'prop-types';

const supportedURL = 'https://github.com/nishkohli96/LearnReactNative';
/* or geo:37.484847,-122.148386 ; this URL opens in Google Maps */
const unsupportedURL = 'slack://open?team=123456';
const supbtnText = 'Open Supported URL';
const unsupbtnText = 'Open Unsupported URL';

const OpenURLButton = (url) => {
	const handlePress = useCallback(async () => {
		/* Checking if the link is supported for links with custom URL scheme. */
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			/* Opening the link with some app, if the URL scheme is "http" the web link should be opened
              by some browser in the mobile */
			await Linking.openURL(url);
		} else {
			Alert.alert(`Can't open this URL: ${url}`);
		}
	}, [url]);

	return (
		<View style={styles.btn}>
			<Button onPress={handlePress} title="Open URL" />
		</View>
	);
};
'';
const OpenSettingsButton = () => {
	const handlePress = useCallback(async () => {
		/* Open the custom settings if the app has one */
		await Linking.openSettings();
	}, []);

	return (
		<View style={styles.btn}>
			<Button title="Open App Settings" onPress={handlePress} />
		</View>
	);
};

async function sendEmail(to, subject, body, options = {}) {
	const { cc, bcc } = options;
	let url = `mailto:${to}`;

	// Create email link query
	const query = qs.stringify({
		subject: subject,
		body: body,
		cc: cc,
		bcc: bcc,
	});

	if (query.length) {
		url += `?${query}`;
	}

	// check if we can use this link
	const canOpen = await Linking.canOpenURL(url);

	if (!canOpen) {
		throw new Error('Provided URL can not be handled');
	}
	return Linking.openURL(url);
}

async function sendSMS(phonenum, msg) {
	/* Refer ->   https://docs.expo.io/versions/latest/sdk/sms/  */

	const isAvailable = await SMS.isAvailableAsync();
	if (isAvailable) {
		await SMS.sendSMSAsync(
			[phonenum, '9876543210'],
			'My sample HelloWorld message. ' + msg
		);
	} else {
		// misfortune... there's no SMS available on this device
	}
}

async function callonPhone(phonenum) {
	let url = `tel:${phonenum}`;
	/* Similarly for sms, `sms:${phonenum}` */
	const canOpen = await Linking.canOpenURL(url);
	if (!canOpen) {
		throw new Error('Provided URL can not be handled');
	}
	return Linking.openURL(url);
}

const LinkinginApps = () => {
	return (
		<View style={styles.container}>
			<OpenURLButton url={supportedURL} title={supbtnText} />
			<OpenURLButton url={unsupportedURL} title={unsupbtnText} />
			<OpenSettingsButton />

			<View style={styles.btn}>
				<Button
					onPress={() =>
						sendEmail(
							'dragon@gmail.com',
							'Hi There!',
							'Message Body',
							{
								cc:
                                    'elon@tesla.com; elon@solarcity.com; elon@stanford.edu',
							}
						)
					}
					title="Send Email"
				></Button>
			</View>

			<View style={styles.btn}>
				<Button
					onPress={() => callonPhone('+911234567890')}
					title="Make a call"
				></Button>
			</View>

			<View style={styles.btn}>
				<Button
					onPress={() => sendSMS('+911234567890', 'SMS Body Text')}
					title="Send SMS"
				></Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'beige',
	},
	btn: { marginTop: 20, width: 200 },
});

/* To prevent the linting err */
LinkinginApps.propTypes = {
	url: PropTypes.string,
};

export default LinkinginApps;
