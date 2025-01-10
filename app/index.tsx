import { View} from 'react-native';
import  Login   from '../components/Login.jsx'
import { Redirect } from 'expo-router';
import {auth} from './../configs/FirebaseConfig.js';


export default function HomeScreen() {

  const user = auth.currentUser;
  return (
   <View 
   style={{
    flex:1,
    
   }}
   >
{user?
<Redirect href={'/(tabs)/mytrip'} />: <Login />
}

  
   </View>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
