import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function OptionCard({ option,selectedOption }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftSection}>
        {/* Title */}
        <Text style={styles.title}>{option?.title}</Text>

        {/* Description */}
        <Text style={styles.description}>{option?.desc}</Text>
      </View>

      {/* Row container for icon */}
      <View style={styles.rightSection}>
        {/* Icon */}
        <Text style={styles.icon}>{option?.icon}</Text>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row', // Align title and description with the icon horizontally
    justifyContent: 'space-between', // Space between left and right sections
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, // For Android shadow
 
  },
  leftSection: {
    flex: 1, // Takes the remaining space for the title and description
  },
  rightSection: {
    justifyContent: 'center', // Vertically align the icon
    alignItems: 'flex-end', // Align icon to the right side
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  icon: {
    fontFamily: 'outfit-bold',
    fontSize: 35,
    color: '#808080',
  },
});
