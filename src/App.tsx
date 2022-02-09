import React from 'react';
import './App.css';
import {Background} from "./components/Background";
import {Character} from "./components/Character";
import {getPageData} from "./service/getPageData";

const pageData = getPageData();

function App() {
    return (
        <div className="App">
            <Background imageUrl={pageData.background.img} text={""}/>
                <Character imageUrl={pageData.char01.img} name={pageData.char01.name} text={""} position={"right"}/>
                <Character imageUrl={pageData.char02.img} name={pageData.char02.name} text={""} position={"left"} />
        </div>
    );
}

export default App;
