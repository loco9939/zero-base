const requestBook = {
    response(timeout = 500) {
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve({
              isbn: '9791197301629',
              title: '애프터 레인',
              subtitle: '삶의 폭풍우로부터 나를 지키는 힘',
              pages: 176,
              price: {
                list: 14000,
                discount: 12600,
                discountRate: 0.1,
              },
            }),
          timeout
        );
      });
    },
    // responseEmpty(timeout = 500) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => resolve(null), timeout);
    //   });
    // },
  };

  let book = null;

// beforeEach(async () => {
//   book = await requestBook.response();
// });

// afterEach(async () => {
//   book = await requestBook.responseEmpty();
// });

beforeAll(async () => {
    book = await requestBook.response();
  });
  
//   afterAll(async () => {
//     book = await requestBook.responseEmpty();
//   });

// test 1
test('book ISBN은 `9791197301629`', () => {
  expect(book.isbn).toBe('9791197301629');
});

// test 2
test('book title은 `애프터 레인`', () => {
  expect(book.title).toBe('애프터 레인');
});

// test 3
test('book pages는 `176`', () => {
  expect(book.pages).toBe(176);
});