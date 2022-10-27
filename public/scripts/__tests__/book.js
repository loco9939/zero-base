import { book, fetchBook } from '../book';

// test('should a', () => {
// 	// 실제 `애프터 레인` Book 객체 생성
//   return expect(fetchBook()).resolves.toEqual(book);
// });

jest.mock('../book');

test('shold a', () => {
    fetchBook.mockReturnValue(book);
    expect(fetchBook()).toEqual({...book})
})