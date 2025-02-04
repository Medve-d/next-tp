// app/(dashboard)/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-semibold">MusiLearn Dashboard</h2>
        <ul>
          <li>
            <Link href="/dashboard/teacher/courses">Cours</Link>
          </li>
          <li>
            <Link href="/dashboard/teacher/students">Étudiants</Link>
          </li>
          <li>
            <Link href="/dashboard/teacher/evaluations">Évaluations</Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
