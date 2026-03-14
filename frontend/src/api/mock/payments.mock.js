export const mockPayments = [
  {
    id: 42,
    receipt_number: "2025/T1/0042",
    student_id: 1,
    student_name: "Amara Osei",
    class_name: "P.6",
    amount: 300000,
    channel: "cash",
    channel_reference: null,
    payment_date: "2025-03-10",
    recorded_by_name: "Sarah Nakato",
    is_voided: false,
    allocations: [
      { fee_category: "Tuition", amount_allocated: 300000 }
    ],
    created_at: "2025-03-10T09:15:00"
  },
  {
    id: 43,
    receipt_number: "2025/T1/0043",
    student_id: 2,
    student_name: "John Musa",
    class_name: "P.6",
    amount: 500000,
    channel: "bank_slip",
    channel_reference: "SLIP-9988-AA",
    payment_date: "2025-03-11",
    recorded_by_name: "Sarah Nakato",
    is_voided: false,
    allocations: [
      { fee_category: "Tuition", amount_allocated: 500000 }
    ],
    created_at: "2025-03-11T10:45:00"
  }
];
