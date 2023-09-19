import React, { useState } from 'react';
import './datatype.css';

const Textdata=()=>{
    return(
        <div>
            <p className='content'>
            
            <h1>Sets and Dictionaries in Python</h1>

    <h2>1. Set Data Type (<code>set</code>)</h2>
    <p>A <strong>set</strong> is an unordered collection of unique elements. It is defined by enclosing elements within curly braces <code>{}</code> or by using the <code>set()</code> constructor. Sets are used when you want to store a collection of items without duplicates.</p>

    <h3>Example of Sets:</h3>
    <div className='editor'>
    <pre>
        <code>
            fruits = &#123;"apple", "banana", "cherry"&#125;
        </code>
    </pre></div>

    <h3>Common Set Operations:</h3>
    <ul>
        <li>Adding elements using the <code>add()</code> method.</li>
        <li>Removing elements using the <code>remove()</code> or <code>discard()</code> method.</li>
        <li>Checking membership using the <code>in</code> operator.</li>
        <li>Performing set operations like union, intersection, and difference.</li>
    </ul>

    <h3>Example Operations on Sets:</h3>
    <div className='editor'>
    <pre>
        <code>
            fruits.add("orange")<br></br>
            fruits.remove("cherry")<br></br>
            if "banana" in fruits:<br></br>
            &nbsp;    print("Banana is in the set.")<br></br>
        </code>
    </pre></div>

    <h2>2. Dictionary Data Type (<code>dict</code>)</h2>
    <p>A <strong>dictionary</strong>, also known as a map or associative array, is a collection of key-value pairs. Each key in a dictionary is unique, and it is used to retrieve the associated value. Dictionaries are created using curly braces <code>{}</code> or the <code>dict()</code> constructor.</p>

    <h3>Example of Dictionaries:</h3>
    <div className='editor'>
    <pre>
        <code>
            person = &#123; "name": "Alice", "age": 30, "city": "New York" &#125;
        </code>
    </pre></div>

    <h3>Common Dictionary Operations:</h3>
    <ul>
        <li>Accessing values using keys.</li>
        <li>Adding new key-value pairs.</li>
        <li>Modifying values.</li>
        <li>Removing key-value pairs using <code>del</code> or the <code>pop()</code> method.</li>
    </ul>

    <h3>Example Operations on Dictionaries:</h3>
    <div className='editor'>
    <pre>
        <code>
            name = person["name"]
            person["age"] = 31
            del person["city"]
        </code>
    </pre></div>

    <p><strong>Note:</strong> Sets and dictionaries are important data types in Python for various tasks. Sets are used when you need to work with unique collections of items, while dictionaries are used to represent structured data with key-value associations. Understanding when and how to use these data types is crucial in Python programming.</p>
</p>
        </div>
    )
}
export default Textdata;