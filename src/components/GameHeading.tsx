import { Heading } from '@chakra-ui/react';
import useGameQueryStore from '../store';
import usePlatform from '../lib/hooks/usePlatform';
import useGenre from '../lib/hooks/useGenre';

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ''} ${
    genre?.name || ''
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
