'use babel';

import AgenSitusJudiSlot4dOnlineTerpercayaMudahGacorView from './agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor-view';
import { CompositeDisposable } from 'atom';

export default {

  agenSitusJudiSlot4dOnlineTerpercayaMudahGacorView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.agenSitusJudiSlot4dOnlineTerpercayaMudahGacorView = new AgenSitusJudiSlot4dOnlineTerpercayaMudahGacorView(state.agenSitusJudiSlot4dOnlineTerpercayaMudahGacorViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.agenSitusJudiSlot4dOnlineTerpercayaMudahGacorView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'agen-situs-judi-slot-4d-online-terpercaya-mudah-gacor:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.agenSitusJudiSlot4dOnlineTerpercayaMudahGacorView.destroy();
  },

  serialize() {
    return {
      agenSitusJudiSlot4dOnlineTerpercayaMudahGacorViewState: this.agenSitusJudiSlot4dOnlineTerpercayaMudahGacorView.serialize()
    };
  },

  toggle() {
    console.log('AgenSitusJudiSlot4dOnlineTerpercayaMudahGacor was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
