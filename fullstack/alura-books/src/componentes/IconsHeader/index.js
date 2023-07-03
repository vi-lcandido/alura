import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import './style.css'

const icons = [perfil, sacola]; 

function IconsHeader() {
    return(
      <ul className='icons'>
      {icons.map((icon) => (
        <li className='icon'><img src={icon} alt='icone'></img></li>
      ))}
    </ul>
    )
}

export default IconsHeader;