import { View, Text, ViewProps, ColorValue } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

interface DuoInfoProps extends ViewProps {
  label: string;
  value: string;
  valueColor?: ColorValue;
}

export function DuoInfo({
  label,
  value,
  valueColor = THEME.COLORS.TEXT,
  ...viewProps
}: DuoInfoProps) {
  return (
    <View style={styles.container} {...viewProps}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
    </View>
  );
}
