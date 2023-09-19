import React from "react";
import './basics.css';
const Installation=()=>{
    return(
        <div className="content"><p><h2>1. Installing Python</h2>
            To install Python on your computer, follow these steps:
            <ul>
            <li>Visit the official Python website at https://www.python.org.</li>
            <li>Click on the "Downloads" tab and choose the version of Python suitable for your operating system (Windows, macOS, or Linux).</li>
            <li>Download the installer and run it.</li>
            <li>During the installation, make sure to check the box that says "Add Python to PATH" to easily access Python from the command line.</li>
            <li>Complete the installation by following the on-screen instructions.</li>
            </ul>
            </p>
            <p>
                <h2>2. Choosing an IDE:</h2>
                An Integrated Development Environment (IDE) is a software application that provides an environment for writing, debugging, and running code. There are several popular IDEs for Python. Some of the commonly used ones are:
                <ul>
                <li>PyCharm: Developed by JetBrains, PyCharm is a powerful and feature-rich IDE for Python.</li>
                <li>Visual Studio Code: A lightweight and customizable IDE with a rich Python extension ecosystem.</li>
                <li>Anaconda: A distribution of Python that comes with the Anaconda Navigator, which provides an IDE-like environment.</li>
                Choose an IDE that suits your needs and preferences. For this guide, we'll use Visual Studio Code (VS Code).
                </ul>
            </p>
            <p>
                <h2>3. Writing and Running Python Programs in VS Code:</h2>
                Here's how you can write and run Python programs in VS Code:
                <ul>
                <li>Open VS Code and create a new Python file. To create a new file, click on "File" &gt; "New File" or use the shortcut Ctrl + N (Windows/Linux) or Command + N (macOS).</li>
                <li>Save the file with a .py extension (e.g., hello_world.py).</li>
                <li>Start writing your Python code in the editor.</li>
                <li>To run the program, open the integrated terminal in VS Code. You can do this by clicking on "View" &gt; "Terminal" or using the shortcut Ctrl + ` (Windows/Linux) or Command + ` (macOS).</li>
                <li>In the terminal, navigate to the directory where your Python file is located using the cd command.</li>
                <li>Type python filename.py (replace "filename" with the name of your Python file) and press Enter.</li>
                <li>The Python program will execute, and the output will be displayed in the terminal.</li>
                </ul>
                


            </p>
            <div className="iframe">
            <iframe  width="560" height="315" src="https://www.youtube.com/embed/0QibxSdnWW4?si=azDAbTkJ2utHzmND" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
    )
}
export default Installation;