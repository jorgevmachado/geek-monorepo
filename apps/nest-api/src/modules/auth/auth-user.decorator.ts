import { createParamDecorator } from '@nestjs/common';

import { Users } from './users/users.entity';

export const GetUserAuth = createParamDecorator(
  (_, req): Users => req.args[0].user,
);
