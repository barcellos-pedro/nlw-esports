import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    maxWidth: '100%',
    marginTop: 74,
    marginBottom: 48,
  },
  heading: {
    alignSelf: 'flex-start',
    paddingLeft: 32,
    marginBottom: 20,
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
  },
  alert: {
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
