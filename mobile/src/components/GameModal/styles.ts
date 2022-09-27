import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const style = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  contentContainer: {
    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    paddingVertical: 32,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  modalBody: {
    alignItems: 'center',
  },
  modalContent: {
    alignItems: 'center',
    marginTop: 24,
  },
  modalFooter: {
    marginTop: 24,
    alignItems: 'center',
  },
  buttonDescription: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
  },
  button: {
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 11,
    width: 231,
    marginTop: 8,
  },
  loading: {
    paddingVertical: 2.5,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 32,
  },
  buttonText: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
  },
});
