import Ember from 'ember';

var pizzas = [{
  id: 1,
  title: 'Margherita',
  size: '34cm',
  price: '9€',
  toppings: 'Tomatensauce, Käse',
  image: 'http://www.blizzeria.de/braunschweig/pizzen/braunschweig/res/images/pizza_margherita_k.png'
}, {
  id: 2,
  title: 'Diavolo',
  size: '30cm',
  price: '12€',
  toppings: 'Tomatensauce, Käse, Schinken, scharfe Pfefferoni',
  image: 'http://liefercar.de/wp-content/uploads/2015/10/pizza02-e1445409248976.png'
}, {
  id: 3,
  title: 'Hawaii',
  size: '34cm',
  price: '10€',
  toppings: 'Tomatensauce, Käse, Schinken, Ananas',
  image: 'https://d1d8i24om29pt.cloudfront.net/static/desktop/products/pizza-hawaii.png'
}, {
  id: 4,
  title: 'Salami',
  size: '40cm',
  price: '15€',
  toppings: 'Tomatensauce, Käse, Salami',
  image: 'http://bellapizzeria.at/wp-content/uploads/2015/12/salami-pizza.png'
}];

export default Ember.Route.extend({
   model() {
    return pizzas;
  }
});
