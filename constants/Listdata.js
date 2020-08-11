import React from 'react';
import IntroScreen1 from '../screens/IntroScreens/IntroScreen1';
import IntroScreen2 from '../screens/IntroScreens/IntroScreen2';
import IntroScreen3 from '../screens/IntroScreens/IntroScreen3';

export const Listdata = [
    {
        screenName: 'IntroScreen1',
        component: <IntroScreen1 />,
        index: '0'
    },
    {
        screenName: 'IntroScreen2',
        component: <IntroScreen2 />,
        index: '1'
    },
    {
        screenName: 'IntroScreen3',
        component: <IntroScreen3 />,
        index: '2'
    },
];