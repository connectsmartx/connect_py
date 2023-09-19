import React, { useState } from 'react';
import './datatype.css';
const Numeric=()=>{
    return(
        <div>
            <p>
                <ol id='numnotrequire'>
                    <li><h2>int:</h2>
                    <ul>
                        <li>The int data type represents integers (whole numbers) without any fractional part.</li>
                        <li>Example program:</li><br></br>
                        <div className="editor">
                        <code >
                        # Assigning an integer value to a variable<br></br>
                        age = 25<br></br>
                        # Performing arithmetic operations with integers<br></br>
                        x = 10<br></br>
                        y = 5<br></br>
                        sum = x + y<br></br>
                        difference = x - y<br></br>
                        product = x * y<br></br>
                        quotient = x / y<br></br>

                        # Printing the results<br></br>
                        print("Age:", age)<br></br>
                        print("Sum:", sum)<br></br>
                        print("Difference:", difference)<br></br>
                        print("Product:", product)<br></br>
                        print("Quotient:", quotient)<br></br>
                        </code>
                        <h5>output:</h5>
                        <code>
                        Age: 25 <br></br>
                        Sum: 15 <br></br>
                        Difference: 5 <br></br>
                        Product: 50 <br></br>
                        Quotient: 2.0 <br></br>
                        </code>
                        </div>

                    </ul>

                    </li>
                    <li><h2>float:</h2>
                        <ul>
                        <li>The float data type represents floating-point numbers with decimal places.</li>
                        <li>Example program:</li><br></br>
                        <div className='editor'>
                            <code>
                            # Assigning a floating-point value to a variable <br></br>
                            pi = 3.14 <br></br>

                            # Performing arithmetic operations with floats <br></br>
                            radius = 2.5 <br></br>
                            circumference = 2 * pi * radius <br></br>
                            area = pi * radius ** 2 <br></br>

                            # Printing the results <br></br>
                            print("Pi:", pi) <br></br>
                            print("Circumference:", circumference) <br></br>
                            print("Area:", area) <br></br>
                            </code>
                            <h5>output:</h5>
                            <code>
                            Pi: 3.14<br></br>
                            Circumference: 15.7<br></br>
                            Area: 19.625<br></br>
                            </code>
                        </div>
                        </ul>
                    </li>
                    <li><h2>complex:</h2>
                        <ul>
                        <li>The complex data type represents complex numbers in the form a + bj, where a and b are real numbers and j represents the imaginary unit.</li>
                        <li>Example program:</li><br></br>
                        <div className='editor'>
                            <code>
                            # Assigning a complex number to a variable<br></br>
                            z = 2 + 3j<br></br>

                            # Performing arithmetic operations with complex numbers<br></br>
                            w = 1 - 2j<br></br>
                            sum = z + w<br></br>
                            product = z * w<br></br>

                            # Printing the results<br></br>
                            print("Complex number z:", z)<br></br>
                            print("Complex number w:", w)<br></br>
                            print("Sum:", sum)<br></br>
                            print("Product:", product)<br></br>

                            </code>
                            <h5>output:</h5>
                            <code>
                            Complex number z: (2+3j)<br></br>
                            Complex number w: (1-2j)<br></br>
                            Sum: (3+1j)<br></br>
                            Product: (8-1j)<br></br>

                            </code>
                        </div>
                        </ul>
                    </li>

                </ol>
            </p>
            
        </div>
        
    )
}
export default Numeric;