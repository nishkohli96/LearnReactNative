import React from 'react';

import Index from './src/screens/Index';
import NestedNav from './src/screens/NestedNav';
import AppContextProvider from './AppContextProvider';
export default function App() {
    return (
        <AppContextProvider>
    <Index />
    </AppContextProvider>
    );
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
