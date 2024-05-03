import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'
import { db } from '$lib/database'

export const load = (async () => {
    return {
        data:'Some text from the server'
    };
}) satisfies PageServerLoad;



const register: Action = async ({ request }) => {
  const data = await request.formData()
  const password = data.get('password')
const email = data.get('email') // Assuming 'email' is a field in your form data

if (
  typeof password !== 'string' ||
  !password ||
  typeof email !== 'string' || // Ensure email is a string and not null
  !email // Ensure email is not an empty string
) {
  return fail(400, { invalid: true })
}

const user = await db.user.findUnique({
  where: { email }, // Now 'email' is defined and can be used
})

  if(password === '1234'){
  const updatedUser = await db.user.update({
    where: { email},
    data: {
      isAdmin: true, // Or any other field you want to change
    },
  });

  console.log('User updated:', updatedUser);
  }

}

export const actions: Actions = { register }