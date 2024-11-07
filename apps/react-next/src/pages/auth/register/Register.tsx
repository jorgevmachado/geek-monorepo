import { NextPageWithLayout } from '@/pages/_app';

import Blank from '@geek/ui/layout/Blank';
import SignUp from '@geek/ui/layout/Auth/SignUp';

import { LOGO } from '@/layout/config';

const Register: NextPageWithLayout = () => <SignUp
    logo={LOGO}
    internalSignUp={true}
    signInLink="/auth/login"
    onSubmit={(submit) => console.log('submit => ', submit)}
/>;

Register.getLayout = (page) => <Blank>{page}</Blank>;

export default Register;
