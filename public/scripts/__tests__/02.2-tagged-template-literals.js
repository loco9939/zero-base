/* eslint-disable jest/no-focused-tests */
// -----------------------------------------------------------------------------
// TODO
// -----------------------------------------------------------------------------
// - [ ] styled, $styled 함수를 작성합니다.
// - [ ] 태그 템플릿(Tagged Template) 구문을 활용해봅니다.
// - [ ] 커링 함수를 활용해 사용의 편의성을 높여봅니다.
// -----------------------------------------------------------------------------

const virtualNode = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

const styled = (styleList, node) => {
  node.style.cssText = styleList.reduce(
    (styleValue, currentStyleValue) => styleValue + currentStyleValue.trim(),
    ''
  );
  return node;
};

const $styled = (node) => (styleRules) => {
  node.style.cssText = styleRules.reduce(
    (styleValue, currentStyleValue) => styleValue + currentStyleValue.trim(),
    ''
  );
  return node;
};

// ------------------------------------------------------------------------------
// TEST
// ------------------------------------------------------------------------------
// - [ ] Jest 테스트 러너를 구동한 후, 테스트가 성공하도록 함수 로직을 구성합니다.
// ------------------------------------------------------------------------------

describe('styled 유틸리티 suite', () => {
  let values = {
    margin: '10px',
    color: '#d08471',
  };

  test('styled 유틸리티 ← 일반 함수 구문 활용', () => {
    const received = styled(
      [`margin:${values.margin};`, `color:${values.color};`],
      virtualNode
    );

    expect(received.style.cssText).toBe(virtualNode.style.cssText);
  });

  test('styled 유틸리티 ← 태그 템플릿 구문 활용', () => {
    const received = styled`
      ${virtualNode}
      margin: ${values.margin};
      color: ${values.color};
    `;

    expect(received.style.cssText).toBe(virtualNode.style.cssText);
  });

  test('$styled 유틸리티 ← 커링 + 태그 템플릿 구문 활용', () => {
    const received = $styled(virtualNode)`
      margin: ${values.margin};
      color: ${values.color};
    `;

    expect(received).toStrictEqual(virtualNode);
  });
});
