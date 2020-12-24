import * as CSS from 'csstype';
import { makeSrc } from './utils';

import Regular from './Bellota-Regular.ttf';
import Italic from './Bellota-Italic.ttf';
import Light from './Bellota-Light.ttf';
import LightItalic from './Bellota-LightItalic.ttf';
import Bold from './Bellota-Bold.ttf';
import BoldItalic from './Bellota-BoldItalic.ttf';


const src = makeSrc('Bellota');
export const bellotaFonts: CSS.FontFace[] = [
    {
        fontFamily: 'Belotta Bold',
        src: src('Bold', Bold),
        fontWeight: 'bold',
        fontStyle: 'normal',
    }, {
        fontFamily: 'Belotta Bold',
        src: src('Bold Italic', BoldItalic),
        fontWeight: 'bold',
        fontStyle: 'italic',
    }, {
        fontFamily: 'Belotta Regular',
        src: src('Regular', Regular),
        fontWeight: 400,
        fontStyle: 'regular',
    }, {
        fontFamily: 'Belotta Regular',
        src: src('Regular Italic', Italic),
        fontWeight: 400,
        fontStyle: 'italic',
    }, {
        fontFamily: 'Belotta Light',
        src: src('Light', Light),
        fontWeight: 300,
        fontStyle: 'normal',
    }, {
        fontFamily: 'Belotta Light',
        src: src('Light Italic', LightItalic),
        fontWeight: 300,
        fontStyle: 'italic',
    },
];

