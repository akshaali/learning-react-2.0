Difference between Saga and Thunk 

    Saga                                         Thunk
1. Extra boilerplate                           No extra boilerplate
2. We have seperate file to handle async      Here, we do inside the actioncreater itself 
3. Genrator Function                          Promises 
4. Easily scalable                            Not Easily scalable
5. It gives testing friendly environment      It makes the testing difficult beccause asyn task and actions are wrriten together
6. To integrate, we habe to install           This is default middleware
 3rd party libraries
7. This is powerful library                   It is lightweighted middleware