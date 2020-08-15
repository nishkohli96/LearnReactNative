import React, { useCallback } from 'react';
import { Alert, Button, Linking, StyleSheet, View } from 'react-native';

const supportedURL = 'https://google.com';

const unsupportedURL = 'slack://open?team=123456';

const OpenURLButton = ({ url, children }) => {
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
            <Button title={children} onPress={handlePress} />
        </View>
    );
};

const OpenSettingsButton = ({ children }) => {
  const handlePress = useCallback(async () => {
    /* Open the custom settings if the app has one */
    await Linking.openSettings();
  }, []);

  return( <View style={styles.btn}> 
  <Button title={children} onPress={handlePress} />
    </View>);
};

const DefaultApps = () => {
    return (
        <View style={styles.container}>
            <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
            <OpenURLButton url={unsupportedURL}>
                Open Unsupported URL
            </OpenURLButton>
            <OpenSettingsButton>Open App Settings</OpenSettingsButton>
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
    btn: { marginTop: 20 },
});

export default DefaultApps;
