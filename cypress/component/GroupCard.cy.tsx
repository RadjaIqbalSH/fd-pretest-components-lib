import React from 'react';
import { GroupCard } from '../../src/components';

describe('GroupCard', () => {
  const group = '[data-cy="group"]';
  const groupImage = '[data-cy="group-img"]';
  const groupTitle = '[data-cy="group-title"]';
  const groupDescription = '[data-cy="group-description"]';

  it('Component porops test', () => {
    cy.mount(
      <GroupCard
        key="1"
        className="w-[248px] h-fit"
        keyIndex="1"
        data={{
          avatarUrl: 'test',
          title: 'test',
          description: 'test',
        }}
      />,
    );
    cy.get(group).should('have.class', 'w-[248px] h-fit');
    cy.get(groupImage).should('have.attr', 'src', 'test');
    cy.get(groupTitle).should('have.text', 'test');
    cy.get(groupDescription).should('have.text', 'test');
  });
});
