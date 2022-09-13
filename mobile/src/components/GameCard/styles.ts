import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const style = StyleSheet.create({
  container: {
    marginRight: 24,
  },
  cover: {
    width: 240,
    height: 320,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  footer: {
    width: '100%',
    height: 120,
    padding: 16,
    justifyContent: 'flex-end',
  },
  name: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  ads: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
