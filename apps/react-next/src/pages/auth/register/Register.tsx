import { NextPageWithLayout } from '@/pages/_app';

import Blank from '@geek/ui/layout/Blank';
import SignUp from '@geek/ui/layout/Auth/SignUp';

const Register: NextPageWithLayout = () => <SignUp
    logo="/logo/logo.svg"
    internalSignUp={true}
    signInLink="/auth/login"
    onSubmit={(submit) => console.log('submit => ', submit)}
/>;

Register.getLayout = (page) => <Blank>{page}</Blank>;

export default Register;
