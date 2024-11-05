import { NextPageWithLayout } from '@/pages/_app';

import { Blank } from '@geek/ui';

import { Auth } from '@/layout';

const Login: NextPageWithLayout = () => <Auth/>;

Login.getLayout = (page) => <Blank>{page}</Blank>;

export default Login;
