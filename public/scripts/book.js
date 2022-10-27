export const book = {
    isbn: '9791197301629',
    title: '애프터 레인',
    subtitle: '삶의 폭풍우로부터 나를 지키는 힘',
    pages: 176,
    price: {
      list: 14000,
      discount: 12600,
      discountRate: 0.1,
    },
  };
  
  export const fetchBook = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('실제 `애프터 레인` Book 객체 생성');
        resolve(book);
      }, 1000);
    });
  };