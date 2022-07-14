import React from 'react';
import { ArticleCard } from '../../src/components';

describe('ArticleCard', () => {
  it('Component porops test', () => {
    cy.mount(
      <ArticleCard
        className="w-full h-fit"
        keyIndex="1"
        data={{
          articleUrl: 'test',
          title: 'test',
          userName: 'test',
          publish: 'test',
        }}
      />,
    );
    cy.get('[data-cy="article-card"]').should('have.class', 'w-full h-fit');
    cy.get('[data-cy="article-title"]').should('have.text', 'test');
    cy.get('[data-cy="article-username"]').should('have.text', 'test');
    cy.get('[data-cy="article-publish"]').should('have.text', 'test');
    cy.get('[data-cy="article-img"]').should('have.attr', 'src', 'test');
  });
});
