
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TeamMembers() {
  const teamMembers = [
    { name: 'Yiting Wang' },
    { name: 'Taikai Vu' },
    { name: 'Koichi Kumo' },
    
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team Members</Text>
      <View style={styles.membersContainer}>
        {teamMembers.map((member, index) => (
          <Text key={index} style={styles.memberName}>
            {member.name}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  membersContainer: {
    alignItems: 'center',
  },
  memberName: {
    fontSize: 18,
    marginBottom: 10,
  },
});
