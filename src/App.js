import React, { useState } from 'react';
import './App.css';
import Installation from "./topics/pythonbasics/Installation.js";
import Introduction from "./topics/pythonbasics/Introduction.js";
import Input from "./topics/pythonbasics/input.js";
import Variables from "./topics/pythonbasics/variables.js";
import Numeric from "./topics/datatypes/Numeric.js"
import Textdata from "./topics/datatypes/Textdata.js"
import Bool from "./topics/datatypes/Bool.js"
import Sequence from "./topics/datatypes/Sequence.js"
import Datatype from "./topics/datatypes/Datatype.js"
import Operator from "./topics/operators/Operators.js"
import Arithmetic from "./topics/operators/Arithmetic.js"
import Assignment from "./topics/operators/assignment.js"
import Bitwise from "./topics/operators/bitwise.js"
import Comparison from "./topics/operators/Comparison.js"
import Logical from "./topics/operators/Logical.js"
import Membership from "./topics/operators/membership.js"
import Controlflow from "./topics/controlflow/controlflow.js"
import Conditional from "./topics/controlflow/conditional.js"
import Loops from "./topics/controlflow/loops.js"
import Controlstatements from "./topics/controlflow/controlstatements.js"
import Func from './topics/functions/functions.js';
import Basic_fun from './topics/functions/basicfunction.js';
import Default_p from './topics/functions/defaultparameter.js';
import Multi_ret from './topics/functions/multiplereturn.js';
import Lambda_fun from './topics/functions/lambda';
import Recur from './topics/functions/recursive';
import High_order from './topics/functions/highorder.js';







const ExpandableList = ({ handleIntroductionClick }) => {
  const [expandedItems, setExpandedItems] = useState([]);
  

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <ul className='sidebar'>
      <li>
        <span className='menu1' onClick={() => toggleItem(0)}>
          <button>python basics</button>
        </span>
        {expandedItems.includes(0) && (
          <ul>
            <li>
              <button onClick={()=>handleIntroductionClick('installation')} className='menu2'>Installation</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('introduction')} className='menu2'>Introduction</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('variables')} className='menu2'>Variables</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('input_type')} className='menu2'>Types of inputs</button>
            </li>

          </ul>
        )}
      </li>
      <li>
        <span className='menu1' onClick={() => toggleItem(1)}>
          <button>Datatypes</button>
        </span>
        {expandedItems.includes(1) && (
          <ul>
            <li>
              <button onClick={()=>handleIntroductionClick('datatype')} className='menu2'>Introduction</button>
            </li>
            <li>
              <button onClick={()=>handleIntroductionClick('numeric')} className='menu2'>Numeric Datatypes</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('textual_datatype')} className='menu2'>Textual Datatype</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('bool_type')} className='menu2'>Boolean Datatype</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('sequence_datatype')} className='menu2'>Sequence Datatypes</button>
            </li>
          </ul>
        )}
      </li>
      <li>
        <span className='menu1' onClick={() => toggleItem(2)}>
          <button>Python Operators</button>
        </span>
        {expandedItems.includes(2) && (
          <ul>
            <li>
            <button onClick={()=>handleIntroductionClick('introduction_operations')} className='menu2'>Introduction</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('arithmetic_op')} className='menu2'>Arithmetic</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('assignment_op')} className='menu2'>Assignment</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('bitwise_op')} className='menu2'>Bitwise</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('comparison_op')} className='menu2'>Comparison</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('logical_op')} className='menu2'>Logical</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('membership_op')} className='menu2'>Membership</button>
            </li>
          </ul>
        )}
      </li>
      <li>
        <span className='menu1' onClick={() => toggleItem(3)}>
          <button>controlflow statements</button>
        </span>
        {expandedItems.includes(3) && (
          <ul>
          <li>
            <button onClick={()=>handleIntroductionClick('control_introduction')} className='menu2'>Controlflow Introduction</button>
          </li>
          <li>
          <button onClick={()=>handleIntroductionClick('conditional_control')} className='menu2'>Conditional statements</button>
          </li>
          <li>
          <button onClick={()=>handleIntroductionClick('loops_control')} className='menu2'>Loops</button>
          </li>
          <li>
          <button onClick={()=>handleIntroductionClick('controlstatements_control')} className='menu2'>controlstatements</button>
          </li>

        </ul>
        )}
      </li>
      <li>
        <span className='menu1' onClick={() => toggleItem(4)}>
          <button>Functions</button>
        </span>
        {expandedItems.includes(4) && (
          <ul>
            <li>
            <button onClick={()=>handleIntroductionClick('introduction_fun')} className='menu2'>Introduction</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('basic_fun')} className='menu2'>Basic Functions</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('default_fun')} className='menu2'>Default parameter</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('multi_return_fun')} className='menu2'>Multi-return values</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('recur_fun')} className='menu2'>Recursive</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('lambda_fun')} className='menu2'>Lambda</button>
            </li>
            <li>
            <button onClick={()=>handleIntroductionClick('high_order_fun')} className='menu2'>High-order</button>
            </li>
          </ul>
        )}
      </li>
      <li>
        <span className='menu1' onClick={() => toggleItem(5)}>
          <button>python basics</button>
        </span>
        {expandedItems.includes(5) && (
          <ul>
            <li>
              <a href='/Introduction' className='menu2'>Introduction</a>
            </li>
            <li>
              <a href='/first-program' className='menu2'>First program</a>
            </li>
            <li>
              <a href='/variables' className='menu2'>Variables</a>
            </li>
            <li>
              <a href='/operators' className='menu2'>Operators</a>
            </li>
          </ul>
        )}
      </li>
      
    </ul>
  );
};

