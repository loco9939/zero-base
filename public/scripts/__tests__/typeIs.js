const typeIs = data => {
    if (typeof data !== 'object') {
        throw new TypeError(`${data}는 'object' 타입이 아닙니다.`);
    }
    if (Array.isArray(data)) {
        return 'array';
    } else if (data === null) {
        return 'null';
    }
    return 'object';
}

// test(`{} 타입은 'object'이다`, () => {
//     const data = {};
//     expect(typeIs(data)).toBe('object');
// })

// test(`[] 타입은 'array' 이다.`, () => {
//     const data = [];
//     expect(typeIs(data)).toBe('array');
// })

// test(`null 타입은 'null' 이다.`, () => {
//     const data = null;
//     expect(typeIs(data)).toBe('null');
//   });