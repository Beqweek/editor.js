describe('Slash keydown', function () {
  describe('pressed in empty block', function () {
    it('should open Toolbox', () => {
      cy.createEditor({
        data: {
          blocks: [
            {
              type: 'paragraph',
              data: {
                text: '',
              },
            },
          ],
        },
      });

      cy.get('[data-cy=editorjs]')
        .find('.ce-paragraph')
        .click()
        .type('/');

      cy.get('[data-cy="toolbox"]')
        .get('.ce-popover')
        .should('be.visible');
    });
  });

  describe('pressed in non-empty block', function () {
    it('should not open Toolbox and just add the / char', () => {
      cy.createEditor({
        data: {
          blocks: [
            {
              type: 'paragraph',
              data: {
                text: 'Hello',
              },
            },
          ],
        },
      });

      cy.get('[data-cy=editorjs]')
        .find('.ce-paragraph')
        .click()
        .type('/');

      cy.get('[data-cy="toolbox"]')
        .get('.ce-popover')
        .should('not.be.visible');

      /**
       * Block content should contain slash
       */
      cy.get('[data-cy=editorjs]')
        .find('.ce-paragraph')
        .invoke('text')
        .should('eq', 'Hello/');
    });
  });
});

describe('CMD+Slash keydown', function () {
  it('should open Block Tunes', () => {
    cy.createEditor({
      data: {
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: '',
            },
          },
        ],
      },
    });

    cy.get('[data-cy=editorjs]')
      .find('.ce-paragraph')
      .click()
      .type('{cmd}/');

    cy.get('[data-cy="block-tunes"]')
      .get('.ce-popover')
      .should('be.visible');
  });
});
