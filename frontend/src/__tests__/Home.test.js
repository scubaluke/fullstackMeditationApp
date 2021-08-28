
import { mount } from 'enzyme';
import Home from '../pages/Home'

test('renders Home component', () => {
    const wrapped = mount(<Home match={{ url: "/home"}}  />
  )
    expect(wrapped.find('.awssld').length).toEqual(1)
  wrapped.unmount()
});