import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Komponen untuk menampilkan informasi cuaca
const WeatherCard = ({ data }) => {
  const { name, country, temperature, description, windSpeed, icon } = data;

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{name}, {country}</Text>
      <Text style={styles.temperature}>{Math.round(temperature)}°C</Text>
      <Text style={styles.description}>{description}</Text>
      <Image
        style={styles.icon}
        source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }} // Gambar cuaca dari icon OpenWeatherMap
      />
      <Text style={styles.wind}>Wind: {windSpeed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  city: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff8c00',
  },
  description: {
    fontSize: 18,
    color: '#555',
  },
  icon: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  wind: {
    fontSize: 16,
    color: '#555',
  },
});

export default WeatherCard;
