import React from 'react';
import Typeahead from './Typeahead';
import data from '../data'
import styled from 'styled-components';

function App(props) {
    // TODO!
    return (
        <>
            <Typeahead
                suggestions={data.books}
                handleSelect={(suggestion) => {
                    window.alert(suggestion)
                }}></Typeahead>
        </>
    )
}

export default App;
