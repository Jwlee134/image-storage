import React from "react";
import Masonry from "react-masonry-css";
import "../css/masonry.css";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
};

export default Layout;
