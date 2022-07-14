import React from 'react';
import { Brands } from '../../src/components';

describe('Brands', () => {
  it('Component porops test', () => {
    cy.mount(<Brands brandSrc="test" key="1" />);
    cy.get('[data-cy="brand-img"]').should('have.attr', 'src', 'test');
  });
});