function App() {
  const [showItem, setShowItem] = useState(null);
  const handleIntroductionClick = (item) => {
    setShowItem(item);
  };

  return (
    <div className='bd'>
      <header className='header'>
        <nav className='nav'>
          <div id='nav1'>connectsmart</div>
          <div className='nav2'>
            <a href=''>Home</a>
            <a href=''>about us</a>
            <a href=''>contact</a>
            <a href=''>help</a>
          </div>
        </nav>
      </header>
      
      <div className='menu'>
        <span id='w1'>Topics</span>
        <ExpandableList handleIntroductionClick={handleIntroductionClick} />
      </div>
      <div className='body1'>
      {showItem =='installation' &&<Installation />}
      {showItem =='introduction' &&<Introduction />}
      {showItem =='input_type' &&<Input />}
      {showItem =='variables' &&<Variables />}
      {showItem =='datatype' &&<Datatype />}
      {showItem =='numeric' &&<Numeric />}
      {showItem =='textual_datatype' &&<Textdata />}
      {showItem =='bool_type' &&<Bool />}
      {showItem =='sequence_datatype' &&<Sequence />}
      {showItem =='introduction_operations' &&<Operator />}
      {showItem =='arithmetic_op' &&<Arithmetic />}
      {showItem =='assignment_op' &&<Assignment />}
      {showItem =='bitwise_op' &&<Bitwise />}
      {showItem =='comparison_op' &&<Comparison />}
      {showItem =='logical_op' &&<Logical />}
      {showItem =='membership_op' &&<Membership />}
      {showItem =='control_introduction' &&<Controlflow />}
      {showItem =='conditional_control' &&<Conditional />}
      {showItem =='loops_control' &&<Loops />}
      {showItem =='controlstatements_control' &&<Controlstatements />}
      {showItem =='introduction_fun' &&<Func />}
      {showItem =='basic_fun' &&<Basic_fun />}
      {showItem =='default_fun' &&<Default_p />}
      {showItem =='multi_return_fun' &&<Multi_ret/>}
      {showItem =='lambda_fun' &&<Lambda_fun />}
      {showItem =='recur_fun' &&<Recur />}
      {showItem =='high_order_fun' &&<High_order />}
      
      
      </div>
    </div>
  );
}
export default App;