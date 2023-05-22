import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`${style.flex_container} ${style.flex_end}`}>
    <li className="flex-item">1</li>
      <li className="flex-item">2</li>
      <li className="flex-item">3</li>
      <li className="flex-item">4</li>
      <li className="flex-item">5</li>
      <li className="flex-item">6</li>
    </div>
  )
}

export default Footer