---
layout: default
title: Python Basic
parent: Tutorial
nav_order: 1
---
1. TOC
{:toc}

---
# Python Installation


For Python installation follow <https://cityuseattle.github.io/docs/environment/python/>

# Variables
Variables are containers for storing data values. Unlike other programming languages, Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.
A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume). Rules for Python variables include:
* A variable name must start with a letter or the underscore character
* A variable name cannot start with a number
* A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _)
* Variable names are case-sensitive (age, Age and AGE are three different variables)

To create the variable type
<pre><code>
message = “Hello World”
</code></pre>

## Multiple assignments 

Python allows you to assign values to multiple variables in one line and you can assign the same value to multiple variables in one line.
<pre><code>
print("\nMultiple assignments\n")
a, b, c = 5, 3.2, "Hello"
print ("a = ", a)
print ("b = " , b)
print ("c = ", c)
x = y = z = "Python"
print ("x ="+ x)
print ("y ="+ y)
print ("z ="+ z)
</code></pre>
# Data Types 
Data types are the classification or categorization of data items. Data types represent a kind of value which determines what operations can be performed on that data. Numeric, non-numeric, and Boolean (true/false) are the most used data types.

## Numeric 
A numeric data type is any representation of data which has a numeric value. Python identifies three types of numbers: 
* Integer: Positive or negative whole numbers (without a fractional part). For example: >>> x = 5 
* Float: Any real number with a floating-point representation in which a fractional component is denoted by a decimal symbol or scientific notation. For example: >>> y = 2.5 
* Complex number: A number with a real and imaginary component represented as x+yi. x and y are floats and i is -1 (the square root of -1 is called an imaginary number). For example:      
<pre><code>
 z = 2 + 3i
</code></pre>
## Boolean 
A Boolean is data with one of two built-in values: True or False. Notice that 'T' and 'F' are capitalized. “true” and “false” are not valid Booleans and Python will throw an error for them. For example: 
<pre><code>
print (10>9)  
</code></pre>
Result: *True*
## Sequence 
Type A sequence is an ordered collection of similar or different data types. Python has the following built-in sequence data types: 
* String: A string value is a collection of one or more characters put in single, double, or triple quotes. The string is initialized in the following ways: 
<pre><code>
message = “This is a string declaration”  
message = ‘This is also a string declaration’
</code></pre> 
* List: A list object is an ordered collection of one or more data items, not necessarily of the same type, put in square brackets. 
<pre><code>
list1 = ['physics', 'chemistry', 1997, 2000]
</code></pre> 
* Tuple: A Tuple object is an ordered collection of one or more data items, not necessarily of the same type, put in parentheses. A tuple is not mutable, i.e., it doesn't have any methods for changing its contents. 
<pre><code>
tup1 = ('physics', 'chemistry', 1997, 2000)
</code></pre>
## Dictionary 
A dictionary object is an unordered collection of data in a key: value pair form. A collection of such pairs is enclosed in curly brackets. For example:
<pre><code>
{1:"Steve", 2:"Bill", 3:"Ram", 4: "Farha"}
</code></pre>

# String functions
Python has a set of built-in methods that you can use on strings.
<pre><code>
message = "this is also a string"
print("Title:" + message.title())
print("Uppercase: "+ message.upper())
print("Lowercase: "+ message. lower())
</code></pre>

The title() method returns a string where the first character in every word is upper case. If the word contains a number or a symbol, the first letter after that will be converted to upper case.
The upper() method returns a string where all characters are in upper case. Symbols and numbers are ignored.
The lower() method returns a string where all characters are lower case. Symbols and numbers are ignored.

## Concatenation:
In Python, there are a few ways to concatenate, or combine, strings. The new string that is created is referred to as a string object. This is because everything in Python is an object – which is why Python is an objected-oriented language.
<pre><code>
first_message =  "Hi!"
second_message =  "How are you ?"
full_message =  f"{first_message}  {second_message}"
print(full_message)
</code></pre>

Also called “formatted string literals,” f-strings are string literals that have an f at the beginning and curly braces containing expressions that will be replaced with their values. The expressions are evaluated at runtime and then formatted using the __format__ protocol.

# Numbers and operators
The Python language supports the following types of operators:
* Arithmetic Operators
* Comparison (Relational) Operators
* Assignment Operators
* Logical Operators
* Bitwise Operators
* Membership Operators
* Identity Operators

The commonly used operators are discussed below.

## Arithmetic Operators
Consider the values of a = 10 and b = 20.

  ![Arithmetic Operators](/assets/images/python/Arithmetic.jpg)
<pre><code>
print("\n FLoat\n")
a =2.2
b =2 
c = 0.1
print(" a+b = ",a+b)
print(" a+c = ",a+c)
print(" a*b = ",a*b)
print(" a*c = ",a*c)
</code></pre>

If we look at the answer of a + c and a ** b, it is displayed as an arbitrary number of decimal places. This happens in all languages and is of little concern. Python tries to find a way to represent the result as precisely as possible, which is sometimes difficult given how computers have to represent numbers internally.

## Comparison Operators
Consider the values of a = 10 and b = 20.

  ![Comparison Operators](/assets/images/python/Comparison Operators.jpg)







