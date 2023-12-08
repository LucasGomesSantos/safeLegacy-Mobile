import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BancosInvestimentos from '../views/bens/bancos-investimentos';
import BensMateriais from '../views/bens/bens-materias';
import AdicionarImovel from '../views/bens/imoveis';
import MeusBens from '../views/bens/index'
import Pets from '../views/bens/pets';
import RedesSociais from '../views/bens/redes-sociais';
import Veiculos from '../views/bens/veiculos';

import Home from '../views/home';
import Test from '../views/home/test';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TestScreen"
                component={Test}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MeusBens"
                component={MeusBens}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="listImoveis"
                component={AdicionarImovel}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="listVeiculos"
                component={Veiculos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="listBancosInvestimentos"
                component={BancosInvestimentos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="listBensMateriais"
                component={BensMateriais}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="listPets"
                component={Pets}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="listRedesSociais"
                component={RedesSociais}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

