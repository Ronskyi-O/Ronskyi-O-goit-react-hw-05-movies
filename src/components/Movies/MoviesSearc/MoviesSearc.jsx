import { useSearchParams } from "react-router-dom"
import { useState } from "react"

export const MoviesSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [, setSearchParams] = useSearchParams()


    const handleQuerySearch = e => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({ query: searchQuery });
        setSearchQuery('');
    };

    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                name="searchingMovie"
                placeholder="Search Movies"
                value={searchQuery}
                onChange={handleQuerySearch}
            />
            <button type="submit" >Search</button>
        </form>
    )
}