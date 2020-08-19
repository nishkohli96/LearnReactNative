import React from 'react';

import Index from './src/screens/Index';
// import MatTabBottom from './src/screens/MatTabBottom';
// import NavDrawer from './src/screens/NavDrawer';
// import MatTabTop from './src/screens/MatTabTop';

export default function App() {
    return <Index />;
}

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
