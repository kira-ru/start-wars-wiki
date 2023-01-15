import React from 'react';
import {useGetResourceQuery} from "../../service/swapiAPI";
import {FILMS} from "../../constants/swapiAPI";
import Loader from "../../components/UI/Loader/Loader";
import HomePage from "../../components/screens/HomePage/HomePage";
import Error from "../../components/UI/Error/Error";

const Home = () => {
    const {data, isFetching, isError} = useGetResourceQuery({page: 1, resource: FILMS});
    const {results: films} = {...data}


    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    return <HomePage films={films}/>;
};

export default Home;