import React, { useState } from 'react';
import './datatype.css';

const Bool=()=>{
    return(
        <div><p className='content'>
        <h1>Python Boolean Data Type</h1>

<h2>Introduction to Boolean</h2>
<p>In Python, the <strong>boolean</strong> data type, represented as <code>bool</code>, is used to express binary states, which can be either <code>True</code> or <code>False</code>. Booleans are fundamental for logical operations, decision-making, and control flow in Python programs. They play a crucial role in conditional statements, loops, and determining the truthiness or falsiness of conditions.</p>

<h2><code>True</code> and <code>False</code> Values</h2>
<p>In Python:</p>
<ul>
    <li><code>True</code> represents a true or affirmative condition.</li>
    <li><code>False</code> represents a false or negative condition.</li>
    <li>These values are case-sensitive and must be capitalized.</li>
</ul>
<div className='editor'>
<code >
    is_sunny = True<br></br>
    is_raining = False
</code></div>

<h2>Boolean Expressions</h2>
<p>Boolean expressions are conditions that evaluate to either <code>True</code> or <code>False</code>. They use comparison operators, logical operators, and other conditional constructs.</p>
<div className='editor'>
<code>
    x = 5<br></br>
    y = 10<br></br>
    is_greater = x &gt; y  # This will be False
</code></div>

<h2>Logical Operators</h2>
<p>Python provides three main logical operators for combining boolean values: <code>and</code>, <code>or</code>, and <code>not</code>.</p>
<div className='editor'>
<code>
    sunny = True<br></br>
    warm = True<br></br>
    is_good_day = sunny and warm  # This will be True<br></br>
    is_any_bad_weather = sunny or False  # This will be True<br></br>
    is_not_sunny = not sunny  # This will be False
</code></div>

<h2>Conditional Statements</h2>
<p>Booleans are extensively used in conditional statements like <code>if</code>, <code>elif</code> (else if), and <code>else</code> to control the flow of a program based on conditions.</p>
<div className='editor'>
<code>
    temperature = 25<br></br>
    if temperature &gt; 30:<br></br>
        print("It's hot outside.")<br></br>
    elif temperature &gt;= 20:<br></br>
        print("It's a pleasant day.")<br></br>
    else:<br></br>
        print("It's cold outside.")
</code></div>

<h2>Boolean Functions</h2>
<p>Functions can return boolean values. These functions are often used for checking conditions.</p>
<div className='editor'>
<code>
    def is_even(number):<br></br>
        return number % 2 == 0  # Returns True if the number is even, False otherwise<br></br>
    result = is_even(6)  # This will be True
</code></div>

<h2>Truthiness and Falsiness</h2>
<p>In Python, many values are considered "truthy" or "falsy" when evaluated in a boolean context. For example, non-zero numbers, non-empty strings, and non-empty collections are considered truthy, while zero, empty strings, and empty collections are considered falsy.</p>
<div className='editor'>
<code>
    name = ""<br></br>
    if not name:<br></br>
        print("Name is empty.")  # This will be printed
</code></div>

<h2>Boolean Casting</h2>
<p>You can explicitly convert other data types to boolean values using the <code>bool()</code> constructor. By default, an object is considered <code>True</code> unless its class defines a <code>__bool__()</code> or <code>__len__()</code> method that returns <code>False</code> or <code>0</code>, respectively.</p>
<div className='editor'>
<code>
    number = 0<br></br>
    is_number_true = bool(number)  # This will be False
</code></div>
        </p></div>
    )
}
export default Bool;