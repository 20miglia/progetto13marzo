import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import CommentAreaComponent from './Components/CommentAreaComponent';
import { BrowserRouter } from 'react-router-dom';
import AllTheBooksComponent from './Components/AllTheBooksComponent';
import SingleComment from './Components/SingleComment';







describe('main test', () => {
  it("renders welcome component", () =>{
  render(<App />);   
  const welcome = screen.getByText(/E' un vero piacere averti tra noi nel mondo EpiBooks/i);
  expect(welcome).toBeInTheDocument();
})

})


describe('cards', () => {
  it("renders bootstrap cards", () =>{
  render(<App />);   
  const allCards = screen.getAllByTestId('longBook');
  expect(allCards).toHaveLength(150)
})

})

describe('comments', () => {
  it("renders comment area", () =>{
  render(<CommentAreaComponent />);   
  const comment = screen.getByRole("long-area")
  expect(comment).toBeInTheDocument()
})

})

describe('filter test', () => {
  it("find one result", () =>{
  render(<App />);   
  const fix = screen.getByPlaceholderText(
    /Cerca un libro/i
  );
  fireEvent.change(fix, { target: { value: 'wild' } })
  const allCards = screen.getAllByTestId('longBook');
  expect(allCards).toHaveLength(1)
})

it("find two results", () =>{
  render(<App />);   
  const fix = screen.getByPlaceholderText(
    /Cerca un libro/i
  );
  fireEvent.change(fix, { target: { value: 'five' } })
  const allCards = screen.getAllByTestId('longBook');
  expect(allCards).toHaveLength(2)
})

})


describe('click book', () => {
  it('card color red', () => {
    render(<App />)
    const allCards = screen.getAllByTestId('longBook');
    const redBookCard = allCards[0]
    fireEvent.click(redBookCard)
    expect(redBookCard).toHaveStyle('border: 3px solid red')
  })

  it('book without border', () => {
    render(<App />)
    const allCards = screen.getAllByTestId('longBook');
    const firstCard = allCards[0]
    fireEvent.click(firstCard)
    expect(firstCard).toHaveStyle('border: 3px solid red')
    const secondCard = allCards[1]
    fireEvent.click(secondCard)
    expect(firstCard).not.toHaveStyle('border: 3px solid red')
  })
})

describe('Comment test', () => {
  it('no comments on load', () => {
    render(<App/>)
    const allComments = screen.queryAllByTestId('longComment')
    expect(allComments).toHaveLength(0)
  })

  it('comments on click', async () => {
    render(<App/>)
    const allCards = screen.getAllByTestId('longBook');
    const firstCard = allCards[0]
    fireEvent.click(firstCard)
    const allComments = await screen.findAllByTestId("longComment");
    expect(allComments).not.toHaveLength(0)
    })
})