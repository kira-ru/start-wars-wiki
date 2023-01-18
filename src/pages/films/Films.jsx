import React from 'react';
import {useGetResourceQuery} from "../../service/swapiAPI";
import {FILMS} from "../../constants/swapiAPI";
import Loader from "../../components/UI/Loader/Loader";
import FilmsPage from "../../components/screens/FilmsPage/FilmsPage";
import Error from "../../components/UI/Error/Error";

const Films = () => {
    const {data, isFetching, isError} = useGetResourceQuery({page: 1, resource: FILMS});
    const {results: films} = {...data}


    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    return <FilmsPage films={films}/>;
};

export default Films;