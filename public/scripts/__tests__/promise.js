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

test('Promise: 데이터는 `피넛 버터`입니다.', () => {
    return fetchDataPromise('피넛 버터').then(data => {
        expect(data).toBe('피넛 버터')
    }).catch(e => {
        expect(e).toMatch('error')
    })
})