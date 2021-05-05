# 1. Pseudo Code
**Q. There are 50 dice. 20 of them are facing 4. Remaining 30 are facing 3. You can’t see which dice is facing what number. Write pseudo code to separate these 50 dice into 2 groups, so that both groups have the same number of 4’s.**
### Solution:
There are **total 50 dice with 20 of them facing 4 and 30 facing 3**. Therefore, to divide the 50 dice into 2 groups such that each group has equal no. of dice facing 4, **both the groups must have 10 dice facing 4**. Below is the step by step pseudo code for the process:
1. `array1=[50 dices]`
2. `array2=array1.splice(0,array1.length)`
3. `count` occurence of dice facing 10 in `array1`
4. `if count==10` then `return array1,array2`
5. `else if count<10` then, `loop` through `array2`, and `if current_element==10` remove and add to `array1` until `count==10`
6. `else if count>10` then, `loop` through `array1`, and `if current_element==10` remove and add to `array2` until `count==10`

# 2. Shell Commands
**Q. A comma separated file(csv) has 5 columns and 10 rows. Write shell commands to extract the value of 3rd column 5th row and output the result into a text file.**
### Solution: `cat file1.csv|sed -n 5p|cut -d "," -f 3|cat>file2.csv`
In the above group of piped shell commands (UNIX), the 1st command `cat` outputs the contents of the `file1.csv` file, the 2nd command `sed` extracts the 5th line/row of the output, the 3rd command `cut` extracts the 3rd value of that row and the lastly the 4th command `cat>` stores the result into `file2.csv`.

# 3. Weather App

A React Native Weather App for viewing weather forecast for the whole week for any city. The app fetches the data using the [Open Weather API](https://openweathermap.org/api).

## 3.1. App Demo
<img src="app_demo.gif" width=250 height=550>
