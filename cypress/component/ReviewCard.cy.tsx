import React from 'react';
import { ReviewCard } from '../../src/components';

describe('ReviewCard', () => {
  const review = '[data-cy="review"]';
  const reviewAvatar = '[data-cy="review-avatar"]';
  const reviewName = '[data-cy="review-name"]';
  const reviewTitle = '[data-cy="review-title"]';
  const reviewImg = '[data-cy="review-img"]';
  const reviewProductName = '[data-cy="review-product-name"]';
  const reviewProductBrand = '[data-cy="review-product-brand"]';
  const reviewPublish = '[data-cy="review-publish"]';
  const reviewProductDescription = '[data-cy="review-product-description"]';

  it('Component porops test', () => {
    cy.mount(
      <ReviewCard
        key="1"
        className="w-[300px] sm:w-[352px] h-fit"
        keyIndex="1"
        data={{
          avatarUrl: 'test',
          name: 'test',
          title: 'test',
          productUrl: 'test',
          productName: 'test',
          productBrand: 'test',
          stars: 5,
          publish: 'test',
          productDescription: 'test',
        }}
      />,
    );
    cy.get(review).should('have.class', 'w-[300px] sm:w-[352px] h-fit');
    cy.get(reviewAvatar).should('have.attr', 'src', 'test');
    cy.get(reviewImg).should('have.attr', 'src', 'test');
    cy.get(reviewName).should('have.text', 'test');
    cy.get(reviewTitle).should('have.text', 'test');
    cy.get(reviewProductName).should('have.text', 'test');
    cy.get(reviewProductBrand).should('have.text', 'test');
    cy.get(reviewPublish).should('have.text', 'test');
    cy.get(reviewProductDescription).should('have.text', 'test');
  });
});
