import './style.css'

const textOptions = ['CATERGORIAS', 'FAVORITOS', 'MINHA ESTANTE']; 

function OpcoesHeader() {
    return(
        <ul className='opcoes'>
          { textOptions.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ) )}
        </ul>
    )
}

export default OpcoesHeader;