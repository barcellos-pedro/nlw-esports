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
import { GameModal } from '../../components/GameModal';

export function GameScreen() {
  const route = useRoute();
  const game = route.params as Game;
  const navigation = useNavigation();
  const [ads, setAds] = useState<Ad[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [userDiscord, setUserDiscord] = useState<string>('');

  const goBack = () => navigation.goBack();

  const onConnect = (adId: string) => {
    return async () => {
      setModalVisible(true);
      await getDiscord(adId);
    };
  };

  const onCloseModal = () => {
    setUserDiscord('');
    setModalVisible(false);
  };

  const fetchAds = async () => {
    try {
      const data = await gamesService.getAds(game.id);
      setAds(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDiscord = async (id: string) => {
    try {
      const { discord } = await gamesService.getDiscordUser(id);
      setUserDiscord(discord);
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

        <FlatList
          data={ads}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          renderItem={({ item: ad }) => (
            <DuoCard key={ad.id} info={ad} onConnect={onConnect(ad.id)} />
          )}
          ListEmptyComponent={<Text style={styles.alert}>Sem an??ncios</Text>}
        />

        <GameModal
          transparent
          animationType="slide"
          title="Let's play!"
          description="Agora ?? s?? come??ar a jogar!"
          buttonDescription="Adicione no Discord"
          visible={modalVisible}
          discordUser={userDiscord}
          onClose={onCloseModal}
        />
      </SafeAreaView>
    </Background>
  );
}
