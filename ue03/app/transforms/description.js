import Transform from 'ember-data/transform'

export default Transform.extend({
  deserialize(serialized) {
    return serialized.title
  },
  serialize(deserialized) {
    return {title: deserialized}
  }
})
