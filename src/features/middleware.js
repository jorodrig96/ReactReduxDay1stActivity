export const logger = store => next => action => {
    
    //if statement below is written because the thunk in dataSlice.js is returning a function.
    //In the event that our action is a function, we just want to treat it just the way Redux would call our Thunk: 
    //by passing it the store dispatch and getState methods.
    
    if(typeof action === 'function') {
        action(store.dispatch, store.getState)
    } else {
        console.log('dispatch', store.getState())
        next(action)
        console.log('after dispatch', store.getState())
    }
}


{/* This middleware function is fairly boilerplate. In fact, it came directly from the Redux documentation. 
It's a simple logger that should display our state value before and after an action is performed on the page. 
Loggers can be very helpful for debugging purposes, especially when debugging UI errors!*/}