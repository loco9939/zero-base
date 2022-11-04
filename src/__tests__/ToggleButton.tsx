import { render, screen, cleanup } from '@testing-library/react';

/* -------------------------------------------------------------------------- */

type ToggleButtonProps = {
  onText?: string;
  offText?: string;
  on?: boolean;
};

function ToggleButton({
  onText = 'ON',
  offText = 'OFF',
  on = false,
}: ToggleButtonProps) {
  return <button type="button">{on ? onText : offText}</button>;
}

/* -------------------------------------------------------------------------- */

test('비활성 또는 활성 상태의 ToggleButton이 포함하는 텍스트는 "OFF" 또는 "ON" 이다.', () => {
  render(<ToggleButton />);
  let activeElement = screen.getByText('OFF');
  expect(activeElement).toBeInTheDocument();

  cleanup();

  render(<ToggleButton on />);
  activeElement = screen.getByText('ON');
  expect(activeElement).toBeInTheDocument();
});
