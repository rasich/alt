export default({ text, dark = false, onClick = () => {} }) => 
  <button 
    className={`input-button ${dark ? 'input-button__dark' : ''}`}
    onClick={() => onClick()}
  >{text}</button>