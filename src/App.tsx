/// PROJECT-2 CARDS

// import { View, Text, SafeAreaView, ScrollView } from 'react-native'
// import React from 'react'
// import FlatCards from './components/FlatCards'
// import ElevatedCards from './components/ElevatedCards'
// import FancyCards from './components/FancyCards'
// import ActionCards from './components/ActionCards'
// import ContactList from './components/ContactList'

// const App = () => {
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <FlatCards />
//         <ElevatedCards />
//         <FancyCards />
//         <ContactList />
//         <ActionCards />
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default App



//// PROJECT -3 PASSWORD GENERATOR 






// App.js

// import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
// import React, { useState } from 'react';
// import BouncyCheckbox from "react-native-bouncy-checkbox";

// // Formik and Yup for form management and validation
// import { Formik } from 'formik';
// import * as Yup from 'yup';


// // Validation Schema using Yup
// const PasswordSchema = Yup.object().shape({
//   passwordLength: Yup.number()
//     .typeError('Password length must be a number')
//     .min(4, 'Should be a minimum of 4 characters')
//     .max(16, 'Should be a maximum of 16 characters')
//     .required('Length is required'),
// });

// export default function App() {
//   const [password, setPassword] = useState('');

//   // Function to generate password string based on selected options
//   const generatePasswordString = (values: any) => {
//     const { passwordLength, lowerCase, upperCase, numbers, symbols } = values;
//     let characterList = '';

//     const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
//     const digitsChars = '0123456789';
//     const specialChars = '!@#$%^&*()+';

//     if (lowerCase) {
//       characterList += lowerCaseChars;
//     }

//     if (upperCase) {
//       characterList += upperCaseChars;
//     }

//     if (numbers) {
//       characterList += digitsChars;
//     }

//     if (symbols) {
//       characterList += specialChars;
//     }

//     // Fallback if no character types are selected
//     if (characterList === '') {
//       characterList = lowerCaseChars;
//     }

//     const passwordResult = createPassword(characterList, passwordLength);
//     setPassword(passwordResult);
//   };

//   // Corrected createPassword function using Math.floor to prevent out-of-bounds indices
//   const createPassword = (characters: string, passwordLength: number) => {
//     let result = '';
//     for (let i = 0; i < passwordLength; i++) {
//       const characterIndex = Math.floor(Math.random() * characters.length);
//       result += characters.charAt(characterIndex);
//     }
//     return result;
//   };

//   // Function to reset all states
//   const resetPasswordState = () => {
//     setPassword('');
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.appContainer}>
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Password Generator</Text>

//           <Formik
//             initialValues={{
//               passwordLength: '',
//               lowerCase: false,
//               upperCase: false,
//               numbers: false,
//               symbols: false,
//             }}
//             validationSchema={PasswordSchema}
//             onSubmit={(values, actions) => {
//               generatePasswordString(values);
//               actions.resetForm();
//             }}
//           >
//             {({
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               values,
//               errors,
//               touched,
//               setFieldValue,
//               isValid,
//               handleReset,
//             }) => (
//               <>
//                 {/* Input for Password Length */}
//                 <View style={styles.inputWrapper}>
//                   <View style={styles.inputColumn}>
//                     <Text style={styles.heading}>Password Length</Text>
//                     {touched.passwordLength && errors.passwordLength && (
//                       <Text style={styles.errorText}>
//                         {errors.passwordLength}
//                       </Text>
//                     )}
//                   </View>
//                   <TextInput
//                     style={styles.inputStyle}
//                     value={values.passwordLength}
//                     onChangeText={handleChange('passwordLength')}
//                     onBlur={handleBlur('passwordLength')}
//                     placeholder='Ex. 8'
//                     keyboardType='numeric'
//                     maxLength={2} // To prevent entering numbers beyond 99
//                   />
//                 </View>

//                 {/* Switch for Lowercase Letters */}
//                 <View style={styles.switchWrapper}>
//                   <Text style={styles.switchLabel}>Include Lowercase Letters</Text>
//                   <BouncyCheckbox
//                     isChecked={values.lowerCase}
//                     onPress={() => setFieldValue('lowerCase', !values.lowerCase)}
//                     fillColor='#29AB87'
//                   />
//                 </View>

//                 {/* Switch for Uppercase Letters */}
//                 <View style={styles.switchWrapper}>
//                   <Text style={styles.switchLabel}>Include Uppercase Letters</Text>
//                   <BouncyCheckbox
//                     isChecked={values.upperCase}
//                     onPress={() => setFieldValue('upperCase', !values.upperCase)}
//                     fillColor='#29AB87'
//                   />
//                 </View>

//                 {/* Switch for Numbers */}
//                 <View style={styles.switchWrapper}>
//                   <Text style={styles.switchLabel}>Include Numbers</Text>
//                   <BouncyCheckbox
//                     isChecked={values.numbers}
//                     onPress={() => setFieldValue('numbers', !values.numbers)}
//                     fillColor='#29AB87'
//                   />
//                 </View>

