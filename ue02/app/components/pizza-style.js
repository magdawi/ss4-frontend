import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  click() {
    //alert("Order se fucking pizza !")
    var pizza = this.pizza.title;
    var amount = $('#' + pizza)[0].innerHTML;
    $('#' + pizza)[0].innerHTML = parseInt(amount)+1;
  }
});
