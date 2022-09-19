import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, // fills whole screen and flex column by default
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
  },
  logo: {
    width: 71,
    height: 40,
  },
  right: {
    width: 20,
    height: 20,
  },
  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 24,
  },
});
