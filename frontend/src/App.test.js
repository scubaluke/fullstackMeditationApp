import { render, screen } from '@testing-library/react';
import App from './App';
import Root from './Root'
import NavLinks from './components/navMenu/NavLinks';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Home from './pages/Home'



test('renders learn react link', () => {
  // const wrapped = mount(<MemoryRouter initialEntries={['/home']} >
  //   <App  />
  // </MemoryRouter>
  // )
  // console.log(wrapped.debug());

    const wrapped = mount(<Home match={{ url: "/home"}}  />
  )
  // console.log(wrapped.debug());
  // console.log(wrapped.find('.awssld').length);
    // console.log(wrapped.find('.awssld__wrapper').length);


  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
