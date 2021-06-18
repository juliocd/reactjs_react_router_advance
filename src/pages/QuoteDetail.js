import {Fragment} from 'react';
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Max',
        text: 'Learning Basic React'
    },
    {
        id: 'q2',
        author: 'Eliot',
        text: 'Learning Advance React'
    }
]

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote){
        return <p>Not quote found</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <p>sdada</p>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail;