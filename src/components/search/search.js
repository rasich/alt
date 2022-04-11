import { useState } from 'react';
import Chips from './chips';
import Input from './input';

const Search = () => {
  const [placeholder, setPlaceholder] = useState('название пляжа')
  const [buttonText, setButtonText] = useState('название пляжа')

  return (<>
    <Chips 
      buttons={['Пляжи', 'Breezzor Pass', 'Маршруты', 'Впечатления']} 
      setPlaceholder={setPlaceholder}
      setButtonText={setButtonText}
    />
    <Input placeholder={placeholder} buttonText={buttonText}/>
  </>)
}

export default Search;
