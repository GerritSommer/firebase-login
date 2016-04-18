import Ember from "ember";

let { Helper, observer }  = Ember;
let service  = Ember.inject.service;
let readOnly = Ember.computed.readOnly;

function isNumerical(value) {
  return !isNaN(parseFloat(value));
}

export default Helper.extend({
    i18n:    service(),
    _locale: readOnly('i18n.locale'),

    compute(params, interpolations) {
      let { showCurrencySymbol = true, precision } = interpolations;

      let i18n      = this.get('i18n');
      let separator = i18n.t('globals.separator');
      let symbol    = showCurrencySymbol ? i18n.t('globals.currencySymbol') : '';
      let number    = params.get('firstObject');

      if ( isNumerical(number) ) {
        let convertedNumber;

        if ( precision === 'integer' ) {
          convertedNumber = parseInt(number).toString();
        } else {
          convertedNumber = number
            .toFixed(2)
            .replace('.', separator);
        }

        return `${convertedNumber} ${symbol}`;
      }

    },

    // TODO: Might not be good to use an observer for this
    //       Find a better solution
    _recomputeOnLocaleChange: observer('_locale', function() {
      this.recompute();
    })

  });

