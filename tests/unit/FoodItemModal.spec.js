'use strict';
import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import FoodListContainer from '../../src/components/FoodListContainer.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

Vue.use(Vuetify);

new Vue({
    vuetify: new Vuetify(),
});

const dummyCheckoutItems = {
    soups: {
        id: '1',
        name: 'soups',
        food: [
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
    }
}

describe('FoodListContainer.vue', () => {
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify();
    });

    it('The food item modal toggle is at false', () => {
        const newWrapper = shallowMount(FoodListContainer, {
            vuetify,
        });

        expect(newWrapper.vm.showModal).toEqual(false);
    });

    it('openModal set the modal toggle to true', () => {
        const newWrapper = shallowMount(FoodListContainer, {
            vuetify,
            data() {
                return {
                    foodItems: dummyCheckoutItems
                }
            }
        });

        const listItem = newWrapper.find('.card-container');
        listItem.trigger('click');

        expect(newWrapper.vm.showModal).toEqual(true);
    });

    it('Two food items in the food category', () => {
        const newWrapper = mount(FoodListContainer, {
            vuetify,
            data() {
                return {
                    foodItems: dummyCheckoutItems
                }
            }
        });

        const foodItems = newWrapper.findAll('.card-container');

        expect(foodItems).toBeTruthy();
        expect(foodItems.length).toEqual(2);
    })
})