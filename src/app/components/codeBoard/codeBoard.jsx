'use client'
import React from 'next';
import { useState } from 'react';
import './globals.css'

let CodeBoard = (props) => {

  const [copy, setCopy] = useState(false);

  const copyToClipboard = () => {
    const contentToCopy = document.querySelector('.dec_variable').innerText;
    navigator.clipboard.writeText(contentToCopy)
      .then(() => {
        setCopy(true);
        setTimeout(() => setCopy(false), 2500);
      })
      .catch((error) => {
        console.error('Failed to copy:', error)
        document.querySelector('.btn_copy_Code .btn').innerHTML = 'Failed to copy.'
      });
  };

  return (
    <div className='codeBoard'>
      <h1 id='text'>JavaScript</h1>
      <div className='dec_variable'>
        <span id='kayWord'>let</span>
        <span id='variableName'>myAge</span>
        <span id='equal'>{'='}</span>
        <span className='string number boolean array object'>{'"ashraf"'}</span>
        <span id='semycolumn'>{';'}</span>
      </div>
      <div className='btn_copy_Code'>
        <button className='btn' onClick={copyToClipboard}>{copy ? 'Copied!' : 'Copy Content'}</button>
      </div>
    </div>
  )
}
export default CodeBoard;