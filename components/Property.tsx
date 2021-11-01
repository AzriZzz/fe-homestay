import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}

const Property = () => {
  return (
    <View style={styles.propertyCard}>
      <View style={styles.propertyCardImgTop}>
        <img
          src="https://lorempixel.com/400/200/city/6/"
          alt=""
          style={{
            height: "180px",
            width: "100%",
            display: "block",
            borderRadius: "10px",
          }}
        />
      </View>
      <View style={styles.propertyCardBody}>
        <Text style={styles.propertyCardTitle}>Bukit Bintang - Han Lim</Text>
        <Text>
          Entire apartment is hosted Han Lim with Black Forest that is center in
          the middle of the city.
        </Text>
        <View style={styles.propertyCardPrice}>
          <Text>
            <Bold>RM180</Bold> / night
          </Text>
        </View>
      </View>
    </View>
  );
};

const Bold = (props: IProps) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const styles = StyleSheet.create({
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
  propertyCardBody: {
    marginTop: 5,
    padding: 8,
  },
  propertyCardTitle: {
    lineHeight: 25,
    fontWeight: "bold",
  },
  propertyCardPrice: {
    paddingTop: 6,
    fontWeight: "bold",
  },
  propertyCardPriceText: {},
});

export default Property;
