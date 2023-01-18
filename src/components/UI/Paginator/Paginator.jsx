import React, {useMemo} from 'react';
import {Link, useParams, useSearchParams} from "react-router-dom";
import {createPageList, getTotalPages} from "../../../helpers";
import darkNext from './img/dark-next.png'
import prevNext from './img/dark-prev.png'
import styles from './paginator.module.css'
import PageLink from "../PageLink/PageLink";
import cn from 'classnames'

const Paginator = ({next, prev, total, currentPage, resource}) => {
    const [$, setPage] = useSearchParams();

    const prevPage = () => {
        setPage({page: `${+currentPage - 1}`});
    };

    const nextPage = () => {
        setPage({page: `${+currentPage + 1}`});
    };

    const totalPages = getTotalPages(total)
    const pageList = useMemo(() => createPageList(totalPages), [totalPages])

    // function nextPage() {
    //     .push(`/${resource}?page=${+currentPage-1}`)
    // }

    return (
        <div className={styles.paginator}>

            <button className={styles.btn} disabled={!prev} onClick={prevPage}>
                <img className={styles.image} src={prevNext} alt="previous page"/>
            </button>

            <ul className={cn(styles.pages, 'list-reset')}>
                {pageList.map(page => (
                    <PageLink key={page} currentPage={currentPage} page={page} classes={styles.pageLink}/>
                ))}
            </ul>

            <button className={styles.btn} disabled={!next} onClick={nextPage}>
                <img className={styles.image} src={darkNext} alt="next page"/>
            </button>

        </div>
    );
};

export default React.memo(Paginator);