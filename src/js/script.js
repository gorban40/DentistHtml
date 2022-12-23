'use strict';
import modals from './modules/modal';
import accordion from './modules/accordion';
import slider from './modules/slider';
import activeSections from './modules/activeSections';
import navSlide from './modules/menu';
import form from './modules/form';
import mask from './modules/mask';
import {mask2} from './modules/mask';
// import btnSend from './modules/sendBtn';

window.addEventListener('DOMContentLoaded', () => {
    accordion();
    modals();
    activeSections();
    navSlide();
    form();
    // btnSend();
});





