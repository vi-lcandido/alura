import styled from 'styled-components';

const Option = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  //text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const Options = styled.ul`
  display: flex;   
`

const textOptions = ['CATERGORIAS', 'FAVORITOS', 'MINHA ESTANTE']; 

function OpcoesHeader() {
    return(
        <Options>
          { textOptions.map((texto) => (
            <Option><p>{texto}</p></Option>
          ) )}
        </Options>
    )
}

export default OpcoesHeader;