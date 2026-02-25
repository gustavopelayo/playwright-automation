import {test, expect} from '@playwright/test';  
import { assert } from 'console';

test('with all fields filled',{
    tag: '@Fields'
}, async ({page}) => {

    console.log('This test will run with all fields filled');
});

test('with only required fields filled', {
    tag: '@Fields, @Minimal'
}, async ({page}) => {

    console.log('This test will run with only required fields filled');
});

test('with no fields filled', {
    tag: '@Fields, @None'
}, async ({page}) => {


    console.log('This test will run with no fields filled');
});