import * as ReactDOM from 'react-dom';
import { describe, it } from "@jest/globals";

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.unmountComponentAtNode(div);
  });
});
