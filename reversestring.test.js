const { TestScheduler } = require('jest');
const reverseString = require('./reversestring');

test('reverseStrin function exists', ()=>{
    expect(reverseString).toBeDefined();
});

test('String reverses', ()=>{
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses', ()=>{
    expect(reverseString('Hello')).toEqual('olleh');
});