import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, TouchableOpacity, View } from 'react-native';
import { Background } from '../../components/Background';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import logo from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { Game } from '../../@types/game';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';

export function GameScreen() {
  const route = useRoute();
  const game = route.params as Game;
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

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
        <Heading subtitle="Conect-se e comece a jogar!" title={game.title} />
      </SafeAreaView>
    </Background>
  );
}