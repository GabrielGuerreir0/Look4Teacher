export interface BaseUser {
  id: string;
  name: string;
  age: number;
  email: string;
  role: "student" | "teacher" | "administrator";
}

export interface Aluno extends BaseUser {
  role: "student";
}

export interface Professor extends BaseUser {
  pricePerHour: number;
  bio: string;
  stats: "pending" | "approved" | "rejected";
  language: string;
  role: "teacher";
}

export interface Administrador extends BaseUser {
  role: "administrator";
}

export type User = Aluno | Professor | Administrador;
