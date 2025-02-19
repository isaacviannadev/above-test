import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';

const searchSchema = z.object({
  searchTerm: z.string().optional(),
});

type SearchFormData = z.infer<typeof searchSchema>;

const SearchBar = () => {
  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchTerm: '',
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (data: SearchFormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex items-center w-full'
      >
        <FormField
          control={form.control}
          name='searchTerm'
          render={({ field }) => (
            <FormItem className='flex items-center w-full'>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Search Episodes...'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchBar;
