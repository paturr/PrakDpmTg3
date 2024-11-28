import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import WeatherCard from './components/WeatherCard'; // Mengimpor komponen WeatherCard

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',  // Nama kota yang akan dicari
      weatherData: null,  // Data cuaca untuk kota yang dimasukkan
      loading: false,  // Status loading
      error: null,  // Pesan error jika ada
    };
  }

  // Data cuaca statis untuk beberapa kota
  weatherDatabase = {
    "London": {
      name: "London",
      country: "GB",
      temperature: 15,
      description: "Clear sky",
      windSpeed: 3.2,
      icon: "01d"
    },
    "New York": {
      name: "New York",
      country: "US",
      temperature: 10,
      description: "Cloudy",
      windSpeed: 5.5,
      icon: "02d"
    },
    "Tokyo": {
      name: "Tokyo",
      country: "JP",
      temperature: 22,
      description: "Rainy",
      windSpeed: 6.0,
      icon: "10d"
    }
  };

  // Fungsi untuk mencari cuaca berdasarkan nama kota
  handleSearch = () => {
    const { city } = this.state;
    if (!city) return;

    const weatherData = this.weatherDatabase[city];
    if (weatherData) {
      this.setState({ weatherData, loading: false, error: null });
    } else {
      this.setState({ error: 'City not found', loading: false });
    }
  };

  render() {
    const { city, weatherData, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Weather App</Text>

        {/* Input untuk memasukkan nama kota */}
        <TextInput
          style={styles.input}
          placeholder="Enter city"
          value={city}
          onChangeText={(text) => this.setState({ city: text })}
        />

        {/* Tombol pencarian cuaca */}
        <Button title="Get Weather" onPress={this.handleSearch} />

        {/* Menampilkan status loading atau error */}
        {loading && <Text>Loading...</Text>}
        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* Menampilkan data cuaca jika ada */}
        {weatherData && (
          <WeatherCard data={weatherData} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default HomeScreen;
