import styles from './chips.module.css';

export default (props) => <>
  {(!!props.buttons) && (
    <div className={styles.chips}>
    {props.buttons.map((text, index) => (
      <button 
        className={styles.chip} 
        key={index}
        onClick={() => {
          if (text === 'Пляжи') props.setPlaceholder('название пляжа')
          else if (text === 'Breezzor Pass') props.setPlaceholder('названию отеля')
          else if (text === 'Маршруты') props.setPlaceholder('названию маршрута')
          else if (text === 'Впечатления') props.setPlaceholder('названию впечатления')

          props.setButtonText(text.toLowerCase())
        }}
      >{text}</button>
      ))}
    </div>
  )}
</>