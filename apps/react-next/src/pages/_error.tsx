import React from 'react';

import { NextPageWithLayout } from '@/pages/_app';

import Blank from '@geek/ui/layout/Blank';

const Error: NextPageWithLayout = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
        </div>
    );
};

Error.getLayout = (page) => <Blank>{page}</Blank>;

export default Error;