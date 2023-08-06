import { books } from "./dataLastReleases"
import styled from 'styled-components';
import { Title } from "../Title";
import RecomendedCard from "../RecomendedCard";
import imgBook from "../../imagens/livro2.png"

const LastReleasesContainer = styled.section `
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
    return(
    <LastReleasesContainer>
        <Title 
            color="#EB9B00" 
            fontSize='36px' 
        >
            Últimos Lançamentos
        </Title>
        <NewBooksContainer>
        {books.map(book => (
            <img src={book.src}/>
        ))}
        </NewBooksContainer>
        <RecomendedCard
            title="Talvez você se interesse por"
            subtitle="Angular 11"
            description="Construindo uma aplicação com a plataforma google"
            img={imgBook}
        />
    </LastReleasesContainer>
    )
}

export default LastReleases