//                 {/* Switch for Symbols */}
//                 <View style={styles.switchWrapper}>
//                   <Text style={styles.switchLabel}>Include Symbols</Text>
//                   <BouncyCheckbox
//                     isChecked={values.symbols}
//                     onPress={() => setFieldValue('symbols', !values.symbols)}
//                     fillColor='#29AB87'
//                   />
//                 </View>

//                 {/* Generate Password Button */}
//                 <View style={styles.formAction}>
//                   <TouchableOpacity
//                     disabled={!isValid}
//                     style={[styles.primaryBtn, !isValid && styles.disabledBtn]}
//                     onPress={handleSubmit}
//                   >
//                     <Text style={styles.primaryBtnText}>Generate Password</Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity
//                     style={styles.secondaryBtn}
//                     onPress={() => {
//                       handleReset();
//                       resetPasswordState();
//                     }}
//                   >
//                     <Text style={styles.secondaryBtnText}>Reset</Text>
//                   </TouchableOpacity>
//                 </View>
//               </>
//             )}
//           </Formik>

//           {/* Display Generated Password */}
//           {password !== '' && (
//             <View style={styles.passwordContainer}>
//               <Text style={styles.passwordLabel}>Generated Password:</Text>
//               <Text style={styles.passwordText}>{password}</Text>
//               <TouchableOpacity
//                 style={styles.copyBtn}
//                 onPress={() => {
//                   Alert.alert('Copied!', 'Password has been copied to clipboard.');
//                 }}
//               >
//                 <Text style={styles.copyBtnText}>Copy to Clipboard</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f5f5f5', // Light gray background
//   },
//   appContainer: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   formContainer: {
//     width: '100%',
//     backgroundColor: '#ffffff', // White background for the form
//     padding: 20,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#333333',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   inputWrapper: {
//     marginBottom: 20,
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//   },
//   inputColumn: {
//     flex: 1,
//     marginRight: 10,
//   },
//   inputStyle: {
//     flex: 1,
//     height: 50,
//     borderColor: '#cccccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     fontSize: 16,
//     backgroundColor: '#ffffff',
//   },
//   heading: {
//     fontSize: 16,
//     color: '#555555',
//     marginBottom: 5,
//   },
//   errorText: {
//     color: '#f44336', // Red color for errors
//     fontSize: 14,
//     marginTop: 5,
//   },
//   switchWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   switchLabel: {
//     fontSize: 16,
//     color: '#555555',
//   },
//   formAction: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   primaryBtn: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     flex: 1,
//     marginRight: 10,
//   },
//   disabledBtn: {
//     backgroundColor: '#a5d6a7', // Lighter green when disabled
//   },
//   primaryBtnText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   secondaryBtn: {
//     backgroundColor: '#f44336',
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     flex: 1,
//     marginLeft: 10,
//   },
//   secondaryBtnText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   passwordContainer: {
//     marginTop: 30,
//     padding: 20,
//     backgroundColor: '#e8f5e9', // Light green background
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   passwordLabel: {
//     fontSize: 18,
//     color: '#2e7d32', // Dark green for labels
//     marginBottom: 10,
//   },
//   passwordText: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#1b5e20', // Darker green for password text
//     marginBottom: 15,
//   },
//   copyBtn: {
//     backgroundColor: '#2196F3',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   copyBtnText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });





// PROJECT-5 ROLL THE DICE
import { ImageSourcePropType, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'


import DiceOne from '../Assests/MathClipArt--Single-Die-with-1-Showing.png'
import DiceTwo from '../Assests/Dice-2-b.svg.png'
import DiceThree from '../Assests/dice_3-512.webp'
import DiceFour from '../Assests/Dice-4-b.svg.png'
import DiceFive from '../Assests/Dice-5-b.svg'
import DiceSix from '../Assests/dice-6-md.png'


type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
    return (
        <View>
            <Image style={styles.diceImage} source={imageUrl} />
        </View>
    )

}
export default function App() {
    const [DiceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

    const rollDiceTap = () => {
        let randomnum = Math.floor(Math.random() * 6) + 1

        switch (randomnum) {
            case 1:
                setDiceImage(DiceOne)
                break
            case 2:
                setDiceImage(DiceTwo)
                break
            case 3:
                setDiceImage(DiceThree)
                break
            case 4:
                setDiceImage(DiceFour)
                break
            case 5:
                setDiceImage(DiceFive)
                break
            case 6:
                setDiceImage(DiceSix)
                break
            default:
                setDiceImage(DiceOne)
                break
        }
    }
    return (
        <View style={styles.conatiner}>
            <Dice imageUrl={DiceImage} />
            < Pressable
                style={styles.rollingDiceText}
                onPress={rollDiceTap}>
                <Text>Roll the Dice</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF2F2'
    },
    diceContainer: {
        margin: 12
    },
    diceImage: {
        width: 100,
        height: 100
    },
    rollingDiceText: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderRadius: 0,
    }
})