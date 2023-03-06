
Example : 
<>
   <div>
        <Logo />
        <Cart />
   </div>
   <div>
        <Filter />
        <ProductList />
   </div>

</>

Defination/Features:
   - It's a global state management tool. 
   - It allows different components to share the state easily. 
   - It allows components to acces the store and also dispatches the action which eventually calls 
     reducer  to update the store 

Building Blocks:
    - Actions 
    - Reducers 
    - Store 

Advandages: 
    - It helps to reduce the complexity of our projects 
    - Maintains a good React architecture
    - Improves the performance
    - It helps in scalability

Library Name: 
react-redux, @reduxjs/toolkit

Hooks in Redux
     - useSelector - Helps us to access the store
     - useDispatch - helps us to dispatch the actions