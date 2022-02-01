import React from 'react';
import './App.css';
import styled from "styled-components";
import {Background} from "./components/Background";
import {Character} from "./components/Character";
import {getPageData} from "./service/getPageData";

const pageData = getPageData();

function App() {
  return (
    <div className="App">
      <Background imageUrl={pageData.background.img} text={""}/>
      <Character imageUrl={pageData.char01.img} name={pageData.char01.name} text={""} />
    </div>
  );
}

export default App;
