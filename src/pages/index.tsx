import React, { useEffect, useState } from 'react';

function Dogs(props: any) {
  const [dogs, setDogs] = useState<any>(null);
  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((res) => {
        setDogs(res);
      });
  }, []);
  if (!dogs) return;
  return (
    <main>
      <h1>Dogs requested at client side when rendering this page: </h1>
      <img style={{ height: '300px' }} alt='Happy dog' src={dogs.message} />
      <p>response: {JSON.stringify(dogs)}</p>
    </main>
  );
}

export default Dogs;
