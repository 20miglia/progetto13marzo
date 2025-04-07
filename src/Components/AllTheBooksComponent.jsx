import React, { useEffect, useState} from 'react'
import Books from '../External/history.json'
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from '../Components/SingleBook';
import CommentAreaComponent from './CommentAreaComponent';








const arrayBooks = Books

function AllTheBooksComponent({data}) {

  //Creiamo uno "Stato"
  const [autore, setAutore] = useState(arrayBooks) // "useState" è il nostro "Hook" e tra le parente tonde inseriamo 
  const [selected, setSelected] = useState("")  // il nostro valore iniziale che è "arrayBooks"
  /*const [search, setSearch] = useState()           //Adesso ci creiamo "un secondo Stato" che è il valore
                                                   //di ricerca
  const handleSearch = (event) => {                //A questo punto ci creiamo una funzione che riceverà
                                                   //come parametro di ingresso "event" perchè l'idea è quella
         setSearch(event.target.value)             //di avere event.target.value // a questo punto noi vogliamo
         const filteredBooks = arrayBooks.filter(test => test.title.toLowerCase().includes(event.target.value.toLowerCase()))//filtrare i libri// "arrayBooks" sono tutti i libri
                                                  // invece di "includes(event.target.value)" dovremmo inserire
                                                   // il valore di ricerca "search" e quindi ".includes(search)" che poi sarebbe lo "Stato"
                                                   //ma poichè "lo Stato" non si setta immediatamente inseriamo "event.target.value"
      setAutore(filteredBooks)                    //Adesso ci rimane da dire a "React" che "lo Stato auotore" è cambiato
    }    */                                        //quindi facciamo "setAutore(filteredBooks)"
                                                 //Adesso quello che ci rimane da fare e dire che quando cambia quel valore noi vogliamo che venga eseguita questa funzione "handleSearch"

    useEffect(() => {
      
      const filteredBooks = arrayBooks.filter(test => test.title.toLowerCase().includes(data.toLowerCase()))

       setAutore(filteredBooks)

    }, [data])








    return (                                                     
      <>                                             
     
     {/* <Form>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Title" onChange={handleSearch} /> 
      </Form.Group>                                                  
    </Form>  */}











     <Container className="mt-2">
      <Row>
       <Col md={8} className='bg-dark'>
         
         <Row>

        {autore.map((u) => (                      //A questo punto non facciamo il map su "arrayBooks" ma su "autore" che è il nome della variabile definita nello "Stato" che all'interno ha sempre "arrayBooks"
        <Col xs={12} md={4} lg={3} className='gy-3'> 
        <SingleBook key={u.asin} set={u} selected={selected} setSelected={setSelected}/>   
        
        </Col>)
        
        // <Card>
        // <Card.Img variant="top" src={u.img} />
        //  <Card.Body>
        //   <Card.Title>{u.title}</Card.Title>
        //   <Card.Text>
        //       {u.price}
        //  </Card.Text>
        // </Card.Body>
        // </Card>
      
       
        // </Col>
      
      
         )}

        </Row>
       </Col>

       <Col md={4}>
          <h3 className='text-center'>Comment Area</h3>
           {selected ? <CommentAreaComponent asin={selected}/> : <h4>Seleziona un libro e lascia il tuo commento</h4>}            {/* <CommentAreaComponent asin={selected}/> */}
          
       </Col>






       </Row>
    </Container>

        
    </>
    )
}

export default AllTheBooksComponent
