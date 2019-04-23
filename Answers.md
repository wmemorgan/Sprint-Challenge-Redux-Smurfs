- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  - **actions:** objects with two properties: 
    1. `type`: a string that explains what activity just happened to change state.
    2. `payload` (OPTIONAL): the data that goes with the activity.
    These actions are created through functions called **action creator** which return the action object.

  - **reducers:** pure functions that change application state by taking the data of the current state and a specified `action` and creating a new object to replace the application state.

  - **store:** is an immutable Javascript object that contains the application state.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

  **Application State:** a central state object that contains data that can be shared with all the components in an application. It is designated as the single source of truth for an application's data. It is often used with managing and manipulating data that affects the entire application and any relevant APIs. (_Example: CRUD functionality._)

  **Component State:** a state object that contains data for a single component. It is often used with managing and manipulating data that only affects a single component. (_Example: Handling form input._)

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  **Redux-thunk:** is middleware for redux that enables action creators to be invoked asynchronously.
