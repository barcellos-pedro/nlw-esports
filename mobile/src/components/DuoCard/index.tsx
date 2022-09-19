import { Text, TouchableOpacity, View, ViewProps } from 'react-native';
import { DuoInfo } from '../DuoInfo';
import { styles } from './styles';

interface DuoCardProps extends ViewProps {}

export function DuoCard({ ...viewProps }: DuoCardProps) {
  return (
    <View style={styles.container} {...viewProps}>
      <DuoInfo style={styles.info} label="Nome" value="Diego Fernandes" />
      <DuoInfo style={styles.info} label="Tempo de jogo" value="2 anos" />
      <DuoInfo style={styles.info} label="Disponibilidade" value="3 dias - 18h - 20h" />
      <DuoInfo style={styles.info} label="Chamada de áudio?" value="Sim" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
