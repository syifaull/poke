import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CardPoke from '../components/CardPoke';
import NavbarComp from '../components/NavbarComp';

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [counter, setCounter] = useState(0)
  const [currentPage, setCurrentPage] = useState([])

  const getPokemon = async (page) => {
    await axios
    .get(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=6`)
    .then((response) => {
      setPokemon(response.data.results)
      setCurrentPage(response.data.count)

    })
    .catch((error) => {
      alert("error")
    })
  }

  useEffect(() => {
    getPokemon(counter);
  }, [counter]);

  const previous = () => {
    setCounter(counter <= 0 ? 0 : counter - 6);
  }

  const next = () => {
    // setCounter(counter + 6);
    setCounter(counter === currentPage ? currentPage : counter + 6)
  }

  return (
    <div>
      <NavbarComp/>
      {/* jumbotron */}
      <Container>
        <div className="row d-flex">
        {pokemon.map((poke, index) => {
          return (
            <CardPoke key={index} src = {poke.url} name = {poke.name}/>
          )
        })}
        </div>

        {/* pagination */}
        <div>
          <Button onClick={previous}>Previous</Button>
          <p>{1 + (counter / 6)}/{Math.ceil(currentPage / 6)}</p>
          <Button onClick={next}>Next</Button>
        </div>
      </Container>
    </div>
  )
}

export default Home