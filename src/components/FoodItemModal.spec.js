'use strict';
import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import FoodItemModal from './FoodItemModal.vue';
import  { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';

Vue.use(Vuetify);

new Vue({
    vuetify: new Vuetify(),
});

const dummyCheckoutItems = [
    {
        id: 'f9',
        title: '4 Pack Of Potato Latkes',
        description:
            "A 4 pack of your fave latkes! Classic Jewish potato pancakes made with Yukon Gold potatoes. Served with your choice of applesauce or sour cream.",
        price: 19.96,
        image:
            'https://d3h3ny262c73zf.cloudfront.net/Zingerman%27s%20Delicatessen/1671225357409.png',
            category: 'jewish side'
    },
    {
        id: 'f13',
        title: '#48 Binny\'s Brooklyn Reuben',
        description:
        'Zingerman\'s pastrami, Swiss Emmental cheese, The Brinery sauerkraut & our own Russian dressing on grilled Pumpernickel bread from Zingerman\'s Bakehouse.',
        price: 18.99,
        image:
        'https://d3h3ny262c73zf.cloudfront.net/Zingerman%27s%20Delicatessen/1659371520363.png',
        category: 'pastrami'
    },
]

describe('FoodItemModal.vue', () => {
    let vuetify;

    beforeEach(() => {
        vuetify = new Vuetify();
    });

    it('Item deltails are present', () => {
        const newWrapper = mount(FoodItemModal, {
            vuetify,
            propData: dummyCheckoutItems[0],
        });

        newWrapper.find('button[buttonOne]').trigger('click');
        newWrapper.vm.$nextTick();
        
        expect(newWrapper.propData).to.be.exist;
    })
})