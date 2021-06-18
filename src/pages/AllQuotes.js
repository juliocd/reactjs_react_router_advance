import QuoteList from '../components/quotes/QuoteList';

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

const AllQuote = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuote;