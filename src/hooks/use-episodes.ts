import { EpisodeType } from '@/types';
import { useQuery } from '@apollo/client';
import { LIST_EPISODES } from '../graphql/queries';

interface UseEpisodesProps {
  searchTerm?: string;
}

interface ListEpisodesData {
  listEpisodes: EpisodeType[];
}

interface ListEpisodesVars {
  search?: string;
}

export const useEpisodes = ({ searchTerm = '' }: UseEpisodesProps = {}) => {
  const { data, loading, error, refetch } = useQuery<
    ListEpisodesData,
    ListEpisodesVars
  >(LIST_EPISODES, {
    variables: { search: searchTerm },
  });

  return {
    episodes: data?.listEpisodes ?? [],
    isLoading: loading,
    error,
    refetch,
  };
};
