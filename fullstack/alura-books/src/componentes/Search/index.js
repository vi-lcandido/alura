import Input from "../Input";
import styled from "styled-components";
import { useState } from 'react';
import { books } from './searchData'

const SearchContainer = styled.section`
    background-image: linear-gradie (90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px 0px;
// width: 40%;
border:1px white solid;
border-radius:10px;
cursor:pointer;
img{
    width:100px;
}

&:hover{
    background-color: rgba(255, 255, 255, .4);
}

`

function Search(){
    const [searchedBooks, setSearchedBooks] = useState([]);

    return(
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input 
                type="text"
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const searchText = event.target.value
                    const searchResult = books.filter(book => book.name.includes(searchText))
                    setSearchedBooks(searchResult)
                }}
            />
              { searchedBooks.map( book => (
                <Result>
                    <Subtitle>{book.name}</Subtitle>
                    <img src={book.src}/>
                </Result>
            ) ) }
        </SearchContainer>
    )
}

export default Search;