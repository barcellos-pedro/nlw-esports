import { LinearGradient } from 'expo-linear-gradient';
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { THEME } from '../../theme';
import { style } from './styles';

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Data extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Data) {
  return (
    <TouchableOpacity style={style.container} {...rest}>
      <ImageBackground style={style.cover} source={data.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={style.footer}>
          <Text style={style.name}>{data.name}</Text>
          <Text style={style.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
