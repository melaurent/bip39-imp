import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

declare var bip39
declare var bip39_imp

@Component({
  selector: 'bip39-imp',
  template: `
    <div class = "content">
      <h1> {{title}} </h1>
      <input [(ngModel)]="seed.entropy" (ngModelChange)="seed.onEntropyChange()" placeholder="Entropy" size=100>
      <input [(ngModel)]="seed.bip39" (ngModelChange)="seed.onBipChange()" placeholder="BIP39 mnemonic" size=100>
      <input [(ngModel)]="seed.bip39_imp" (ngModelChange)="seed.onBipImpChange()" placeholder="BIP39-Imp mnemonic" size=100>
      <input [(ngModel)]="seed.seed" placeholder="Seed in hexa" size=100 disabled>
      <button (click)="seed.generate()">Generate</button>

    </div>
  `
})

class AppComponent {
  title = 'Bip39';
  seed = {
    entropy: '',
    seed: '',
    bip39: '',
    bip39_imp: '',
    onEntropyChange: function () {
      try {
        this.bip39_imp = bip39_imp.entropyToMnemonic(this.entropy);
        this.bip39 = bip39.entropyToMnemonic(this.entropy);
        this.seed = bip39.mnemonicToSeedHex(this.bip39);
      } catch (e) {
        this.bip39 = "";
        this.bip39_imp = "";
        this.seed = "";
      }

    },
    onBipChange: function () {

      try {
        this.entropy = bip39.mnemonicToEntropy(this.bip39);
        this.seed = bip39.mnemonicToSeedHex(this.bip39);
      } catch (e) {
        this.entropy = "";
        this.seed = "";
      }
      this.bip39_imp = bip39_imp.entropyToMnemonic(this.entropy);

    },
    onBipImpChange: function () {
      this.entropy = bip39_imp.mnemonicToEntropy(this.bip39_imp);
      this.bip39 = bip39.entropyToMnemonic(this.entropy);
      this.seed = bip39.mnemonicToSeedHex(this.bip39);
    },
    generate: function () {
      this.bip39 = bip39.generateMnemonic()
      this.onBipChange()
    }
  }
}


bootstrap(AppComponent);
