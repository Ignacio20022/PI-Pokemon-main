import React from "react";

import style from "./Pagination.module.css";

export default function Pagination({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
    setPokemonsToShow,
    maxLimit,
    setMaxLimit,
    minLimit,
    setMinLimit,
    pageLimit,
    setPageLimit,
}) {
    let pages = [];

    for (let x = 1; x <= Math.ceil(totalPosts / postsPerPage); x++) {
        pages.push(x);
    }

    const rederPagination = pages.map((page, index) => {
        if (page < maxLimit + 1 && page > minLimit) {
            return (
                <button
                    hidden={totalPosts < 2}
                    className={
                        page === currentPage
                            ? style.buttonNumActive
                            : style.buttonNum
                    }
                    key={index}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            );
        }
    });

    let pageIncrementBtn = null;

    if (pages.length > maxLimit)
        pageIncrementBtn = (
            <button
                onClick={() => {
                    if (currentPage < pages.length) {
                        setCurrentPage(currentPage + 1);
                        if (currentPage + 1 > maxLimit) {
                            setMaxLimit(maxLimit + pageLimit);
                            setMinLimit(minLimit + pageLimit);
                        }
                    }
                }}
            >
                &hellip;
            </button>
        );

    let pageDecrementBtn = null;

    if (pages.length > maxLimit)
        pageDecrementBtn = (
            <button
                onClick={() => {
                    if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                        if ((currentPage - 1) % pageLimit === 0) {
                            setMaxLimit(maxLimit - pageLimit);
                            setMinLimit(minLimit - pageLimit);
                        }
                    }
                }}
            >
                &hellip;
            </button>
        );

    return (
        <div className={style.pagination}>
            <button
                hidden={totalPosts < 2}
                className={style.buttonPrevNext}
                onClick={() => {
                    if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                        if ((currentPage - 1) % pageLimit === 0) {
                            setMaxLimit(maxLimit - pageLimit);
                            setMinLimit(minLimit - pageLimit);
                        }
                    }
                }}
            >
                {" < "}
            </button>

            {pageDecrementBtn}
            {rederPagination}
            {pageIncrementBtn}

            <button
                hidden={totalPosts < 2}
                className={style.buttonPrevNext}
                onClick={() => {
                    if (currentPage < pages.length) {
                        setCurrentPage(currentPage + 1);
                        if (currentPage + 1 > maxLimit) {
                            setMaxLimit(maxLimit + pageLimit);
                            setMinLimit(minLimit + pageLimit);
                        }
                    }
                }}
            >
                {" > "}
            </button>
        </div>
    );
}
