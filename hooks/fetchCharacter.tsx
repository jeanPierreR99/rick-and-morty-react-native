import { useState, useEffect } from "react";
import axios from "axios";

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const useFetchCharacter = (url: string) => {
  const [data, setData] = useState<Character>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        const episodeData = response.data;

        const characterPromises = episodeData.characters.map(
          (characterUrl: any) => axios.get(characterUrl).then((res) => res.data)
        );

        const characters = await Promise.all(characterPromises);

        setData({ ...episodeData, characters });
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchCharacter;
