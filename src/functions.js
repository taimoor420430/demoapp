// importing local storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useCallback } from 'react';
// import SimpleAlert from './SimpleAlert';

// local storage function that retreives the data
async function retrieveItem(key) {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return
}


// store data in lcoalstorage
async function storeItem(key, item) {
  try {
    var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
    return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
}


//validing email
function validateEmail(text) {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {

    return false;
  }
  else {
    return true;
  }
}


// simple console log, so I can turn it off later
function doConsole(d) {
  console.log(d)
}

export const useForceUpdate = () => {
  const [, updateState] = useState();
  return useCallback(() => updateState({}), []);
}




// common Navigations

module.exports.storeItem = storeItem;
module.exports.retrieveItem = retrieveItem;
module.exports.doConsole = doConsole;
module.exports.validateEmail = validateEmail;
