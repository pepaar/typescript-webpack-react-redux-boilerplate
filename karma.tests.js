var context = require.context('./App', true, /-test\.tsx?$/);
context.keys().forEach(context);