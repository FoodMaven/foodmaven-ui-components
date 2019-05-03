# FoodMaven UI Components

This repository contains shareable FoodMaven UI components.

## Projects

This repository contains two projects: `fm-ui-components` and `fm-ui-demo`. `fm-ui-components` is the actual components library that will be built and published as an external library. `fm-ui-demo` is an application that will be used to document and provide example usage of the library, and may also be used as a test harness.  

A consequence of this is that any angular commands will have to be qualified with the right project. For example, to serve the demo app, instead of running `yarn start`, we would need to run `yarn start fm-ui-demo`. This also means we are able to build our component library and ui application separately.

## TODOs:

- Currently the content within the demo app is hard coded. If we ever want to host the demo app as a web app for use beyond local development, we will need to refactor the demo project to handle environments, add models, etc.
- Typing across the two projects are very lightweight. The demo app has no types at all, and rely a lot on the knowledge of the shape of the data. The component library has a minimal set of models that may need to be improved.
