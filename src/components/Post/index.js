import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* Type and Description */}

      <Text numberOfLines={2} style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus.
      </Text>
      {/* Old Price and New Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}> $30</Text> / night
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
