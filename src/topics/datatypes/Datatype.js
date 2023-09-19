import React, { useState } from 'react';
import './datatype.css';

const Datatype=()=>{
    return(
        <div> <p className='content'> <h1>Python Data Types</h1>
        <p>In Python, data types are classifications or categories for different types of data that can be used in your programs. Data types determine what operations can be performed on the data, how the data is stored in memory, and how it behaves when used in various operations. Python has several built-in data types to accommodate a wide range of data needs.</p>
    
        <ul>
            <li>
                <strong>Integers (<code>int</code>):</strong>
                <p>Integers are whole numbers without decimal points. For example: <code>42</code>, <code>-7</code>, and <code>0</code>.</p>
            </li>
            <li>
                <strong>Floating-Point Numbers (<code>float</code>):</strong>
                <p>Floating-point numbers are numbers with decimal points or numbers in scientific notation. For example: <code>3.14</code>, <code>-0.25</code>, and <code>2.0e5</code> (200,000.0).</p>
            </li>
            <li>
                <strong>Strings (<code>str</code>):</strong>
                <p>Strings are sequences of characters enclosed in single, double, or triple quotes. They are used to represent text. For example: <code>'Hello, World!'</code>, <code>"Python"</code>, and <code>'''Multiline string'''</code>.</p>
            </li>
            <li>
                <strong>Lists (<code>list</code>):</strong>
                <p>Lists are ordered collections of items, and these items can be of mixed data types. Lists are created using square brackets <code>[...]</code>. For example: <code>[1, 2, 3]</code>, <code>['apple', 'banana', 'cherry']</code>.</p>
            </li>
            <li>
                <strong>Tuples (<code>tuple</code>):</strong>
                <p>Tuples are similar to lists but are immutable, meaning their elements cannot be changed once they are assigned. Tuples are created using parentheses <code>(...)</code>. For example: <code>(1, 2, 3)</code>, <code>('John', 25)</code>.</p>
            </li>
            <li>
                <strong>Dictionaries (<code>dict</code>):</strong>
                <p>Dictionaries are unordered collections of key-value pairs. Each key in a dictionary is unique, and you can use the key to access its associated value quickly. Dictionaries are created using curly braces <code>{}</code>. For example: <code>&#123; 'name':'Alice', 'age': 30 &#125;</code>.</p>
            </li>
            <li>
                <strong>Sets (<code>set</code>):</strong>
                <p>Sets are unordered collections of unique elements. Sets are useful for operations like union, intersection, and difference. Sets are created using curly braces <code>{}</code> or the <code>set()</code> constructor. For example: <code>&#123; 1, 2, 3 &#125;</code>, <code>set([2, 2, 3, 4])</code>.</p>
            </li>
            <li>
                <strong>Booleans (<code>bool</code>):</strong>
                <p>Booleans represent truth values and can only have two values: <code>True</code> and <code>False</code>. They are often used for making decisions in conditional statements and loops.</p>
            </li>
        </ul></p></div>
    )
}
export default Datatype;