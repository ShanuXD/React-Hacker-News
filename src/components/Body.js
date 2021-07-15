import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { timeConverter } from "../utilities/TimeConverter";
import { getData } from "../utilities/GetStories";

const Body = ({ newsType }) => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setData([]);
    getData(newsType)
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, [newsType]);

  // Loader
  if (data.length === 0) {
    return (
      <div className="loading-container">
        <div className="loader">
          <div className="circle" id="a"></div>
          <div className="circle" id="b"></div>
          <div className="circle" id="c"></div>
        </div>
        <div className="caption">Loading....</div>
      </div>
    );
  }

  // Pegination
  const storiesPerPage = 10;
  const pagesVisited = pageNumber * storiesPerPage;
  const pageCount = Math.ceil(data.length / storiesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayUsers = data
    .slice(pagesVisited, pagesVisited + storiesPerPage)
    .map((story, index) => {
      const { id, by, title, url, time } = story;
      const c_time = timeConverter(time);
      return (
        <div key={id} className="story" id={`/${newsType}/${id}`}>
          <div className="author">
            <div className="title">Title: {title}</div>
            <div>Author: {by}</div>
            <div className="create-at">Time: {c_time}</div>
            <a className="link" href={url}>
              Story Link
            </a>
          </div>
        </div>
      );
    });

  return (
    <div className="body">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        marginPagesDisplayed={0}
        pageRangeDisplayed={1}
        containerClassName={"btns-container"}
        previousLinkClassName={" btn prev-btn"}
        nextLinkClassName={"btn next-btn"}
        disabledClassName={"disable"}
        activeClassName={"active-btn"}
      />
      {displayUsers}
    </div>
  );
};

export default Body;
