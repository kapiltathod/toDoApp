const schema = {
  firstName: {
    type: "string",
    min: 3,
    max: 255,
    messages: {
      string: "Please check your first name",
      stringMin: "Your firstname is too short",
      stringMax: "Your firstname is too long"
        }
    },

    lastName: {
      type: "string",
      min: 3,
      max: 255,
      messages: {
        string: "Please check your first name",
        stringMin: "Your lastname is too short",
        stringMax: "Your lastname is too long"
        }
    },

    gender: {
      type: "enum", values: ["male", "female"],
      messages: {
        enum: "Category does not match the allowed values"
      }
    },

    email: {
      type: "email",
      messages: {
        email: "Entered email is not in the correct format"
      }
    },

    password: {
      type: "string",
      min: 3,
      max: 255,
      messages: {
        string: "Please check your password",
        stringMin: "Your password is too short",
        stringMax: "Your password is too long"
      }
    },
};

module.exports = schema;