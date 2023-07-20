import Header from './componentes/Header'
import styled from 'styled-components'
import Search from './componentes/Search'
import LastReleases from './componentes/LastReleases'

const AppContainer =  styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
     <Header/>
     <Search/>
     <LastReleases/>
    </AppContainer>
  );
}

export default App;
