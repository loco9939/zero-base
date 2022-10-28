/* eslint-disable jest/expect-expect */
import { fetchBooks } from '../../utils/fetchBooks';
import { currencyKR as currency } from '../../utils/index';

// -----------------------------------------------------------------------------
// TODO & TEST
// -----------------------------------------------------------------------------
// - [ ] 배열 메서드는 데이터를 다룰 때 자주 사용됩니다. 각 용도에 맞는 함수를 작성하세요.
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 도서 목록 가져오기
// -----------------------------------------------------------------------------

async function getBooks() {
  // 모든 도서 목록을 가져온 후, 목록을 순환하여 가격을 "원"화로 변경합니다.
  try {
    let data = await fetchBooks();
    return new Promise((res,rej) => {
      res(data.map(v => ({...v,price:currency(v.price)})))
    });
  } catch {
    // 통신에 실패한 경우 오류 메시지를 throw 합니다.
    throw new Error('통신에 실패했습니다.')
  }
}

test('도서 목록 가져오기', async () => {
  // 테스트 코드 작성
  const data = await getBooks();
  expect(data).toHaveLength(7);
});

// -----------------------------------------------------------------------------
// 제목으로 도서 목록 검색
// -----------------------------------------------------------------------------

async function searchBooksByTitle(query) {
  // Async 함수를 활용해보세요.
  // 모든 도서 목록을 가져온 후, 전달 받은 쿼리와 도서 제목을 포함하는 결과를 반환합니다.
  // 통신에 실패한 경우 오류 메시지를 throw 합니다.
  try {
    let data = await getBooks();
    data = data.filter(v => v.title.includes(query));
    return data;
  } catch {
    throw new Error('통신에 실패하였습니다.')
  }
}

test('제목으로 도서 목록 검색', async () => {
  // 테스트 코드 작성
  expect(await searchBooksByTitle('파랑')).toHaveLength(3);
});

// -----------------------------------------------------------------------------
// 제목 또는 저자로 도서 찾기
// -----------------------------------------------------------------------------

async function findBook(query, by = 'title') {
  // Promise 또는 Async 함수 중 1가지 방법을 선택합니다.
  // 모든 도서 목록을 가져온 후, 전달 받은 매개변수를 사용해 결과(1개)를 반환합니다.
  // 통신에 실패한 경우 오류 메시지를 throw 합니다.
  try {
    const data = await getBooks();
    return data.find(v => v[by].includes(query));
  } catch {
    throw new Error('통신에 실패했습니다.')
  }
}

describe('제목 또는 저자명으로 도서 찾기', () => {
  test('제목으로 도서 찾기', async () => {
    // 테스트 코드 작성
    const expected = {
      "id": "ISBN-9791166113239",
      "title": "연애의 행방",
      "author": "히가시노 게이고",
      "image": {
        "src": "/assets/9791166113239.jpeg",
        "width": 458
      },
      "price": "13,320원"
    }
    expect(await findBook('연애')).toStrictEqual(expected);
  });
  
  test('저자로 도서 찾기', async () => {
    // 테스트 코드 작성
    const expected = {
      "id": "ISBN-9791158888367",
      "title": "불온한 파랑",
      "author": "정이담",
      "image": {
        "src": "/assets/9791158888367.jpeg",
        "width": 458
      },
      "price": "12,420원"
    };
    expect(await findBook('정이담', 'author')).toStrictEqual(expected);
  });
})

// -----------------------------------------------------------------------------
// 도서 가격 총합 구하기
// -----------------------------------------------------------------------------

async function calcurateBooksPrice(query) {
    try {
      let data = await fetchBooks();
      data = data.filter(v => v.title.includes(query)).map(v => v.price);
      return currency(data.reduce((acc,cur) => acc+cur,0));
    } catch {
      throw new Error('통신에 실패했습니다.');
    }
  // Promise 또는 Async 함수 중 1가지 방법을 선택합니다.
  // searchBooksByTitle() 함수에 전달 받은 매개변수를 사용해 도서 목록을 가져옵니다.
  // 도서 목록을 순회해 가격을 모두 더한 결과 값을 반환합니다.
  // 통신에 실패한 경우 오류 메시지를 throw 합니다.
}

test.only('도서 가격 총합 구하기', async () => {
  // 테스트 코드 작성
  const expected = '40,140원';
  const result = await calcurateBooksPrice('파랑')
  expect(result).toBe(expected);
});
