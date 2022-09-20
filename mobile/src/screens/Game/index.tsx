import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '../../components/Background';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import logo from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { Game } from '../../@types/game';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';
import { useEffect, useState } from 'react';
import { Ad } from '../../@types/ad';
import { gamesService } from '../../utils/games-service';

export function GameScreen() {
  const route = useRoute();
  const game = route.params as Game;
  const navigation = useNavigation();
  const [ads, setAds] = useState<Ad[]>([]);

  const goBack = () => navigation.goBack();

  const fetchAds = async () => {
    try {
      const data = await gamesService.getAds(game.id);
      setAds(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="chevron-left"
              color={THEME.COLORS.CAPTION_300}
              size={32}
              onPress={goBack}
            />
          </TouchableOpacity>
          <Image source={logo} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading
          subtitle="Conecte-se e comece a jogar!"
          title={game.title}
          style={styles.heading}
        />

        {!ads.length ? (
          <Text style={styles.alert}>Sem anúncios</Text>
        ) : (
          <FlatList
            data={ads}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
            renderItem={({ item: ad }) => <DuoCard info={ad} key={ad.id} />}
          />
        )}
      </SafeAreaView>
    </Background>
  );
}
