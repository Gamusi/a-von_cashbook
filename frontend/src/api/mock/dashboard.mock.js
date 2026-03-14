export const mockDashboardData = {
  stats: [
    { label: "Total Students", value: 450, change: "+12", trend: "up" },
    { label: "Collections (Term)", value: "32,500,000", change: "72%", trend: "up" },
    { label: "Total Expenses", value: "12,400,000", change: "-5%", trend: "down" },
    { label: "Cash on Hand", value: "20,100,000", change: null, trend: "neutral" }
  ],
  recentPayments: [
    { id: 101, student: "Amara Osei", amount: "300,000", date: "Today, 10:15 AM", method: "Cash" },
    { id: 102, student: "John Musa", amount: "500,000", date: "Today, 09:30 AM", method: "Bank Slip" },
    { id: 103, student: "Grace Nalule", amount: "150,000", date: "Yesterday", method: "Mobile Money" }
  ]
};
