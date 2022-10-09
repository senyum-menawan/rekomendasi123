'use babel';

import RekomendasiDaftar10SitusSlotGacorGampangMenangMaxwin from '../lib/rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('RekomendasiDaftar10SitusSlotGacorGampangMenangMaxwin', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin');
  });

  describe('when the rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin')).toExist();

        let rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinElement = workspaceElement.querySelector('.rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin');
        expect(rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinElement).toExist();

        let rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinPanel = atom.workspace.panelForItem(rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinElement);
        expect(rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin:toggle');
        expect(rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinElement = workspaceElement.querySelector('.rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin');
        expect(rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin:toggle');
        expect(rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinElement).not.toBeVisible();
      });
    });
  });
});
