"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Bip39';
        this.seed = {
            entropy: '',
            seed: '',
            bip39: '',
            bip39_imp: '',
            onEntropyChange: function () {
                try {
                    this.bip39_imp = bip39_imp.entropyToMnemonic(this.entropy);
                    this.bip39 = bip39.entropyToMnemonic(this.entropy);
                    this.seed = bip39.mnemonicToSeedHex(this.bip39);
                }
                catch (e) {
                    this.bip39 = "";
                    this.bip39_imp = "";
                    this.seed = "";
                }
            },
            onBipChange: function () {
                try {
                    this.entropy = bip39.mnemonicToEntropy(this.bip39);
                    this.seed = bip39.mnemonicToSeedHex(this.bip39);
                }
                catch (e) {
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
                this.bip39 = bip39.generateMnemonic();
                this.onBipChange();
            }
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'bip39-imp',
            template: "\n    <div class = \"content\">\n      <h1> {{title}} </h1>\n      <input [(ngModel)]=\"seed.entropy\" (ngModelChange)=\"seed.onEntropyChange()\" placeholder=\"Entropy\" size=100>\n      <input [(ngModel)]=\"seed.bip39\" (ngModelChange)=\"seed.onBipChange()\" placeholder=\"BIP39 mnemonic\" size=100>\n      <input [(ngModel)]=\"seed.bip39_imp\" (ngModelChange)=\"seed.onBipImpChange()\" placeholder=\"BIP39-Imp mnemonic\" size=100>\n      <input [(ngModel)]=\"seed.seed\" placeholder=\"Seed in hexa\" size=100 disabled>\n      <button (click)=\"seed.generate()\">Generate</button>\n\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map