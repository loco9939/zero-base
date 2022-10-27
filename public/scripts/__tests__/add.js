const add = list => list.reduce((acc,cur) => acc+cur,0);

let numList = [2,3,4];

test.skip('add(numList)는 5보다 크다', () => {
    expect(add(numList)).toBeGreaterThan(5)
    numList = [2,3,4,5];
})

test('add(numList)는 10보다 작다', () => {
    expect(add(numList)).toBeLessThan(10);
})