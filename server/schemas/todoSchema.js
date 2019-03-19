const schema = {
  title: {
    type: "string",
    min: 3,
    max: 255,
    messages: {
      string: "Please check your title name",
      stringMin: "Your title is too short",
      stringMax: "Your title is too long"
    }
  }
}

  module.exports = schema;