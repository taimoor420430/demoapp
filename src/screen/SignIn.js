import { View, Text, TouchableOpacity, TextInput,Alert } from 'react-native'
import React,{useState} from 'react'
import { BackArrow, EyeIcon, FbSignUp, GSignUp } from '../components/Svgs'



const SignIn = (props) => {

    const [showData, setShowData]= useState(true);
    const [email , setEmail] = useState('test@test.com');
    const [pass , setpass] = useState('12345678');

    function login(){
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            Alert.alert('Please enter a valid email')
            return;
        }
       
        if(pass.length<8){
            Alert.alert('please enter 8 Caracter');
            return;
        }
        props.navigation.navigate('BottomTabs');

    }
    return(
        <View style={{flex:1 }}>
            <View style={{ flexDirection: 'row',marginTop:35, justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity
                onPress={()=>{
                    props.navigation.goBack()
                }}
                style={{ marginLeft: 10  }}>
                    <BackArrow />
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center',marginVertical:40,width:'90%',alignItems:'center'}}>
                <Text style={{fontSize:40,fontWeight:'bold'}}>Login</Text>
            </View>
        <Text style={{width: '90%', marginLeft: 15, fontSize: 18 }}>Enter Email and Password to Login</Text>
             <TextInput
                 onChangeText={setEmail}
                 autoCapitalize='none'
                 placeholder='Email Address'
                 style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', width: '90%', marginLeft: 15,marginTop:10, padding: 10, }}
            />
            <TextInput
                 onChangeText={setpass}
                 autoCapitalize='none'
                 secureTextEntry={showData}
                 placeholder='Password'
                 style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', width: '90%', marginLeft: 15, padding: 10,marginTop:20, }}
            />
             <TouchableOpacity
            onPress={()=>setShowData(!showData)}
            style={{position:'absolute',right:35,top:310}}>
                <EyeIcon/>
            </TouchableOpacity>
            <View style={{flexDirection:'row',width:'90%',justifyContent:'flex-end',marginTop:2}}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity 
            onPress={()=>{
                props.navigation.navigate('SignUp')
            }}
            >
                <Text style={{color:'blue'}}>Signup</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
            onPress={()=>{
                login();
            }}
             style={{ backgroundColor: '#32bbe8', marginTop:20, width: '80%', alignSelf: 'center', borderRadius: 20 }}>
                <Text style={{ padding: 15, alignSelf: 'center', fontSize: 18,color:'white',fontWeight:'bold' }}>Continue</Text>
            </TouchableOpacity>
            </View>
    )}
    export default SignIn