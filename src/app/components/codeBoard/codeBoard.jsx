import './globals.css'

let name = true;

let CodeBoard = (props) => {
  return (
    <div className='codeBoard'>
      <h1 id='text'>JavaScript</h1>
      <div className='dec_variable'>
        <span id='kayWord'>let</span>
        <span id='variableName'>myAge</span>
        <span id='equal'>{'='}</span>
        <span className='string number boolean'>{'"ashraf"'}</span>
        <span id='semycolumn'>{';'}</span>
      </div>
      <div className='btn_copy_Code'>
        <button className='btn'>copy code</button>
      </div>
    </div>
  )
}
export default CodeBoard;