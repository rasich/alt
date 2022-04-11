import { useState } from 'react';

import Icon from '../../icon';
import InputButton from './input-button'

import './input.sass';


export default (props) => {
  const [input, setInput] = useState('');

  const onSubmit = () => {
    if (input.length) {
      alert(input)
      setInput('')
    }
  }


  return (
    <div className="input-block">
      <div className="input-wrapper">
        <input 
          placeholder={`Поиск по стране, региону, городу, ${props.placeholder}`}
          value={input}
          onInput={e => setInput(e.target.value)}
        />
        <Icon icon={'filter'}/>
      </div>
      <div className='input-buttons'>
        <InputButton text={'На карте'}/>
        <InputButton text={`Все ${props.buttonText} страны`} onClick={onSubmit} dark/>
      </div>
    </div>
  )
}