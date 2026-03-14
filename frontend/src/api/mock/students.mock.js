export const mockStudents = [
  {
    id: 1,
    student_id: "AVN-2025-001",
    first_name: "Amara",
    last_name: "Osei",
    class_id: 3,
    class_name: "P.6",
    guardian_name: "Kofi Osei",
    guardian_phone: "0772000000",
    status: "active",
    created_at: "2025-01-10T08:00:00"
  },
  {
    id: 2,
    student_id: "AVN-2025-002",
    first_name: "John",
    last_name: "Musa",
    class_id: 3,
    class_name: "P.6",
    guardian_name: "Sarah Musa",
    guardian_phone: "0772111111",
    status: "active",
    created_at: "2025-01-11T09:30:00"
  },
  {
    id: 3,
    student_id: "AVN-2025-003",
    first_name: "Grace",
    last_name: "Nalule",
    class_id: 4,
    class_name: "P.7",
    guardian_name: "Peter Nalule",
    guardian_phone: "0772222222",
    status: "active",
    created_at: "2025-01-12T10:15:00"
  }
];

export const mockStudentBalances = {
  1: {
    student_id: 1,
    term_id: 2,
    term_label: "Term 1 2025",
    total_due: 750000,
    total_paid: 300000,
    outstanding: 450000,
    breakdown: [
      { fee_category: "Tuition", due: 500000, paid: 300000, balance: 200000 },
      { fee_category: "PTA", due: 50000, paid: 0, balance: 50000 },
      { fee_category: "Development", due: 200000, paid: 0, balance: 200000 }
    ]
  }
};
