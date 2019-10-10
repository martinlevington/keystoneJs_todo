const { Text, Checkbox, CalendarDay , Relationship  } = require('@keystone-alpha/fields');

module.exports = {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    description: {
      type: Text,
      isRequired: true,
    },
    isComplete: {
      type: Checkbox,
      defaultValue: false,
    },
    deadline: {
      type: CalendarDay,
      format: 'Do MMMM YYYY',
      yearRangeFrom: '2019',
      yearRangeTo: '2029',
      isRequired: false,
      defaultValue: Date.now(),
    },
    assignee: {
      type: Relationship,
      ref: 'User.task',
      isRequired: true,
    },
    
  },
};