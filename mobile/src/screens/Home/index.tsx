import { FlatList, Image } from 'react-native';
import { useEffect, useState } from 'react';

import { styles } from './styles';
import logo from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { Loading } from '../../components/Loading';
import { Game } from '../../@types/game';
import { gamesService } from '../../utils/games-service';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';

export function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    gamesService
      .getGames()
      .then((data) => {
        setGames(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Heading
          style={styles.heading}
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          data={games}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          keyExtractor={(game) => game.id}
          renderItem={({ item: game }) => (
            <GameCard game={game} key={game.id} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
