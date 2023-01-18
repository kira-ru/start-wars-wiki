import React from 'react';
import Card from "../../../../Card/Card";
import Grid from "../../../../Grid/Grid";
import Loader from "../../../../UI/Loader/Loader";
import Error from "../../../../UI/Error/Error";
import styles from "../../gallery.module.css";

import {useDebounce} from "../../../../../hooks";
import {useSearchItemQuery} from "../../../../../service/swapiAPI";
import {Link} from "react-router-dom";

const SearchItems = ({resource, searchValue}) => {
    const debounceSearchValue = useDebounce(searchValue, 1000)

    const {data, isFetching, isError} = useSearchItemQuery({resource, searchValue: debounceSearchValue}, {
        skip: debounceSearchValue === ''
    })

    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    const {results: searchResult} = {...data}
    return (
        <>
            {
                searchResult.length
                    ? <Grid>
                        {
                            searchResult.map(item => (
                                <Link to={`${item.id}`} key={item.name}>
                                    <Card item={item} resource={resource}/>
                                </Link>
                            ))
                        }
                      </Grid>

                    : <p className={styles.text}>
                        No such {resource} was found
                      </p>
            }
        </>

)
    ;
};

export default SearchItems;