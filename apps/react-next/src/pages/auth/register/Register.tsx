import { useRouter } from 'next/navigation';

import { NextPageWithLayout } from '@/pages/_app';

import Blank from '@geek/ui/layout/Blank';
import Persist from '@geek/ui/layout/Auth/Persist';


const Register: NextPageWithLayout = () => {
    const router = useRouter();
    return (
        <Persist
            type="signUp"
            logo="/logo/logo.svg"
            onSubmit={(submit) => console.log('submit => ', submit)}
            signInLink={{
                title: 'ja possui uma conta ?',
                label: 'Entre aqui',
                clickAction: () => router.push('/auth/login')
            }}
        />
    );
};

Register.getLayout = (page) => <Blank>{page}</Blank>;

export default Register;
