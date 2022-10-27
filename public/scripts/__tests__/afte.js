let tester = {};

afterEach(() => {
    tester = {};
})

test('tester 객체 멤버 a 리스트', () => {
    tester.a = 'a';
    expect(tester).toStrictEqual({a:'a'});
})

test('tester 객체 멤버 b 리스트', () => {
    tester.b = 'b';
    expect(tester).toStrictEqual({b:'b'})
})