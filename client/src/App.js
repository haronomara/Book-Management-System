
import React from 'react';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AddBook from './component/AddBook';
import Books from './Book/Books';
import About from './component/About';
import BookDetail from './Book/BookDetail';

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/add' element={<AddBook/>} exact/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/books/:id' element={<BookDetail/>} exact/>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
