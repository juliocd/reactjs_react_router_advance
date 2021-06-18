import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();
    const addQuoteHandler = (quoteData) => {
        console.log(quoteData)

        history.push('/quotes'); // Add a mew page to the history stack
        //history.replace('/quotes'); // Redirect to a new page (Destroy last history stack)
    }
    
    return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote;