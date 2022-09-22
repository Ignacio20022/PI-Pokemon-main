import React from "react";

import style from "./Pagination.module.css";

export default function Pagination({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) {
    let pages = [];

    for (let x = 1; x <= Math.ceil(totalPosts / postsPerPage); x++) {
        pages.push(x);
    }

    return (
        <div className={style.pagination}>
            <button
                className={style.buttonPrevNext}
                onClick={() => {
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
            >
                {" < "}
            </button>
            {pages.map((page, index) => {
                return (
                    <button
                        className={
                            page === currentPage
                                ? style.buttonNumActive
                                : style.buttonNum
                            // style.buttonNum
                        }
                        key={index}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                );
            })}
            <button
                className={style.buttonPrevNext}
                onClick={() => {
                    if (currentPage < pages.length)
                        setCurrentPage(currentPage + 1);
                }}
            >
                {" > "}
            </button>
        </div>
    );
}
