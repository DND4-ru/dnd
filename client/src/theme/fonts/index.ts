// eslint-disable-next-line import/no-unresolved
import * as CSS from 'csstype';

import Bold from './Bellota-Bold.ttf';
import BoldItalic from './Bellota-BoldItalic.ttf';
import Italic from './Bellota-Italic.ttf';
import Light from './Bellota-Light.ttf';
import LightItalic from './Bellota-LightItalic.ttf';
import Regular from './Bellota-Regular.ttf';
import { makeSrc } from './utils';


const src = makeSrc('Bellota');
export const bellotaFonts: CSS.FontFace[] = [
    {
        fontFamily: 'Bellota Bold',
        src: src('Bold', Bold),
        fontWeight: 'bold',
        fontStyle: 'normal',
    }, {
        fontFamily: 'Bellota Bold',
        src: src('Bold Italic', BoldItalic),
        fontWeight: 'bold',
        fontStyle: 'italic',
    }, {
        fontFamily: 'Bellota Regular',
        src: src('Regular', Regular),
        fontWeight: 400,
        fontStyle: 'regular',
    }, {
        fontFamily: 'Bellota Regular',
        src: src('Regular Italic', Italic),
        fontWeight: 400,
        fontStyle: 'italic',
    }, {
        fontFamily: 'Bellota Light',
        src: src('Light', Light),
        fontWeight: 300,
        fontStyle: 'normal',
    }, {
        fontFamily: 'Bellota Light',
        src: src('Light Italic', LightItalic),
        fontWeight: 300,
        fontStyle: 'italic',
    },
];

