const { Text, Password, Relationship } = require('@keystone-alpha/fields');

module.exports = {
  fields: {
    username: {
      type: Text,
      isRequired: true,
    },
    password: {
      type: Password,
      isRequired: true,
    },
    task: {
        type: Relationship,
        ref: 'Todo.assignee',
        many: true,
      },
  },
};