
import React from 'react';
import styled from 'styled-components';
import data from '../data';





const Typeahead = ({ suggestions, handleSelect }) => {
    const [value, setValue] = React.useState('');

    return (
        <Wrapper>
            <input
                type="text"
                value={value}
                onChange={ev => setValue(ev.target.value)}





            />
            <button onClick={() => setValue('')}>Clear</button>
            <BookList>
                {suggestions.map(suggestion => {


                    if (value.length > 1 && suggestion.title.toLowerCase().includes(value.toLowerCase())) {


                        return (

                            <BookItem
                                key={suggestion.id}
                                onClick={() => handleSelect(suggestion.title)}
                            >

                                {suggestion.title}
                            </BookItem>

                        );
                    }
                })}
            </BookList>

        </Wrapper>

    );
};


const BookList = styled.ul`
    list-style-type: none;
`;
const BookItem = styled.li`
    border: dotted 1px black;
`;

const Wrapper = styled.div`
    position: relative;
`;

export default Typeahead;