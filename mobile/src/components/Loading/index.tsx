import { ActivityIndicator, View, ViewProps } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

interface LoadingProps extends ViewProps {}

export function Loading({ ...viewProps }: LoadingProps) {
  return (
    <View style={styles.container} {...viewProps}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  );
}
