import React from "react";
import './basics.css';
const Variables=()=>{
    
    return(
        <div>
            <p className="content">
            In Python, variables are used to store data values. They serve as named containers that hold information, such as numbers, strings, or objects. Here's a brief explanation of variables in Python along with an example program:
            <h2>Variables in Python:</h2>
            <ol>
            <li>
                <strong>Declaring Variables:</strong> In Python, you don't need to declare the type of a variable explicitly. You can simply assign a value to a variable using the assignment operator (=). Python dynamically determines the type of the variable based on the assigned value.
            </li>
            <li>
                <strong>Variable Naming Rules:</strong> When naming variables in Python, keep in mind the following rules:
                <ul>
                <li>Variable names are case-sensitive. For example, <code>myVariable</code> and <code>myvariable</code> are different variables.</li>
                <li>Variable names can contain letters (a-z, A-Z), numbers (0-9), and underscores (_).</li>
                <li>Variable names cannot start with a number.</li>
                <li>Avoid using reserved keywords (e.g., <code>print</code>, <code>if</code>, <code>while</code>) as variable names.</li>
                </ul>
            </li>
            <li>
                <strong>Assigning Values:</strong> To assign a value to a variable, use the assignment operator (=). For example, <code>x = 10</code> assigns the value 10 to the variable <code>x</code>.
            </li>
            <li>
                <strong>Accessing Variable Values:</strong> You can access the value stored in a variable by simply using its name. For example, to print the value of <code>x</code>, use the <code>print()</code> function like this: <code>print(x)</code>.
            </li>
            <li>
                <strong>Variable Types:</strong> Python has several built-in data types, including <code>int</code> (integer), <code>float</code> (floating-point number), <code>str</code> (string), <code>bool</code> (boolean), <code>list</code>, <code>tuple</code>, <code>dict</code> (dictionary), and more. The type of a variable is determined dynamically based on the value assigned to it.
            </li>
            </ol>
            Here's an example program that demonstrates the use of variables in Python:
            <div className="editor">
                <code>
                # Assigning values to variables<br></br>
                name = "John Doe"<br></br>
                age = 25<br></br>
                height = 1.75<br></br>
                is_student = True<br></br>

                # Accessing and printing variable values<br></br>
                print("Name:", name)<br></br>
                print("Age:", age)<br></br>
                print("Height:", height)<br></br>
                print("Is Student:", is_student)

                </code>
                
            </div>
            <h5>Output:</h5>

            <div className="editor2">
            <code>
                Name: John Doe <br></br>
                Age: 25<br></br>
                Height: 1.75<br></br>
                Is Student: True<br></br>

                </code>
            </div>
            <div className="iframe">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TqPzwenhMj0?si=wXeXmk6EQ09OrflD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="problems">
                <h2>Problems Related</h2>
                <ol>
                <li><a href="https://www.codechef.com/learn/LTCPY05/problems/PYTH21" target="_blank">Declaring a variable (codechef)</a></li>
                <li><a href="https://www.codechef.com/learn/LTCPY05/problems/PYTH22" target="_blank">Addition of Variables(codechef)</a></li>
                <li><a href="https://www.codechef.com/learn/LTCPY05/problems/PYTH23" target="_blank">Area of Rectangle (codechef)</a></li>
                <li><a href="https://www.codechef.com/learn/LTCPY05/problems/PYTH25" target="_blank">Float datatype (codechef)</a></li>
                <li><a href="https://www.hackerrank.com/challenges/python-division/problem?isFullScreen=true" target="_blank"> Division (hackerrank)</a></li>
                </ol>
            </div>

            </p>
        </div>
    )
}
export default Variables;