import { signUpHandler } from 'next-auth-sanity';

import sanityClient from '@/libs/sanity';

export const POST = signUpHandler(sanityClient);
