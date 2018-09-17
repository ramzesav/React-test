'use strict';


const Stars = ({count}) => {
  let star = [];

  if(count < 1 || count > 5 || typeof count !== 'number') {
    return null;
  }

  for(let i = 0; i < count; i++) {
    star.push(i+1)
  }

  const countStar = star.map(el => (
    <li key={el}><Star /></li>
  ));
  
  return <ul className="card-body-stars u-clearfix">{countStar}</ul>;
}

Stars.defaultProps = {
  count: 0
};

