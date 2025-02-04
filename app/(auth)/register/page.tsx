// app/(auth)/register/page.tsx
export default function Register() {
    return (
      <div className="flex justify-center items-center h-screen">
        <form className="space-y-4 p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-xl font-semibold">S'inscrire</h1>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-2 border rounded"
          />
          <button className="w-full bg-green-500 text-white p-2 rounded">
            S'inscrire
          </button>
        </form>
      </div>
    );
  }
  