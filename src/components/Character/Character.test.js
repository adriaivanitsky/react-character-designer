import { render } from '@testing-library/react';
import Character from './Character';

test('renders the Character div', () => {
  const container = render(
    <Character
      head="horse-head"
      middle="red-middle"
      pants="leg-pants"
      headCount="0"
      phraseList={[]}
      input=""
    />
  );
  expect(container).toMatchSnapshot();
});
