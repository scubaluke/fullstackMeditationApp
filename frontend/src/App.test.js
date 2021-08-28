import App from './App';
import { mount } from 'enzyme';

describe('upon start up', () => {
    const wrapped = mount(<App  />)

    test('renders App', () => {
      expect(wrapped.find(App).length).toEqual(1)
    })

    test('renders BrowserRouter', () => {
      expect(wrapped.find('BrowserRouter').length).toEqual(1)
    }) 

    test('renders Layout component', () => {
    expect(wrapped.find('Layout').length).toEqual(1)
  })
});
