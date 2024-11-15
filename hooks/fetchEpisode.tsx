import { useState, useEffect } from "react";
import axios from "axios";

interface EpisodeInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodesResponse {
  info: EpisodeInfo;
  results: Episode[];
}
const useFetchEpisode = (url: string) => {
  const [data, setData] = useState<EpisodesResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      console.log("pidiendo datos")
      const response = await axios.get(url);
      const episodeData = response.data;

      setData(episodeData);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch };
};

export default useFetchEpisode;
