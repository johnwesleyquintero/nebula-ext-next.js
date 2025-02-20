import { signIn, signOut, useSession } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center space-x-4">
        <span>Signed in as {session.user?.email}</span>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn('google')}
      className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      Sign in with Google
    </button>
  );
}