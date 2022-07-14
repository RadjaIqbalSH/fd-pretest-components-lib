import React from 'react';
import { Ads } from '../../src/components';

describe('Ads', () => {
  it('Component porops test', () => {
    cy.mount(<Ads className="w-[970px] h-[250px]" label="test" label2="test" />);
    cy.get('[data-cy="ads"]').should('have.class', 'w-[970px] h-[250px]');
    cy.get('[data-cy="label-1"]').should('have.text', 'test');
    cy.get('[data-cy="label-2"]').should('have.text', 'test');
  });
});
