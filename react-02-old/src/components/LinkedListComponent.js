import React, { useState } from 'react';
import './LinkedList.css';

import {ListNode, LinkedList} from './scripts/LinkedList.js'

let list = new LinkedList();

function LinkedListDisplay() {
    const [target, setTarget] = useState(null);
    const [subject, setSubject] = useState("");
    const [amount, setAmount] = useState("");

    function InsertatStart () {
        if (subject === "" || amount === "") return;
        list.insertAtBeginning(subject, amount);
        setSubject("");
        setAmount("");
        setTarget(list.head);
    }

    function InsertatEnd () {
        if (subject === "" || amount === "") return;
        list.insertAtEnd(subject, amount);
        setSubject("");
        setAmount("");
        setTarget(list.tail());
    }

    function Insert () {
        if (subject === "" || amount === "") return;
        let current = target
        if (current === null) return;
        current.insertAfter(list, subject, amount)
        setSubject("");
        setAmount("");
        setTarget(current.next);
    }
    
    function enter (e) {
        if (e.key === 'Enter') {
            InsertatEnd();
        }
    }
    
    function Delete () {
        let current = target
        if (current === null) return;
        if (current.next !== null) {
            setTarget(current.next);
        } else {
            setTarget(current.prev);
        }
        current.deleteFrom(list)
    } 

    function FindStart () {
        setTarget(list.head);
    }
    
    function FindEnd () {
        setTarget(list.tail());
    }

    function Next () {
        let current = target
        if (current === null) return;
        if (current.next === null) return;
        setTarget(current.next);
    }

    function Prev () {
        let current = target
        if (current === null) return;
        if (current.prev === null) return;
        setTarget(current.prev);
    }
  
    return (
        <div className = "LinkedListCntroller">
            <p className = "currentNode">{target? target.show() : "Nothing to Show"}</p>
            <div>
                <button onClick = {InsertatStart} className = "allButtons">Insert at Start</button>
                <button onClick = {FindStart} className = "allButtons">{"<<"}</button>
                <button onClick = {Prev} className = "allButtons">{"<"}</button>
                <button onClick = {Insert} className = "allButtons">Insert</button>
                <button onClick = {Delete} className = "allButtons">Delete</button>
                <button onClick = {Next} className = "allButtons">{">"}</button>
                <button onClick = {FindEnd} className = "allButtons">{">>"}</button>
                <button onClick = {InsertatEnd} className = "allButtons">Insert at End</button>
            </div>
            <div>
                <input type="text" placeholder="Subject" id="subject"
                value={subject} onChange={(e) => setSubject(e.target.value)} onKeyPress={enter}></input>
                <input type="number" placeholder="Amount" id="amount"
                value={amount} onChange={(e) => setAmount(e.target.value)} onKeyPress={enter}></input>
            </div>
            <p className = "allNodes">{list.show()}</p>
        </div>
    );
}

export {LinkedListDisplay}

