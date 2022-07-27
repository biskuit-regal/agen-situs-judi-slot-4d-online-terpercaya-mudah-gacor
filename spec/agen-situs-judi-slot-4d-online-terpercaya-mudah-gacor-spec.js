'use babel';

import AgenSitusJudiSlot4dOnlineTerpercayaMudahGacor from '../lib/agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('AgenSitusJudiSlot4dOnlineTerpercayaMudahGacor', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor');
  });

  describe('when the agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor')).toExist();

        let agenSitusJudiSlot4dOnlineTerpercayaMudahGacorElement = workspaceElement.querySelector('.agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor');
        expect(agenSitusJudiSlot4dOnlineTerpercayaMudahGacorElement).toExist();

        let agenSitusJudiSlot4dOnlineTerpercayaMudahGacorPanel = atom.workspace.panelForItem(agenSitusJudiSlot4dOnlineTerpercayaMudahGacorElement);
        expect(agenSitusJudiSlot4dOnlineTerpercayaMudahGacorPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor:toggle');
        expect(agenSitusJudiSlot4dOnlineTerpercayaMudahGacorPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let agenSitusJudiSlot4dOnlineTerpercayaMudahGacorElement = workspaceElement.querySelector('.agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor');
        expect(agenSitusJudiSlot4dOnlineTerpercayaMudahGacorElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor:toggle');
        expect(agenSitusJudiSlot4dOnlineTerpercayaMudahGacorElement).not.toBeVisible();
      });
    });
  });
});
