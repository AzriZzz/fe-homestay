import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Form, FormItem } from "react-native-form-component";

const CreateProperty = () => {
  const [email, setEmail] = useState('Email');

  return (
    <View style={styles.container}>
      <View style={styles.propertyCard}>
        <View style={styles.propertyCardImgTop}>
          <img
            src={`https://lorempixel.com/400/200/city/1`}
            alt=""
            style={{
              height: "180px",
              width: "100%",
              display: "block",
              borderRadius: "10px",
              marginBottom: "20px"
            }}
          />
        </View>
        <Form onButtonPress={() => alert("do something")}>
          <FormItem
            label="Property Name"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="Owner"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="No. of guest"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="Location"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="Price"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="Availability"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="Phone Number"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="Location"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="Kitchen"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="Wifi"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="Parking Lot"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="Swimming Pool"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
          <FormItem
            label="Security"
            isRequired
            value={email}
            onChangeText={(email) => setEmail(email)}
            asterik
            style={styles.forms}
          />
        </Form>
      </View>
    </View>
  );
};

export default CreateProperty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  propertyCard: {
    position: "relative",
    display: "flex",
    width: "auto",
    flexDirection: "column",
    borderRadius: 0.25,
    marginBottom: 16,
  },
  propertyCardImgTop: {
    height: 180,
    width: "auto",
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
  },
  forms: {
    borderColor: '#808080'
  }
});
