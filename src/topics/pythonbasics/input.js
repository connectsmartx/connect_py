import React from "react";
import './basics.css';
const Input=()=>{
    return(
        <div>
        <p className="content">
    <ol>
        <h2>Input:</h2>
    <li>
        <code>Keyboard Input (stdin)(mostly used):</code>
        <p>To take input from the keyboard (standard input), you can use the <code>input()</code> function. This function reads a line of text entered by the user and returns it as a string.</p>
        <p className="editor"><code>user_input = input("Enter something: ")</code></p>
        <p>If you need to convert the input to a specific data type (e.g., integer), you can use type casting like <code>int()</code> or <code>float()</code>.</p>
        <p className="editor"><code>age = int(input("Enter your age: "))</code></p>
    </li>
    <li>
        <code>Command-Line Arguments:</code>
        <p>You can access command-line arguments using the <code>sys.argv</code> list from the <code>sys</code> module. This is useful when you want to pass arguments to your Python script when running it from the command line.</p>
        <p className="editor"><code>import sys <br></br>
        arg1 = sys.argv[1]  # The first command-line argument</code></p>
    </li>
    <li>
        <code>File Input:</code>
        <p>To read data from a file, you can use the <code>open()</code> function and various file reading methods, such as <code>read()</code>, <code>readline()</code>, or <code>readlines()</code>.</p>
        <p className="editor"><code>with open('input.txt', 'r') as file:<br></br>
        file_contents = file.read()</code></p>
    </li>
    </ol>

    <ol>
    <h2>Output:</h2>
    <li>
        <code>Print to Console (stdout) (mostly used):</code>
        <p>The most common way to produce output in Python is by using the <code>print()</code> function. You can print text, variables, and expressions to the console.</p>
        <p className="editor"><code>print("Hello, world!")</code></p>
        <p>You can also format output using string formatting techniques, such as f-strings or the <code>format()</code> method.</p>
        <p className="editor"><code>name = "Alice" <br></br>
        age = 30<br></br>
        print(f"Hello", name,"! You are ",age" years old.")</code></p>
    </li>
    <li>
        <code>File Output:</code>
        <p>To write data to a file, you can use the <code>open()</code> function with the appropriate mode ('w' for write, 'a' for append, etc.) and then use methods like <code>write()</code> to save data to the file.</p>
        <p className="editor"><code>with open('output.txt', 'w') as file:<br></br>
        file.write("This is some data to write to the file.")</code></p>
    </li>
    <li>
        <code>Logging:</code>
        <p>For more structured output, you can use the Python <code>logging</code> module to log messages to a file or console with different log levels.</p>
        <p className="editor"><code>import logging <br></br>
        logging.basicConfig(filename='myapp.log', level=logging.DEBUG) <br></br>
        logging.debug('This is a debug message') <br></br>
        logging.info('This is an info message')</code></p>
    </li>
    </ol>
    <div className="iframe">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/sa97IyIOHxU?si=uXNnQs2zMA5SoGNh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className="problems">
        <h2>Problems Related</h2>
        <ol>
        <li><a href="https://www.codechef.com/practice/PPY01/problems/START01" target="_blank">take input and print (codechef)</a></li>
        <li><a href="https://www.codechef.com/practice/PPY01/problems/PYPRACREARR1" target="_blank">Input two integers and print sum(codechef)</a></li>
        <li><a href="https://www.codechef.com/practice/PPY01/problems/PYPRACREAR1A" target="_blank">String input (codechef)</a></li>
        <li><a href="https://www.codechef.com/practice/PPY01/problems/CCLEARN" target="_blank">2x input(codechef)</a></li>
        </ol>
    </div>


    </p>
    </div>
    )
}
export default Input;