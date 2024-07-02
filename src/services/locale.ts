'use server';

import { cookies } from 'next/headers';
import type { Locale } from '../config';
import { defaultLocale } from '../config';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale(): Promise<string> {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale): Promise<void> {
  cookies().set(COOKIE_NAME, locale);
}
