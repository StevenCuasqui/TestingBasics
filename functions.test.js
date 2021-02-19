const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () =>{
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2 + 2 to not equal 4', () =>{
    expect(functions.add(2,2)).not.toBe(5);
});

test('Should be null', () =>{
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () =>{
    expect(functions.checkValue(0)).toBeFalsy();
});

test('User should be Steven Cuasqui', () =>{
    expect(functions.createUser()).toEqual({
        firstName: 'Steven',
        lastName: 'Cuasqui'
    });
});

test('Should be under 1600', () =>{
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('There is no I in team', () =>{
    expect('team').not.toMatch(/I/i);
});

test('Admin should be in usernames', ()=>{
    usernames = ['Juan','Pedro','Ana'];
    expect(usernames).toContain('Juan');
})



// FETCH TESTS
test('User fetched name should be Leanne Graham',()=>{
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
})

// Async
test('User fetched name should be Leanne Graham', async ()=>{
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
})