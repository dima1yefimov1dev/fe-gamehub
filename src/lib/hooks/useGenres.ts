import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../../services/api-client';
import { Genre } from '../types';
import genres from '../../data/genres';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
