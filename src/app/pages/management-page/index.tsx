import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GET_EPISODE_BY_ID } from '@/graphql/queries';
import { useEpisodeMutations } from '@/hooks/use-episodes-mutations';
import { EpisodeType } from '@/types';
import { useQuery } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { z } from 'zod';

const episodeFormSchema = z.object({
  id: z.string().optional(),
  series: z.string().nonempty('Series name is required'),
  title: z.string().nonempty('Title is required'),
  description: z.string().nonempty('Description is required'),
  seasonNumber: z.coerce.number().min(1, 'Season number must be at least 1'),
  episodeNumber: z.coerce.number().min(1, 'Episode number must be at least 1'),
  releaseDate: z.string().nonempty('Release date is required'),
  imdbId: z.string().nonempty('IMDB ID is required'),
});

type EpisodeFormValues = z.infer<typeof episodeFormSchema>;

const ManagementPage = () => {
  const params = useParams();
  const router = useNavigate();
  const episodeId = params.id ?? '';
  const isEditing = Boolean(params.id);

  const { data } = useQuery<{
    getEpisodeById: EpisodeType;
  }>(GET_EPISODE_BY_ID, {
    variables: { episodeId },
  });

  const { createEpisode, updateEpisode } = useEpisodeMutations();

  const episode = data?.getEpisodeById ?? {
    id: '',
    series: '',
    title: '',
    description: '',
    seasonNumber: 1,
    episodeNumber: 1,
    releaseDate: '',
    imdbId: '',
  };

  const form = useForm({
    resolver: zodResolver<EpisodeFormValues>(episodeFormSchema),
    defaultValues: {
      id: episode.id,
      series: episode.series,
      title: episode.title,
      description: episode.description,
      seasonNumber: episode.seasonNumber,
      episodeNumber: episode.episodeNumber,
      releaseDate: new Date(episode.releaseDate).toISOString().split('T')[0],
      imdbId: episode.imdbId,
    },
  });

  const onSubmit = async (data: EpisodeFormValues) => {
    try {
      if (isEditing) {
        await updateEpisode({
          ...data,
          id: episodeId,
        });
      } else {
        await createEpisode({ ...data, id: '' });
      }
      return router(-1);
    } catch (error) {
      console.error('Failed to save episode:', error);
    }
  };

  const formHeader = isEditing ? 'Edit episode' : 'Create episode';

  return (
    <section className='space-y-6'>
      <h1 className='text-3xl'>Management page</h1>
      <Form {...form}>
        <form className='space-y-12' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex flex-col justify-between gap-4 max-w-3xl'>
            <h2 className='text-xl'>{formHeader}</h2>

            <FormField
              control={form.control}
              name='series'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Series</FormLabel>
                  <FormControl>
                    <Input placeholder='Series name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Episode title</FormLabel>
                  <FormControl>
                    <Input placeholder='Episode title' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='gap-4 grid grid-cols-2'>
              <FormField
                control={form.control}
                name='seasonNumber'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Season</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        min={1}
                        placeholder='Season number'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='episodeNumber'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Episode</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        min={1}
                        placeholder='Episode number'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='releaseDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Release Date</FormLabel>
                  <FormControl>
                    <Input type='date' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='imdbId'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IMDB ID</FormLabel>
                  <FormControl>
                    <Input placeholder='tt0944947' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={8}
                      placeholder='Episode description'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='flex justify-end space-x-2 w-full'>
            <Button type='button' variant='destructive' className='w-1/4'>
              Cancel
            </Button>
            <Button type='submit' className='w-1/4'>
              Save
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default ManagementPage;
