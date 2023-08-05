import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cityText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'maroon',
    paddingBottom: 6,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    width: '100%',
    marginVertical: 5,
  },
  button: {
    marginTop: 5,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
});
