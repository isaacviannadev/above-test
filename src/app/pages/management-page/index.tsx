import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { EPISODES_MOCK } from '@/utils/mocks/episodes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { z } from 'zod';

const editFormSchema = z.object({
  title: z.string().nonempty('Title is required'),
  description: z.string().nonempty('Description is required'),
});

type EditFormValues = z.infer<typeof editFormSchema>;

const ManagementPage = () => {
  const params = useParams();
  const router = useNavigate();

  const isEditing = Boolean(params.id);

  const episodeId = params.id ?? '';

  const episode = EPISODES_MOCK.find((episode) => episode.id === episodeId) ?? {
    title: '',
    description: '',
  };

  const form = useForm({
    resolver: zodResolver<EditFormValues>(editFormSchema),
    defaultValues: {
      title: episode.title,
      description: episode.description,
    },
  });

  const onSubmit = (data: EditFormValues) => {
    console.log(data, 'editFormSchema');
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
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Episode title</FormLabel>
                  <FormControl>
                    <Input placeholder='Episode XPTO' {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Episode description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={8}
                      placeholder='Episode description'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is the description of your episode.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='flex justify-end space-x-2 w-full'>
            <Button
              type='button'
              variant={'destructive'}
              onClick={() => router(-1)}
              className='px-4 py-2 rounded-md w-1/4 text-white'
            >
              Cancel
            </Button>
            <Button
              type='submit'
              className='bg-slate-600 px-4 py-2 rounded-md w-1/4 text-white'
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default ManagementPage;
