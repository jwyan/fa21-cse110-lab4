1. Line 12 prints out 3 to the console. This is because 'i' stores the number of times the for loops run and it is declared with the var keyword making it accessible throughout the entire function. 
2. Line 13 prints out 150 to the console. This is because 'discountedPrice' is used to store the price after the discount is applied. In regards to the 150, it is because 300 is the last element in the from the array of prices that was passed it. The variable 'discountedPrice' is also declared with the var keyword making it accessible throughout the entire function. 
3.  Line 14 prints out 150 to the console. This is because 'finalPrice' is used to store the rounded final price after the discount is applied. In regards to the 150, it is because 300 is the last element in the from the array of prices that was passed it. The variable 'finalPrice' is also declared with the var keyword making it accessible throughout the entire function. 
4.  This function will return an array of the discount applied to the values, rounded to the nearest whole number, that were passed into the prices array. The variable 'discounted' is declared with the var keyword making it accessible throughout the entire function. This variable is then populated with the discounted price for each value that is in the prices array. At the end of the function, 'discounted' is returned. 
5.  Line 12 causes an error because it is trying to print 'i' to the console. However, 'i' was defined with the let keyword making it only accesible inside the block it was declared in. As line 12 is located outside of the block, it can't be accessed resulting in the error. 
6.  Line 13 causes an error because it is trying to print 'discountedPrice' to the console. However, 'discountedPrice' was defined with the let keyword making it only accesible inside the block it was declared in. As line 13 is located outside of the block, it can't be accessed resulting in the error. 
7.  Line 14 prints out 150 to the console. This is because 'finalPrice' is used to store the rounded final price after the discount is applied. In regards to the 150, it is because 300 is the last element in the from the array of prices that was passed it. Although the variable 'finalPrice' is declared with the let keyword, line 14 remains in the same block which means it can be accessed.  
8.  This function will return an array of the discount applied to the values, rounded to the nearest whole number, that were passed into the prices array. The variable 'discounted' is declared with the let keyword making it accessible only in the same block. In the same block, this variable is then populated with the discounted price for each value that is in the prices array. At the end of the function, 'discounted' is returned at line 16 which remains in the same block as it was declared. 
9.  Line 12 causes an error because it is trying to print 'i' to the console. However, 'i' was defined with the let keyword making it only accesible inside the block it was declared in. As line 11 is located outside of the block, it can't be accessed resulting in the error. 
10. Line 12 prints out 3 to the console. Although 'length' was declared with the const keyword, line 12 remains in the same block which means it can be accessed. 
11.  This function will return an array of the discount applied to the values, not rounded to the nearest whole number, that were passed into the prices array. The variable 'discounted' is declared with the const keyword making it accessible only in the same block. In the same block, this variable is then populated with the discounted price for each value that is in the prices array. At the end of the function, 'discounted' is returned at line 14 which remains in the same block as it was declared. 
12.  A. student.name <br>
     B. student["Grad Year"] <br>
     C. student.greeting(); <br>
     D. student["Favorite Teacher"].name <br>
     E. student.courseLoad[0]
13.  A. 32 <br>
     B. 1 <br>
     C. 3 <br> 
     D. 3null <br>
     E. 4 <br>
     F. 0 <br>
     G. 3undefined <br>
     H. NaN
14.  A. true <br>
     B. false <br>
     C. true <br> 
     D. false <br>
     E. false <br>
     F. true <br>
15. The '==' converts the variable values to the same type before they make the comparison. The '===' does not convert the variable values to the same type and only returns true if the variable type and value are identical. 
16. Code written inside 'part2-question16.js'. 
17. When 'modifyArray([1,2,3], doSomething)' is called in line 13, it checks its parameters to see if they are valid. It then runs through the rest of the program. As 'doSomething' is passed in as the 'callback' variable, each element in the array is passed into 'doSomething' before it is actually pushed into the new array. As a result, 'newArr' stores all of the elements after being passed into 'doSomething' which essentially just multiples each element by 2. 
18. Code written inside 'part2-question18.js'. 
19. The output of the above code is: <br>
    1 <br>
    4 <br>
    3 <br>
    2 
