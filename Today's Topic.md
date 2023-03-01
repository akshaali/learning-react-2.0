Today's Topic 
1. Pure Component (Class Based Component) 
  It renders the same output for the same set of states and props
  - works on shallow comparison betweeen prev and next state & props
    Shallow comparison function 
        1. keys should be equal
        2. key's values should be equal


2. Higer Order Component
    - Takes a component as argument and return a component 
    Applications
        1. Reduce the repetition of the code 
        2. Enhance our component features
        3. Enhance our readibility of the component

3. Memo - imitate the property/features of the Pure Component

shallowComparison(obj1, obj2){
    if(obj1 == obj2) return true;
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if(obj1Keys.length != obj2Keys.length) return false;
    for(int i = 0; i < obj1Keys.length; i++){
        if(obj1Keys[i] != obj2Keys[i]) return false;
    }
    for(int i = 0; i < obj1Keys.length; i++){
        if(obj1[obj1Keys[i]] != obj2[obj1Keys[i]]) return false
    }
    return true
}
