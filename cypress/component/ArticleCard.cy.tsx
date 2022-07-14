import React from 'react';
import { ArticleCard } from '../../src/components';

describe('ArticleCard', () => {
  const articleCard = '[data-cy="article-card"]';
  const articleTitle = '[data-cy="article-title"]';
  const articleUsername = '[data-cy="article-username"]';
  const articlePublish = '[data-cy="article-publish"]';
  const articleImg = '[data-cy="article-img"]';

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
    cy.get(articleCard).should('have.class', 'w-full h-fit');
    cy.get(articleTitle).should('have.text', 'test');
    cy.get(articleUsername).should('have.text', 'test');
    cy.get(articlePublish).should('have.text', 'test');
    cy.get(articleImg).should('have.attr', 'src', 'test');
  });
});
