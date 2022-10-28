// jshint ignore:start
import React, { useEffect, useState } from 'react';

const Home = () => {
  // how to fetch api public in react use state effect?
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quranData, setQuranData] = useState([]);

  useEffect(() => {
    const URL = 'https://al-quran-8d642.firebaseio.com/data.json?print=pretty';
    fetch(URL)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);

          setIsLoaded(true);
          setQuranData(data);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <dl>
        {quranData.map((quran, id) => (
          <div key={id} style={{ padding: '10px' }}>
            <dt>
              <strong>Nama Surah</strong> : {quran.nama} ({quran.arti})
            </dt>
            <dd>
              <strong>Asma</strong> : {quran.asma}
            </dd>
            <dd>
              <strong>Banyak Ayat</strong> : {quran.ayat}
            </dd>
            <dd>
              <strong>Rukuk</strong> : {quran.rukuk}
            </dd>
            <dd>
              <strong>Keterangan</strong> : {quran.keterangan}
            </dd>
          </div>
        ))}
      </dl>
    );
  }
};

export default Home;
