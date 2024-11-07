import { NextPageWithLayout } from '@/pages/_app';

import { Blank } from '@geek/ui';

const Signup: NextPageWithLayout = () => <div>lol</div>;

Signup.getLayout = (page) => <Blank>{page}</Blank>;

export default Signup;
