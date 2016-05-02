import Ember from 'ember'
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin'

export default Ember.Route.extend(ApplicationRouteMixin, {

  fetchCurrentUser() {
    const authentication = this.get('session.data.authenticated')
    console.log(authentication)
  },

  actions: {
    sessionAuthenticationSucceeded() {
      return this
        .fetchCurrentUser()
        .then(() => this.transitionTo('index'))
    }
  },

  beforeModel(transition) {
    this._super(transition)
    if (this.get('session.isAuthenticated')) {
      return this.fetchCurrentUser()
    }
  },

  model() {
    return this.store.findAll('project')
  }

})
