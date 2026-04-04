export interface Teacher {
  id: number;
  name: string;
  languages: string[];
  status: "Ativo" | "Inativo";
}

export interface Student {
  id: number;
  name: string;
  learning: string;
  status: "Ativo" | "Inativo";
}
