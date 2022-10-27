const fetchData = (callback, data, timeout = 1000) => {
  setTimeout(()=>callback(data),timeout);
}

test('전달된 데이터는 `피넛 버터`입니다.', () => {
  const callback = () => {
    try {
      expect(data).toBe('피넛 버터');
      // done();
    } catch (error) {
      console.log(error);
      // done(error);
    }
  };

  fetchData(callback, '피넛 버터');
});