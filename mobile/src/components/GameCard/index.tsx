import { LinearGradient } from 'expo-linear-gradient';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Game } from '../../@types/game';
import { THEME } from '../../theme';
import { style } from './styles';

interface GameCardProps extends TouchableOpacityProps {
  game: Game;
}

export function GameCard({ game, ...buttonProps }: GameCardProps) {
  return (
    <TouchableOpacity style={style.container} {...buttonProps}>
      <ImageBackground style={style.cover} source={{ uri: game.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={style.footer}>
          <Text style={style.name}>{game.title}</Text>
          <Text style={style.ads}>{game._count.ads} anúncio(s)</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
