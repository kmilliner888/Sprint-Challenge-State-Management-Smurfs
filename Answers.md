1. What problem does the context API help solve?
Helps you manage state across components by simply plugging into the context object and using the values/props that you need without prop drilling.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are what you want to occur on an event. Reducers take in initial state and actions into one function, and specifies what happens with state when the actions are called. The store takes in the reducer, and holds state for the entire application.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other? 
Application state is like global state. Component state can be set on individual components and mutated or mapped over. 
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a type of middleware and can stop a process, or pause it to run a different function. It can stop actions before the reducer uses them.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
We had more practice with Redux, but Context API seems simpler to implement. Less "set-up", more plug & play. But apparently Redux is better for much more large scale applications. I'm interested to use both in more use cases.
