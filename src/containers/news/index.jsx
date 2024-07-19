import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { IoNewspaperSharp } from "react-icons/io5";
import { filterOptions, NewsData } from "./utils";
import "./styles.scss";

const News = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleFilter = (id) => {
    setFilterValue(id);
  };

  const filteredNewsData =
    filterValue === 1
      ? NewsData
      : NewsData.filter((item) => item.sectionId === filterValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="News"
        icon={<IoNewspaperSharp size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map((option) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
              className={option.id === filterValue ? 'active' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredNewsData.map((item, key) => (
            <div
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={key}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="project image" />
                </a>
              </div>
              <div className="overlay">
                {hoveredIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
