import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />

      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type and Description */}

      <Text numberOfLines={2} style={styles.description}>
        {post.type}. {post.title}
      </Text>
      {/* Old Price and New Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text> / night
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
