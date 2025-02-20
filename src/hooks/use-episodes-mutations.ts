import {
  CREATE_EPISODE,
  DELETE_EPISODE,
  UPDATE_EPISODE,
} from '@/graphql/mutations';
import { EpisodeInput, EpisodeType, UpdateEpisodeInput } from '@/types';
import { gql, useMutation } from '@apollo/client';

export function useEpisodeMutations() {
  const [createEpisode] = useMutation(CREATE_EPISODE, {
    update(cache, { data: { createEpisode } }) {
      cache.modify({
        fields: {
          listEpisodes(existingEpisodes = []) {
            const newEpisodeRef = cache.writeFragment({
              data: createEpisode,
              fragment: gql`
                fragment NewEpisode on Episode {
                  id
                  series
                  title
                  description
                  seasonNumber
                  episodeNumber
                  releaseDate
                  imdbId
                }
              `,
            });
            return [...existingEpisodes, newEpisodeRef];
          },
        },
      });
    },
  });

  const [updateEpisode] = useMutation(UPDATE_EPISODE, {
    update(cache, { data: { updateEpisode } }) {
      cache.modify({
        fields: {
          listEpisodes(existingEpisodes = []) {
            return existingEpisodes.map((episode: EpisodeType) =>
              episode.id === updateEpisode.id ? updateEpisode : episode
            );
          },
        },
      });
    },
  });

  const [deleteEpisode] = useMutation(DELETE_EPISODE, {
    update(cache, { data: { deleteEpisode } }) {
      cache.modify({
        fields: {
          listEpisodes(existingEpisodes = [], { readField }) {
            return existingEpisodes.filter(
              (episode: EpisodeType) =>
                readField('id', episode) !== deleteEpisode
            );
          },
        },
      });
    },
  });

  return {
    createEpisode: (episode: EpisodeInput) =>
      createEpisode({ variables: { episode } }),
    updateEpisode: (episode: UpdateEpisodeInput) =>
      updateEpisode({ variables: { episode } }),
    deleteEpisode: (episodeId: string) =>
      deleteEpisode({ variables: { episodeId } }),
  };
}
