import React, {useMemo} from 'react';
import nextBtn from './img/dark-next.png'
import prevBtn from './img/dark-prev.png'
import styles from './paginator.module.css'
import PageLink from "../PageLink/PageLink";
import cn from 'classnames'

import {createPageList, getTotalPages} from "../../../helpers";
import {useSearchParams} from "react-router-dom";

const Paginator = ({next, prev, total, currentPage}) => {
    const [$, setPage] = useSearchParams();

    const prevPage = () => {
        setPage({page: `${+currentPage - 1}`});
    };

    const nextPage = () => {
        setPage({page: `${+currentPage + 1}`});
    };

    const totalPages = getTotalPages(total)
    const pageList = useMemo(() => createPageList(totalPages), [totalPages])

    return (
        <div className={styles.paginator}>

            <button
                className={styles.btn}
                disabled={!prev}
                onClick={prevPage}
            >
                <img className={styles.image} src={prevBtn} alt="previous page"/>
            </button>

            <ul className={cn(styles.pages, 'list-reset')}>
                {pageList.map(page => (
                    <PageLink key={page} currentPage={currentPage} page={page} classes={styles.pageLink}/>
                ))}
            </ul>

            <button
                className={styles.btn}
                disabled={!next}
                onClick={nextPage}
            >
                <img className={styles.image} src={nextBtn} alt="next page"/>
            </button>

        </div>
    );
};

export default React.memo(Paginator);