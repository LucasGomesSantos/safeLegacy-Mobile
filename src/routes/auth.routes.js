// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BancosInvestimentos from '../views/bens/bancos-investimentos';
import BensMateriais from '../views/bens/bens-materias';
import ListImoveis from '../views/bens/imoveis';
import { AdicionarImovel } from '../views/bens/imoveis/adicionar-imovel';
import MeusBens from '../views/bens/index'
import Pets from '../views/bens/pets';
import RedesSociais from '../views/bens/redes-sociais';
import Veiculos from '../views/bens/veiculos';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../views/home';
import Test from '../views/home/test';
import { Text } from 'react-native';

const { Navigator, Screen} = createBottomTabNavigator();

export default function AuthRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'white',
            tabBarStyle: {
                backgroundColor: '#064580',
                
            }
        }}>
            <Screen
                name="Home"
                component={Home}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ( { color }) => {
                        return <Icon name={'ios-home-outline'} size={20} color={color} />
                    },
                }}
            />
            <Screen
                name="Profile"
                component={() => <Text style={{marginTop: 100}}>Profile</Text>}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ( { color }) => {
                        return <Icon name={'ios-person-outline'} size={20} color={color} />
                    },
                }}
            />
            <Screen
                name="Shared"
                component={() => <Text style={{marginTop: 100}}>Shared</Text>}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ( { color }) => {
                        return <Icon name={'ios-settings-outline'} size={20} color={color} />
                    },
                }}
            />
            <Screen
                name="TestScreen"
                component={Test}
                 options={{ 
                    headerShown: false, 
                    tabBarButton: () => null 
                }}
            />
            <Screen
                name="MeusBens"
                component={MeusBens}
                 options={{ 
                    headerShown: false, 
                    tabBarButton: () => null 
                }}
            />
            <Screen
                name="listImoveis"
                component={ListImoveis}
                options={{ 
                    headerShown: false, 
                    tabBarButton: () => null 
                }}
            />
              <Screen
                name="Imoveis/Adicionar"
                component={AdicionarImovel}
                options={{ 
                    headerShown: false, 
                    tabBarButton: () => null,
                    unmountOnBlur: true
                }}
            />
            <Screen
                name="listVeiculos"
                component={Veiculos}
                options={{ 
                    headerShown: false, 
                    tabBarButton: () => null,
                }}
            />
            <Screen
                name="listBancosInvestimentos"
                component={BancosInvestimentos}
                options={{ 
                    headerShown: false, 
                    tabBarButton: () => null 
                }}
            />
            <Screen
                name="listBensMateriais"
                component={BensMateriais}
                options={{ 
                    headerShown: false, 
                    tabBarButton: () => null 
                }}
            />
            <Screen
                name="listPets"
                component={Pets}
                options={{ 
                    headerShown: false, 
                    tabBarButton: () => null 
                }}
            />
            <Screen
                name="listRedesSociais"
                component={RedesSociais}
                options={{ 
                    headerShown: false, 
                    tabBarButton: () => null 
                }}
            />

        </Navigator>
    )
}

