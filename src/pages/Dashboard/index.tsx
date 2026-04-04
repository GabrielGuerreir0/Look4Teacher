// src/pages/Dashboard.tsx
import { useState, useMemo } from "react";
import { Users, GraduationCap, BookOpen, TrendingUp } from "lucide-react";
import styles from "./Dashboard.module.css";
import type { Student, Teacher } from "../../types/users";

const mockTeachers: Teacher[] = [
  {
    id: 1,
    name: "João Mendes",
    languages: ["Inglês", "Espanhol"],
    status: "Ativo",
  },
  {
    id: 2,
    name: "Ana Costa",
    languages: ["Francês", "Inglês"],
    status: "Ativo",
  },
  { id: 3, name: "Carlos Ruiz", languages: ["Espanhol"], status: "Ativo" },
  {
    id: 4,
    name: "Mariana Silva",
    languages: ["Alemão", "Inglês"],
    status: "Inativo",
  },
  { id: 5, name: "Lucas Ferreira", languages: ["Francês"], status: "Ativo" },
  {
    id: 6,
    name: "Beatriz Lima",
    languages: ["Inglês", "Espanhol", "Francês"],
    status: "Ativo",
  },
];

const mockStudents: Student[] = [
  { id: 1, name: "Pedro Henrique", learning: "Inglês", status: "Ativo" },
  { id: 2, name: "Laura Mendes", learning: "Espanhol", status: "Ativo" },
  { id: 3, name: "Sofia Costa", learning: "Francês", status: "Ativo" },
  { id: 4, name: "Mateus Oliveira", learning: "Inglês", status: "Ativo" },
  { id: 5, name: "Isabela Santos", learning: "Alemão", status: "Inativo" },
  { id: 6, name: "Rafael Almeida", learning: "Espanhol", status: "Ativo" },
  { id: 7, name: "Julia Pereira", learning: "Inglês", status: "Ativo" },
];

const languages = [
  "Todos os idiomas",
  "Inglês",
  "Espanhol",
  "Francês",
  "Alemão",
];

export function Dashboard() {
  const [selectedTeacherLang, setSelectedTeacherLang] =
    useState("Todos os idiomas");
  const [selectedStudentLang, setSelectedStudentLang] =
    useState("Todos os idiomas");

  const filteredTeachers = useMemo(() => {
    if (selectedTeacherLang === "Todos os idiomas") return mockTeachers;
    return mockTeachers.filter((t) =>
      t.languages.includes(selectedTeacherLang),
    );
  }, [selectedTeacherLang]);

  const filteredStudents = useMemo(() => {
    if (selectedStudentLang === "Todos os idiomas") return mockStudents;
    return mockStudents.filter((s) => s.learning === selectedStudentLang);
  }, [selectedStudentLang]);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard Escolar</h1>
          <p className={styles.subtitle}>
            Gestão de Alunos e Professores • L4T Idiomas
          </p>
        </div>
        <div className={styles.date}>Sábado, 04 de abril de 2026</div>
      </div>

      {/* Estatísticas */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Users size={36} />
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Total de Alunos</p>
            <p className={styles.statNumber}>1.248</p>
            <p className={styles.statChange}>+42 este mês</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <GraduationCap size={36} />
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Total de Professores</p>
            <p className={styles.statNumber}>87</p>
            <p className={styles.statChange}>+3 este mês</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <BookOpen size={36} />
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Turmas Ativas</p>
            <p className={styles.statNumber}>42</p>
            <p className={styles.statChange}>94% de ocupação</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <TrendingUp size={36} />
          </div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>Taxa de Retenção</p>
            <p className={styles.statNumber}>94%</p>
            <p className={styles.statChange}>+2% vs mês anterior</p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className={styles.contentGrid}>
        {/* Professores */}
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <h2>Professores por Idioma</h2>
            <select
              value={selectedTeacherLang}
              onChange={(e) => setSelectedTeacherLang(e.target.value)}
              className={styles.select}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.list}>
            {filteredTeachers.map((teacher) => (
              <div key={teacher.id} className={styles.listItem}>
                <div className={styles.avatar}>{teacher.name.charAt(0)}</div>
                <div className={styles.info}>
                  <div className={styles.name}>{teacher.name}</div>
                  <div className={styles.languages}>
                    {teacher.languages.map((lang) => (
                      <span key={lang} className={styles.langTag}>
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  className={`${styles.status} ${teacher.status === "Ativo" ? styles.active : styles.inactive}`}
                >
                  {teacher.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Alunos */}
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <h2>Alunos por Idioma</h2>
            <select
              value={selectedStudentLang}
              onChange={(e) => setSelectedStudentLang(e.target.value)}
              className={styles.select}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.list}>
            {filteredStudents.map((student) => (
              <div key={student.id} className={styles.listItem}>
                <div className={styles.avatar}>{student.name.charAt(0)}</div>
                <div className={styles.info}>
                  <div className={styles.name}>{student.name}</div>
                  <div className={styles.learning}>
                    Aprendendo: <strong>{student.learning}</strong>
                  </div>
                </div>
                <span
                  className={`${styles.status} ${student.status === "Ativo" ? styles.active : styles.inactive}`}
                >
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
