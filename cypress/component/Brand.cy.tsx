import React from 'react';
import { Brands } from '../../src/components';

describe('Brands', () => {
  const brand = '[data-cy="brand-img"]';
  it('Component porops test', () => {
    cy.mount(<Brands brandSrc="test" key="1" />);
    cy.get(brand).should('have.attr', 'src', 'test');
  });
});
