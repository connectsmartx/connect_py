import React, { useState } from 'react';
import './datatype.css';

const Sequence=()=>{
    return(
        <div><p className='content'>
        <h1>Python Sequence Data Types</h1>

<p>Sequence data types in Python are used to store and manipulate collections of items. These data types represent ordered collections of elements, where each element is assigned a unique index. Python provides three primary sequence data types: <strong>lists</strong>, <strong>tuples</strong>, and <strong>strings</strong>. Let's explore each of them in detail:</p>

<h2>1. Lists</h2>
<p>A <strong>list</strong> is a mutable sequence data type. It is represented by square brackets and can store elements of different data types. Lists allow you to add, remove, and modify elements. Here are some examples:</p>
<div className='editor'><code>
    numbers = [1, 2, 3, 4, 5]<br></br>
    fruits = ["apple", "banana", "cherry"]<br></br>
    mixed_list = [1, "hello", 3.14, True]
</code></div>

<h2>2. Tuples</h2>
<p>A <strong>tuple</strong> is an immutable sequence data type, represented by parentheses. Unlike lists, tuples cannot be modified after creation. They are often used to represent fixed collections of items. Example:</p>
<div className='editor'><code>
    coordinates = (3, 4)<br></br>
    person_info = ("Alice", 30, "New York")
</code></div>

<h2>3. Strings</h2>
<p>A <strong>string</strong> is also a sequence data type, but it specifically stores a collection of characters. Strings are enclosed in single, double, or triple quotes and are immutable. Examples:</p>
<div className='editor'><code>
    greeting = "Hello, World!"<br></br>
    name = 'Alice'<br></br>
    multiline_text = '''This is<br></br>a multiline<br></br>string.'''
</code></div>

<h2>Common Sequence Operations</h2>
<p>Sequence data types support various operations, including:</p>
<ul>
    <li><strong>Indexing:</strong> Access elements by their position (index).</li>
    <li><strong>Slicing:</strong> Extract sub-sequences using slices.</li>
    <li><strong>Concatenation:</strong> Combine sequences using the + operator.</li>
    <li><strong>Repetition:</strong> Duplicate a sequence using the * operator.</li>
    <li><strong>Membership:</strong> Check if an element exists in the sequence.</li>
    <li><strong>Length:</strong> Find the number of elements in a sequence.</li>
</ul>

<h2>Examples</h2>
<p>Here are some common sequence operations demonstrated with examples:</p>
<div className='editor'><code>
    fruits = ["apple", "banana", "cherry"]<br></br>
    first_fruit = fruits[0]  # Indexing, first_fruit will be "apple"<br></br>
    sliced_fruits = fruits[1:3]  # Slicing, sliced_fruits will be ["banana", "cherry"]<br></br>
    combined_fruits = fruits + ["orange", "grape"]  # Concatenation<br></br>
    repeated_fruits = fruits * 2  # Repetition<br></br>
    is_banana_exist = "banana" in fruits  # Membership, is_banana_exist will be True<br></br>
    num_of_fruits = len(fruits)  # Length, num_of_fruits will be 3
</code></div>

<p>These sequence data types and operations are fundamental to working with collections of data in Python and are extensively used in various programming scenarios.</p>    
        </p></div>
    )
}
export default Sequence;