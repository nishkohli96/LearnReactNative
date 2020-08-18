import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class WebViewComp extends Component {
	render() {
		return (
			<WebView
				source={{
					uri: 'https://pokeapi.co/',
				}}
				// style={{ marginTop: 20 }}
			/>
		);
	}
}

export default WebViewComp;
