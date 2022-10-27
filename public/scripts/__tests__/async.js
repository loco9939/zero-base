const fetchDataPromise = (data, timeout = 1000, shouldReject = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!shouldReject) {
                resolve(data);
            } else {
                reject({message:'error'});
            }
        }, timeout);
    })
}


test('Async : 데이터는 `피넛 버터`입니다.', async () => {
    try {
        const data = await fetchDataPromise('피넛 버터');
        expect(data).toBe('피넛 버터');
    } catch (error) {
        expect(error).toMatch('error');
    }
});

test('Async : 데이터는 `피넛 버터`입니다.', async () => {
    await expect(fetchDataPromise('피넛 버터')).resolves.toBe('피넛 버터');
});