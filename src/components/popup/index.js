import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Buttons } from "..";
import { colors } from "../../utils";

const PopUp = ({setModal, onPress, pesan}) => {
  console.log(setModal);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={setModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{pesan}</Text>
            <View style={styles.conBtn}>
            <View style={{ marginRight:5, width:'40%' }}>
              <Buttons judul="Yakin" bgColor={colors.bg.light} textColor={colors.text.default} onPress={onPress}/>
            </View>
            <View style={{ marginLeft:5, width:'40%' }}>
              <Buttons judul="Batal" bgColor={colors.bg.danger} textColor={colors.text.light} onPress={onPress}/>
            </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position:"absolute",
    width:'100%'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  conBtn:{
    flexDirection:'row',
    justifyContent:'center'
  }
});

export default PopUp;