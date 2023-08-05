import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'maroon',
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
    marginTop: 5,
    marginBottom: 1,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  weatherContainer: {
    flex: 1,
    marginTop: 20,
  },
  subTitle: {
    alignItems: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: 'maroon',
  },
  weatherItem: {
    paddingVertical: 2,
    fontSize: 16,
  },
  weatherInfo: {
    marginTop: 20,
  },
});
