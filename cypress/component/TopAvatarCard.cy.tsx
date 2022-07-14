import React from 'react';
import { TopAvatarCard } from '../../src/components';

describe('TopAvatarCard', () => {
  const ta = '[data-cy="ta"]';
  const taAvatar = '[data-cy="ta-avatar"]';
  const taName = '[data-cy="ta-name"]';
  const tatitle = '[data-cy="ta-title"]';
  const taProductImg = '[data-cy="ta-product-img"]';
  const taRate = '[data-cy="ta-rate"]';
  const taReviews = '[data-cy="ta-reviews"]';
  const taProductname = '[data-cy="ta-product-name"]';
  const taDescription = '[data-cy="ta-product-description"]';
  const taProductColor = '[data-cy="ta-product-color"]';

  it('Component porops test', () => {
    cy.mount(
      <TopAvatarCard
        key="1"
        className="w-[198.4px]"
        keyIndex="1"
        data={{
          avatarUrl: 'test',
          title: 'test',
          name: 'test',
          rate: 1,
          stars: 1,
          reviews: 1,
          productUrl: 'test',
          productName: 'test',
          productDescription: 'test',
          productColor: 'test',
        }}
      />,
    );
    cy.get(ta).should('have.class', 'w-[198.4px]');
    cy.get(taAvatar).should('have.attr', 'src', 'test');
    cy.get(taProductImg).should('have.attr', 'src', 'test');
    cy.get(taName).should('have.text', 'test');
    cy.get(tatitle).should('have.text', 'test');
    cy.get(taRate).should('have.text', '1');
    cy.get(taReviews).should('have.text', '(1)');
    cy.get(taProductname).should('have.text', 'test');
    cy.get(taDescription).should('have.text', 'test');
    cy.get(taProductColor).should('have.text', 'test');
  });
});
