const mockFn = jest.fn();

const numberList = [9, 16];

numberList.forEach((n) => mockFn(n, n + 2));

test('1회 이상 호출', () => {
  expect(mockFn).toBeCalled();
});

test('정확히 numberList.length 만큼 호출', () => {
  expect(mockFn).toBeCalledTimes(numberList.length);
});

test('인자 값 9, 11 또는 16, 18을 받음', () => {
  expect(mockFn).toBeCalledWith(9, 11);
  expect(mockFn).toBeCalledWith(16, 18);
});

test('마지막 인자 값은 16, 18', () => {
  expect(mockFn).lastCalledWith(9, 11); // 오류
//   expect(mockFn).lastCalledWith(16, 18);
});