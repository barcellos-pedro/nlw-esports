import { View, Text, ViewProps } from 'react-native';
import { styles } from './styles';

interface DuoInfoProps extends ViewProps {
  label: string;
  value: string;
}

export function DuoInfo({ label, value, ...viewProps }: DuoInfoProps) {
  return (
    <View style={styles.container} {...viewProps}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
