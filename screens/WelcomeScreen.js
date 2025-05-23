import { StyleSheet, Text, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-context';
import axios from 'axios';

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios.get("https://authentication-app-2a9e9-default-rtdb.firebaseio.com/meassage.json?auth=" + token)
      .then(response => {
        setFetchedMessage(response.data);
      })
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
