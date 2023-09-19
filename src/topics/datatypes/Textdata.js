import React, { useState } from 'react';
import './datatype.css';

const Textdata=()=>{
    return(
        <div>
            <p>
            The textual data type in Python is represented by the str class and is used to handle textual data, such as strings of characters. Strings are sequences of characters enclosed in either single quotes (' ') or double quotes (" "). Python treats single-quoted and double-quoted strings interchangeably, so you can use either depending on your preference.
            <h2>Characteristics of Textual Data Type (str):</h2>
            <ul>
                <li><strong>Immutability:</strong> Strings in Python are immutable, meaning once they are created, their individual characters cannot be changed. However, you can create new strings based on existing ones.</li>
                <li><strong>Concatenation:</strong> You can concatenate (combine) two or more strings using the + operator. This creates a new string that contains the characters of both original strings.</li>
                <li><strong>Indexing and Slicing:</strong> Strings are sequences, and you can access individual characters using indexing, where the index starts from 0. You can also extract substrings (slices) from a string using slicing.</li>
                <li><strong>Built-in String Methods:</strong> Python provides a variety of built-in string methods to manipulate strings, such as split(), upper(), lower(), strip(), replace(), and more.</li>
            </ul>

            </p>
        </div>
    )
}
export default Textdata;