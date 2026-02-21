1. in javascript everything try to be an object

2. boxing :- whenever we accese a key on primitive value 
    1. js create obj to the value and return value and newly obj is garbage collected
    2. in js not everything is an obj like :- null, undefined


3. when we write

    in starting when we didnt write anything we have 2 thing 
     1. OBJECT FUNCTION (global)
     2. prototype (global)

    const obj = {}
    1.  js call this ------> new Object()
         1. the inner key of Object 
        ![alt text](image2.png)

    2.  OBJECT FUNCTION IS LIKE A FATHER THAT GIVE HIS DNA TO EVERY OBJ AND THE PROTOTYPE( DEFAULT METHOD )  IS FEED TO THE EVERY OBJECT
    3.  AND THE SON OBJ CANNOT SEE IT THE  ( DEFAULT METHOD ) GIVEN BY OBJECT FUNCTION 
    4.  js create [[prototype]] is hidden key and inject the  ( DEFAULT METHOD ) in obj
    ![alt text](image.png)

    5. if we want to find out that to which the current obj instance belong to 
        1. use constructor 
        2. value of constructor is func to which the prototype attached
==================================================================================================================
==================================================================================================================
==================================================================================================================
    key takeaway
    1. in starting we have 2 thing 
      1. OBJECT FUNCTION 
      2. key -> prototype
    2. prototype contain default method
    3. value of prototype key is obj
    4. base function i js is OBJECT FUNCTION 
    5. value of constructor is func to which the prototype attached

    ex ------> const obj = {}
            obj.[[prototype]] = Object.prototype
            ![alt text](image1.png)

==================================================================================================================
==================================================================================================================
==================================================================================================================

how to get the [[prototype]] // we can never acces this but we can look at it 

const obj = {}

1. obj.__proto__ 
2. __proto__  is not  property
3. its a getter and setter function
4. __proto__ is deprecated

so to log the value or [[prototype]] use 2 function 
1. Object.getPrototypeOf()
2. Object.setProtoTypeOg()


==================================================================================================================
==================================================================================================================
==================================================================================================================

[[prototype]], __proto__ is exist in Object

constructor, prototype is a part of fun ()

fun() are creater every obj in js is created by fun ()

==================================================================================================================
==================================================================================================================
==================================================================================================================
prototype channing 
