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

test('10 = 5 + 4.5 + 0.5', () => {
    expect(10).toBe(5 + 4.5 + 0.5);
  });
  
  test('true is Truthy', () => {
    expect(true).toBeTruthy();
  });
  
  // Book Group -------------------------------------------------------
  
  describe('Book', () => {
    let book = null;
  
    beforeAll(async () => {
      book = await requestBook.response();
    });
  
    // afterAll(async () => {
    //   book = await requestBook.responseEmpty();
    // });
  
    test('book ISBN은 `9791197301629`', () => {
      expect(book.isbn).toBe('9791197301629');
    });
  
    test('book title은 `애프터 레인`', () => {
      expect(book.title).toBe('애프터 레인');
    });
  
    test('book pages는 `176`', () => {
      expect(book.pages).toBe(176);
    });
  });