1. Line 9 prints out 20. 
2. Line 13 prints out 20. 
3. Line 9 prints out 20. 
4. Line 13 returns an error as the variable 'result' is not declared in the scope of that block. 
5. Line 9 returns an error as the variable 'result' was defined with the const keyword preventing it to be reassigned to another value. 
6. Line 13 is not even run as the error at line 9 stops the program from continuing. 