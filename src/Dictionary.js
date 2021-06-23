import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary (props){
    let [keyword, setKeyword] = useState (props.defaultKeyword);
    let [results, setResults] = useState (null);
    let [loaded, setLoaded] = useState (false);
    let [photos, setPhotos] = useState (null);

    function handleResponse (response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse (response) {
        setPhotos(response.data.photos);
    }
    
    function search( ) {
        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001f185843a1de74f7d96ab8b95798187bf";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, {headers : headers}).then(handlePexelsResponse);
    }

    function handleSubmit (event) {
        event.preventDefault ();
        search( );
    }
    
    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }

    function load ( ) {
        setLoaded(true)
        search ( );
    } 

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word are you looking for?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="seach" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
                    </form>
                <div className="hint">
                   You can search for words like: sunset, forest, wine...or anything else 
                </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>        
        );
    } else {
        load ( ) 
        return "Loading"; 
    }
}