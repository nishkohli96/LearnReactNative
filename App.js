import React from 'react';

import Index from './src/screens/Index';
import NestedNav from './src/screens/NestedNav';
import { I18nextProvider } from 'react-i18next';
import geti18config from './src/i18n/i18config';
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Require cycle:'
])
const AppConfig = () => {
    return (
        <I18nextProvider i18n={geti18config()}>
            <Index />
        </I18nextProvider>
    );
};

export default function App() {
    return <AppConfig />;
    // return <NestedNav />;
}

/* Uncommented NestedNav & Comment to see Tabbled Layout with Drawer. */

/* Removing Linting coz its so damn annoying 
    Restore by copying this in lint-staged in package.json
*/
// "lint-staged": {
//     "src/**/*.{js,jsx}": [
//         "eslint --ext .jsx --ext .js src/ --fix"
//     ],
//     "./src/**": [
//         "prettier --write ."
//     ]
// },
