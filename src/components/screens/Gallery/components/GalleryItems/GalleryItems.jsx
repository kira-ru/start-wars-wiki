import React from 'react';
import {Link, useSearchParams} from "react-router-dom";
import Card from "../../../../Card/Card";
import styles from './galleryitems.module.css'
import Grid from "../../../../Grid/Grid";
import {useGetResourceQuery} from "../../../../../service/swapiAPI";
import Paginator from "../../../../UI/Paginator/Paginator";
import Loader from "../../../../UI/Loader/Loader";
import Error from "../../../../UI/Error/Error";

const GalleryItems = ({resource}) => {
    const [queryParams] = useSearchParams()
    const currentPage = queryParams.get('page')
    const {data, isFetching, isError} = useGetResourceQuery({page: currentPage, resource});

    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    const {
        results: galleryItems,
        next,
        previous: prev,
        count
    } = {...data}
    return (
        <>
            <Grid>
                {
                    galleryItems.map(item => (
                        <Link to={`${item.id}`} key={item.name}>
                            <Card item={item} resource={resource}/>
                        </Link>
                    ))
                }
            </Grid>

            <Paginator
                total={count}
                currentPage={currentPage}
                next={next}
                prev={prev}
                resource={resource}
            />
        </>
    );
};

export default GalleryItems;