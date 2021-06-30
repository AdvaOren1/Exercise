import { useEffect, useRef, useState } from 'react'


function CountBugs() {
    const [counter, setCounter] = useState(0);
    const [newValue, setNewValue] = useState('');
    const [textArr, setTextArr] = useState([])
    const inputElement = useRef(null);

    const addBug = () => {
        console.log("be-tap2tel yesh harbe caele")
        setCounter(1);
    };
    const addText = () => {
        console.log("be-tap2tel ze yoter tov");
        let newArr = [...textArr]
        newArr.push(newValue)
        console.log('newArr: ', newArr);
        setTextArr(newArr);
        setNewValue('')
    }
    
    const handleChange = (event) => {
        stamFunction()
        setNewValue(event.target.val);
    }

    const stamFunction =()=>{
        console.log("en al tap2tel");
    }

    useEffect(()=>{
        if(Math.random() < 0.5){
            alert("Bug added successfully")
        }
    },[textArr])

    return (
        <div className="App">
            <h1>Count Your Bugs!</h1>
            <button onClick={addBug}>Add Bugs!</button>
            <button>Remove Bugs!</button>
            <h4>bugs counter: {counter}</h4>
            <h1>Not talking about the bugs:</h1>
            <input ref={inputElement}
                id='name' type="text" name="name" placeholder="שם" autoComplete='off' value={newValue} onChange={(e) => handleChange(e)}></input>

            <button onClick={addText}>Add</button>
            {textArr.map((text) => {
                return <li>{text}</li>
            })}
        </div>
    );
}

export default CountBugs;
