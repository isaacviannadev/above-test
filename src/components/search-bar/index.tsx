import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';
import { useDebounce } from 'use-debounce';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';

const searchSchema = z.object({
  searchTerm: z.string().optional(),
});

type SearchFormData = z.infer<typeof searchSchema>;

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('searchTerm') ?? '';

  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchTerm: searchTerm ?? '',
    },
  });

  const currentSearchTerm = form.watch('searchTerm');
  const [debouncedSearchTerm] = useDebounce(currentSearchTerm, 500);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setSearchParams({});
      return;
    }

    const trimmedSearchTerm = debouncedSearchTerm.trim();
    setSearchParams({ searchTerm: trimmedSearchTerm });
  }, [debouncedSearchTerm, setSearchParams]);

  return (
    <Form {...form}>
      <form className='flex items-center w-full'>
        <FormField
          control={form.control}
          name='searchTerm'
          render={({ field }) => (
            <FormItem className='flex items-center w-full'>
              <FormControl>
                <Input
                  className='rounded-full h-12'
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
