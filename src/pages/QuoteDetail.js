import {Fragment} from 'react';
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>Quote Detail page</h1>
            <p>The id is {params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <p>sdada</p>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail;