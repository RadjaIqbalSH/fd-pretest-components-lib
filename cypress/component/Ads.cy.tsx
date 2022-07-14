import React from 'react';
import { Ads } from '../../src/components';

describe('Ads', () => {
  const ads = '[data-cy="ads"]';
  const adsLabel1 = '[data-cy="ads-label-1"]';
  const adsLabel2 = '[data-cy="ads-label-2"]';

  it('Component porops test', () => {
    cy.mount(<Ads className="w-[970px] h-[250px]" label="test" label2="test" />);
    cy.get(ads).should('have.class', 'w-[970px] h-[250px]');
    cy.get(adsLabel1).should('have.text', 'test');
    cy.get(adsLabel2).should('have.text', 'test');
  });
});
