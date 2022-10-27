/* eslint-disable jest/expect-expect */
import { fetchBooks } from '../../utils/fetchBooks';
import { currencyKR } from '../../utils/index';

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
      res(data.map(v => ({...v,price:currencyKR(v.price)})))
    });
  } catch(e) {
    console.error(e.message);
  }
  // 통신에 실패한 경우 오류 메시지를 throw 합니다.
}

test.only('도서 목록 가져오기', async () => {
  // 테스트 코드 작성
  const data = await getBooks();
  data.forEach(v => {
    expect(v.price).toBe(v.price)
  })
});

// -----------------------------------------------------------------------------
// 제목으로 도서 목록 검색
// -----------------------------------------------------------------------------

function searchBooksByTitle(query) {
  // Async 함수를 활용해보세요.
  // 모든 도서 목록을 가져온 후, 전달 받은 쿼리와 도서 제목을 포함하는 결과를 반환합니다.
  // 통신에 실패한 경우 오류 메시지를 throw 합니다.
}

test('제목으로 도서 목록 검색', () => {
  // 테스트 코드 작성
  searchBooksByTitle('파랑');
});

// -----------------------------------------------------------------------------
// 제목 또는 저자로 도서 찾기
// -----------------------------------------------------------------------------

function findBook(query, by = 'title') {
  // Promise 또는 Async 함수 중 1가지 방법을 선택합니다.
  // 모든 도서 목록을 가져온 후, 전달 받은 매개변수를 사용해 결과(1개)를 반환합니다.
  // 통신에 실패한 경우 오류 메시지를 throw 합니다.
}

test('제목으로 도서 찾기', () => {
  // 테스트 코드 작성
  findBook('연애');
});

test('저자로 도서 찾기', () => {
  // 테스트 코드 작성
  findBook('정이담', 'author');
});

// -----------------------------------------------------------------------------
// 도서 가격 총합 구하기
// -----------------------------------------------------------------------------

function calcurateBooksPrice(query) {
  // Promise 또는 Async 함수 중 1가지 방법을 선택합니다.
  // searchBooksByTitle() 함수에 전달 받은 매개변수를 사용해 도서 목록을 가져옵니다.
  // 도서 목록을 순회해 가격을 모두 더한 결과 값을 반환합니다.
  // 통신에 실패한 경우 오류 메시지를 throw 합니다.
}

test('도서 가격 총합 구하기', async () => {
  // 테스트 코드 작성
  calcurateBooksPrice('파랑');
});
