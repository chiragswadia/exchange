## Exchange
Here is what the Exchange app does :blush: 

![exchange-app-demo](https://user-images.githubusercontent.com/1291774/76759003-18a80100-678b-11ea-82f5-03a74c25705a.gif)

## Motivation
I was reading about React Hooks from quite a few months now, but never used it in any of my apps, as I still write class based components at my full-time job because of the old ( not that old ) React codebase.

So I decided let's put the theoretical knowledge into practice and write a small React app from scratch using Hooks. I am proud that this app has 

> No class components :)

Not only React ( `useState`, `useEffect` etc ), but it was a good experience learning to use hooks like `useSelector`, `useDispatch` for `react-redux`, which otherwise takes a lot of boilerplate for `connect` HOC, `mapStateToProps`, `mapDispatchToProps` etc 

## Installation
```
npm install && npm run start
```

## Testing
For testing I used `jest` and `react-testing-library` 

Here is a break down of what all tests I wrote
- Tests for functionality ( live rate, transaction from one wallet to another )
- Tests for reducers
- Tests for couple of utility functions
- Snapshot tests for couple of components

Here is a report of one such test case run

![image](https://user-images.githubusercontent.com/1291774/76754023-bac2eb80-6781-11ea-8571-4454272b5e21.png)

To run tests
```
npm run test
```

# Libraries Used
- react
- redux
- react-redux
- redux-thunk
- prop-types
- classnames
- axios
- testing-library/react
- react-notifications
- react-responsive-carousel

## Possible Enhancements
- More unit tests
- E2E tests using libraries like Cypress
- Use static type checking ( TypeScript or flow ) instead of propTypes
- Responsive design for all screen sizes ( web, tablet and mobile )

P.S. - This project was bootstrapped using Create react app
