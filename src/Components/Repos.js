import React from 'react';
import { Bar3D, Column3D, Doughnut2D, Pie3D } from '../Charts';
// import { Pie3D, Column3D, Bar3D, Doughnut2D } from "../Charts"

function removeTrademark() {
  console.log(document.querySelectorAll(`.raphael-group`));
}
removeTrademark();
const Repos = ({ repos }) => {
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;

    if (!language) return total;
    if (!total[language])
      total[language] = { label: language, value: 1, stars: stargazers_count };
    else {
      total[language].value += 1;
      total[language].stars += stargazers_count;
    }

    return total;
  }, {});

  //most used language
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  //   console.log(mostUsed[0].label);
  //most star per language
  const mostStar = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .slice(0, 5)
    .map((item) => {
      return { ...item, value: item.stars };
    });

  // stars, forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, forks, name } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <section className="section">
      <div className="mb-5 section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={mostUsed} />
        {/* <h1>
          Your most used language is{' '}
          <span className="font-bold">{mostUsed[0].label}</span>
        </h1> */}
        <Column3D data={stars} />
        <Bar3D data={forks} />
        <Doughnut2D data={mostStar} />
      </div>
    </section>
  );
};

export default Repos;
