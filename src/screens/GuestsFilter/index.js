import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';

const GuestFilterScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View>
      {/* Adults */}
      <View style={styles.row}>
        <View style={styles.left}>
          <View>
            <Text style={styles.category}>Adults</Text>
            <Text style={styles.categoryDescription}>Ages 13 or above</Text>
          </View>
        </View>

        <View style={styles.right}>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(Math.max(0, adults - 1))}>
            <Text style={styles.sign}>-</Text>
          </Pressable>
          {/* value of adults */}
          <Text style={styles.value}>{adults}</Text>

          <Pressable
            style={styles.button}
            onPress={() => setAdults(adults + 1)}>
            <Text style={styles.sign}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Children */}
      <View style={styles.row}>
        <View style={styles.left}>
          <View>
            <Text style={styles.category}>Children</Text>
            <Text style={styles.categoryDescription}>Ages 2 - 12</Text>
          </View>
        </View>

        <View style={styles.right}>
          <Pressable
            style={styles.button}
            onPress={() => setChildren(Math.max(0, children - 1))}>
            <Text style={styles.sign}>-</Text>
          </Pressable>
          {/* value of adults */}
          <Text style={styles.value}>{children}</Text>

          <Pressable
            style={styles.button}
            onPress={() => setChildren(children + 1)}>
            <Text style={styles.sign}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Infants */}
      <View style={styles.row}>
        <View style={styles.left}>
          <View>
            <Text style={styles.category}>Infants</Text>
            <Text style={styles.categoryDescription}>Under 2</Text>
          </View>
        </View>

        <View style={styles.right}>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(Math.max(0, infants - 1))}>
            <Text style={styles.sign}>-</Text>
          </Pressable>
          {/* value of adults */}
          <Text style={styles.value}>{infants}</Text>

          <Pressable
            style={styles.button}
            onPress={() => setInfants(infants + 1)}>
            <Text style={styles.sign}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestFilterScreen;
