import { Text, View, ViewProps } from 'react-native';
import { styles } from './styles';

interface HeadingProps extends ViewProps {
  title: string;
  subtitle: string;
}

export function Heading({ title, subtitle, ...viewProps }: HeadingProps) {
  return (
    <View {...viewProps}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
