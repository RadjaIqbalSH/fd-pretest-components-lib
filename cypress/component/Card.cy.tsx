import React from 'react';
import { Card } from '../../src/components';

describe('Card', () => {
  const card = '[data-cy="card"]';
  const cardImage = '[data-cy="card-img"]';
  const cardRate = '[data-cy="card-rate"]';
  const cardReviews = '[data-cy="card-reviews"]';
  const cardSkinType = '[data-cy="card-skin-type"]';
  const cardProductName = '[data-cy="card-product-name"]';
  const cardProductDescription = '[data-cy="card-product-description"]';
  const cardProductColor = '[data-cy="card-product-color"]';

  it('Component porops test with skin type', () => {
    cy.mount(
      <Card
        key="1"
        className="w-[198.4px]"
        keyIndex="1"
        data={{
          skinType: 'test',
          rate: 3.5,
          stars: 3,
          reviews: 10,
          productUrl: 'test',
          productName: 'test',
          productDescription: 'test',
          productColor: 'test',
        }}
      />,
    );
    cy.get(card).should('have.class', 'w-[198.4px]');
    cy.get(cardImage).should('have.attr', 'src', 'test');
    cy.get(cardRate).should('have.text', '3.5');
    cy.get(cardSkinType).should('have.text', 'test');
    cy.get(cardReviews).should('have.text', '(10)');
    cy.get(cardProductName).should('have.text', 'test');
    cy.get(cardProductDescription).should('have.text', 'test');
    cy.get(cardProductColor).should('have.text', 'test');
  });

  it('Component porops test without skin type', () => {
    cy.mount(
      <Card
        key="1"
        className="w-[198.4px]"
        keyIndex="1"
        data={{
          rate: 3.5,
          stars: 3,
          reviews: 10,
          productUrl: 'test',
          productName: 'test',
          productDescription: 'test',
          productColor: 'test',
        }}
      />,
    );
    cy.get(card).should('have.class', 'w-[198.4px]');
    cy.get(cardImage).should('have.attr', 'src', 'test');
    cy.get(cardRate).should('have.text', '3.5');
    cy.get(cardReviews).should('have.text', '(10)');
    cy.get(cardProductName).should('have.text', 'test');
    cy.get(cardProductDescription).should('have.text', 'test');
    cy.get(cardProductColor).should('have.text', 'test');
  });
});
