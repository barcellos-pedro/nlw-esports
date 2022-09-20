import { Text, TouchableOpacity, View, ViewProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { DuoInfo } from '../DuoInfo';
import { styles } from './styles';
import { THEME } from '../../theme';
import { Ad } from '../../@types/ad';

interface DuoCardProps extends ViewProps {
  info: Ad;
  onConnect: () => void;
}

export function DuoCard({ info, onConnect, ...viewProps }: DuoCardProps) {
  const getHour = (hour: 'hourStart' | 'hourEnd') => info[hour].split(':')[0];
  const getWeekDays = () => {
    const daysCount = info.weekDays.length;
    const start = getHour('hourStart');
    const end = getHour('hourEnd');
    return `${daysCount} dia(s) \u2022 ${start}h - ${end}h`;
  };

  const useVoiceChannel = () => info.useVoiceChannel;

  const voiceChannelTextColor = () => {
    const { ALERT, SUCCESS } = THEME.COLORS;
    return useVoiceChannel() ? SUCCESS : ALERT;
  };

  return (
    <View style={styles.container} {...viewProps}>
      <DuoInfo label="Nome" style={styles.info} value={info.name} />
      <DuoInfo
        label="Tempo de jogo"
        style={styles.info}
        value={`${String(info.yearsPlaying)} ano(s)`}
      />
      <DuoInfo
        label="Disponibilidade"
        style={styles.info}
        value={getWeekDays()}
      />
      <DuoInfo
        label="Chamada de áudio?"
        style={styles.info}
        value={useVoiceChannel() ? 'Sim' : 'Não'}
        valueColor={voiceChannelTextColor()}
      />
      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <Entypo name="game-controller" color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
