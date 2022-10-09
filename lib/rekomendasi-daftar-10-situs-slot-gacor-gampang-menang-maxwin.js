'use babel';

import RekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinView from './rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin-view';
import { CompositeDisposable } from 'atom';

export default {

  rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinView = new RekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinView(state.rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'rekomendasi-daftar-10-situs-slot-gacor-gampang-menang-maxwin:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinView.destroy();
  },

  serialize() {
    return {
      rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinViewState: this.rekomendasiDaftar10SitusSlotGacorGampangMenangMaxwinView.serialize()
    };
  },

  toggle() {
    console.log('RekomendasiDaftar10SitusSlotGacorGampangMenangMaxwin was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
