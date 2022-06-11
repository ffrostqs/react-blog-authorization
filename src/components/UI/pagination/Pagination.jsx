import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="pagination__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'pagination__page pagination__page--current' : 'pagination__page'}>
                    {p}
                </span>
            )}
        </div>
    );
}
export default Pagination;
