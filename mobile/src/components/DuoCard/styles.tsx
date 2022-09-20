import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 180,
    backgroundColor: THEME.COLORS.SHAPE,
    padding: 20,
    borderRadius: 8,
    marginRight: 16
  },
  info: {
    marginVertical: 16,
  },
  button: {
    paddingHorizontal: 26,
    paddingVertical: 8,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonText: {
    color: THEME.COLORS.TEXT,
  },
});
