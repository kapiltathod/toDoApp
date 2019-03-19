const schema = {
  itemName: {
    type: "string",
    min: 3,
    max: 255,
    message : {
      string: "Please check your item name",
      stringMin: "Your item name is too short",
      stringMax: "Your item name is too long"
    }
  },

  description: {
    type: "string",
    message : {
      string: "Please check your item name",
    }
  },

  comment: { type: "any"}
}

module.exports = schema;