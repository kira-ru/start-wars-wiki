import styles from './gallery.module.css'
import React from 'react'
import {useGetResourceQuery} from "../../../service/swapiAPI";
import Card from "../../Card/Card";
import Container from "../../Container/Container";
import Loader from "../../UI/Loader/Loader";
import {Link, useSearchParams} from "react-router-dom";
import Paginator from "../../UI/Paginator/Paginator";
import Title from "../../UI/Title/Title";
import Grid from "../../Grid/Grid";
import Error from "../../UI/Error/Error";


const Gallery = ({resource}) => {
    const [queryParams] = useSearchParams()
    const currentPage = queryParams.get('page')

    const {data, isFetching, isError} = useGetResourceQuery({page: currentPage, resource});
    const {
        results: items,
        next,
        previous: prev,
        count
    } = {...data}

    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    return (
        <section className={styles.wrapper}>
            <Container>
                <Title>{resource}</Title>

                <Grid>
                    {
                        items.map(item => (
                            <Link to={`${item.id}`} key={item.name}>
                                <Card  item={item} resource={resource}/>
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
            </Container>
        </section>
    );
};


export default React.memo(Gallery);