import React from 'react'
import SearchInput from './SearchInput'
import List from './List'
import useDebounce from '../../hooks/useDebounce'

const Debounce = () => {
    const [searchValue, setSearchValue] = useState('')

    const debouncedSearchValue = useDebounce(searchValue, 1000)
    return (
        <>
            <SearchInput
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <List searchTerm={debouncedSearchValue} />
        </>
    )
}

export default Debounce;