
export const schemes = [
  {
    id: 1,
    name: "Samagra Shiksha Abhiyan",
    description: "A comprehensive program to improve school education from pre-school to Class 12",
    budget: 389000000000, // in INR
    budgetUtilized: 267000000000, // in INR
    beneficiaries: 18500000,
    targetBeneficiaries: 25000000,
    startDate: "2018-04-01",
    status: "Active",
    category: "School Education",
    coverage: {
      states: 36,
      districts: 725,
      blocks: 7200
    },
    metrics: {
      enrollmentRate: 92,
      dropoutRate: 12.6,
      genderParity: 0.94,
      teacherTraining: 87,
      qualityIndex: 72
    }
  },
  {
    id: 2,
    name: "PM POSHAN",
    description: "National Programme of Mid-Day Meal in Schools",
    budget: 120000000000, // in INR
    budgetUtilized: 98000000000, // in INR
    beneficiaries: 115000000,
    targetBeneficiaries: 118000000,
    startDate: "2021-09-29",
    status: "Active",
    category: "School Nutrition",
    coverage: {
      states: 36,
      districts: 718,
      blocks: 7150
    },
    metrics: {
      nutritionAdequacy: 85,
      attendanceImprovement: 23,
      qualityIndex: 78,
      healthImpact: 65
    }
  },
  {
    id: 3,
    name: "PMKVY",
    description: "Pradhan Mantri Kaushal Vikas Yojana for skill development",
    budget: 120000000000, // in INR
    budgetUtilized: 87000000000, // in INR
    beneficiaries: 10200000,
    targetBeneficiaries: 15000000,
    startDate: "2015-07-15",
    status: "Active",
    category: "Skill Development",
    coverage: {
      states: 36,
      districts: 705,
      blocks: 6800
    },
    metrics: {
      placementRate: 67,
      certificationRate: 82,
      skillGap: 15,
      employerSatisfaction: 72
    }
  },
  {
    id: 4,
    name: "RUSA",
    description: "Rashtriya Uchchatar Shiksha Abhiyan for higher education",
    budget: 70000000000, // in INR
    budgetUtilized: 48000000000, // in INR
    beneficiaries: 3200000,
    targetBeneficiaries: 5000000,
    startDate: "2013-09-03",
    status: "Active",
    category: "Higher Education",
    coverage: {
      states: 36,
      districts: 520,
      institutions: 1500
    },
    metrics: {
      accreditationRate: 65,
      researchOutput: 42,
      facultyQuality: 72,
      infrastructureIndex: 68
    }
  },
  {
    id: 5,
    name: "NISHTHA",
    description: "National Initiative for School Heads and Teachers' Holistic Advancement",
    budget: 22000000000, // in INR
    budgetUtilized: 18500000000, // in INR
    beneficiaries: 4200000,
    targetBeneficiaries: 4800000,
    startDate: "2019-08-21",
    status: "Active",
    category: "Teacher Training",
    coverage: {
      states: 36,
      districts: 710,
      blocks: 7100
    },
    metrics: {
      teacherCompletion: 87,
      qualityImprovement: 65,
      classroomPractice: 72,
      learningOutcomes: 56
    }
  }
];

export const trendsData = {
  enrollment: [
    { year: 2019, primary: 87.5, secondary: 72.3, higher: 28.6 },
    { year: 2020, primary: 88.2, secondary: 74.1, higher: 29.7 },
    { year: 2021, primary: 89.6, secondary: 76.8, higher: 31.2 },
    { year: 2022, primary: 91.2, secondary: 78.5, higher: 32.8 },
    { year: 2023, primary: 92.7, secondary: 80.1, higher: 34.5 },
    { year: 2024, primary: 93.5, secondary: 81.6, higher: 36.2 }
  ],
  
  dropoutRates: [
    { year: 2019, primary: 4.5, secondary: 17.8, higher: 9.3 },
    { year: 2020, primary: 4.2, secondary: 16.5, higher: 8.8 },
    { year: 2021, primary: 3.8, secondary: 15.7, higher: 8.5 },
    { year: 2022, primary: 3.5, secondary: 14.8, higher: 8.1 },
    { year: 2023, primary: 3.2, secondary: 13.9, higher: 7.8 },
    { year: 2024, primary: 2.9, secondary: 13.2, higher: 7.5 }
  ],
  
  budgetAllocation: [
    { year: 2019, education: 560000000000, percentage: 2.8 },
    { year: 2020, education: 590000000000, percentage: 2.9 },
    { year: 2021, education: 650000000000, percentage: 3.1 },
    { year: 2022, education: 730000000000, percentage: 3.3 },
    { year: 2023, education: 820000000000, percentage: 3.5 },
    { year: 2024, education: 940000000000, percentage: 3.8 }
  ],
  
  infrastructureIndex: [
    { year: 2019, schools: 62, colleges: 68 },
    { year: 2020, schools: 65, colleges: 70 },
    { year: 2021, schools: 68, colleges: 72 },
    { year: 2022, schools: 72, colleges: 74 },
    { year: 2023, schools: 75, colleges: 77 },
    { year: 2024, schools: 78, colleges: 79 }
  ]
};

export const predictedValues = {
  enrollment: [
    { year: 2025, primary: 94.3, secondary: 83.0, higher: 37.8 },
    { year: 2026, primary: 95.1, secondary: 84.2, higher: 39.1 },
    { year: 2027, primary: 95.8, secondary: 85.5, higher: 40.3 }
  ],
  
  dropoutRates: [
    { year: 2025, primary: 2.7, secondary: 12.6, higher: 7.2 },
    { year: 2026, primary: 2.5, secondary: 12.0, higher: 6.9 },
    { year: 2027, primary: 2.3, secondary: 11.5, higher: 6.6 }
  ],
  
  budgetRequirement: [
    { year: 2025, education: 1050000000000, percentage: 3.9 },
    { year: 2026, education: 1150000000000, percentage: 4.1 },
    { year: 2027, education: 1280000000000, percentage: 4.3 }
  ]
};

export const anomalies = [
  {
    id: 1,
    scheme: "Samagra Shiksha Abhiyan",
    indicator: "Budget Utilization",
    region: "North Eastern States",
    expected: 85,
    actual: 62,
    severity: "High",
    details: "Budget utilization significantly below expected levels in North Eastern states"
  },
  {
    id: 2,
    scheme: "PM POSHAN",
    indicator: "Coverage",
    region: "Aspirational Districts",
    expected: 95,
    actual: 82,
    severity: "Medium",
    details: "Coverage in aspirational districts below targets"
  },
  {
    id: 3,
    scheme: "PMKVY",
    indicator: "Placement Rate",
    region: "Rural Areas",
    expected: 70,
    actual: 48,
    severity: "High",
    details: "Placement rates for skill training significantly lower in rural areas"
  },
  {
    id: 4,
    scheme: "RUSA",
    indicator: "Research Output",
    region: "State Universities",
    expected: 45,
    actual: 32,
    severity: "Medium",
    details: "Research publications and patents below expectations in state universities"
  }
];

export const regionalData = {
  statePerformance: [
    { state: "Kerala", literacyRate: 96.2, gpi: 0.98, qualityIndex: 87 },
    { state: "Tamil Nadu", literacyRate: 90.1, gpi: 0.96, qualityIndex: 82 },
    { state: "Himachal Pradesh", literacyRate: 89.5, gpi: 0.95, qualityIndex: 79 },
    { state: "Maharashtra", literacyRate: 88.7, gpi: 0.92, qualityIndex: 76 },
    { state: "Punjab", literacyRate: 87.8, gpi: 0.89, qualityIndex: 74 },
    { state: "Gujarat", literacyRate: 86.2, gpi: 0.87, qualityIndex: 72 },
    { state: "Karnataka", literacyRate: 85.9, gpi: 0.92, qualityIndex: 75 },
    { state: "Uttarakhand", literacyRate: 84.7, gpi: 0.91, qualityIndex: 71 },
    { state: "West Bengal", literacyRate: 82.6, gpi: 0.91, qualityIndex: 68 },
    { state: "Haryana", literacyRate: 82.1, gpi: 0.86, qualityIndex: 69 },
    { state: "Assam", literacyRate: 81.5, gpi: 0.88, qualityIndex: 65 },
    { state: "Chhattisgarh", literacyRate: 79.8, gpi: 0.86, qualityIndex: 62 },
    { state: "Madhya Pradesh", literacyRate: 78.2, gpi: 0.84, qualityIndex: 61 },
    { state: "Uttar Pradesh", literacyRate: 77.3, gpi: 0.83, qualityIndex: 58 },
    { state: "Rajasthan", literacyRate: 76.9, gpi: 0.81, qualityIndex: 60 },
    { state: "Jharkhand", literacyRate: 74.8, gpi: 0.82, qualityIndex: 57 },
    { state: "Bihar", literacyRate: 70.9, gpi: 0.79, qualityIndex: 52 }
  ],
  
  zoneWisePerformance: [
    { zone: "South", enrollmentRate: 95.6, dropoutRate: 7.3, budgetUtilization: 89.2 },
    { zone: "West", enrollmentRate: 91.2, dropoutRate: 9.6, budgetUtilization: 86.5 },
    { zone: "North", enrollmentRate: 88.5, dropoutRate: 11.2, budgetUtilization: 84.7 },
    { zone: "East", enrollmentRate: 85.7, dropoutRate: 13.8, budgetUtilization: 80.3 },
    { zone: "Central", enrollmentRate: 83.2, dropoutRate: 15.2, budgetUtilization: 78.6 },
    { zone: "North East", enrollmentRate: 82.8, dropoutRate: 16.5, budgetUtilization: 74.2 }
  ]
};

export const overviewMetrics = [
  { 
    id: 1,
    title: "Active Schemes",
    value: 24,
    change: 2,
    trend: "up",
    icon: "ListChecks"
  },
  { 
    id: 2,
    title: "Total Beneficiaries",
    value: 152500000,
    change: 3.5,
    trend: "up",
    icon: "Users"
  },
  { 
    id: 3,
    title: "Budget Utilization",
    value: 76.8,
    change: 4.2,
    trend: "up",
    icon: "Wallet"
  },
  { 
    id: 4,
    title: "Overall Impact Score",
    value: 72,
    change: 2.3,
    trend: "up",
    icon: "TrendingUp"
  }
];

export const recentAnnouncementsData = [
  {
    id: 1,
    title: "New National Education Policy Implementation",
    date: "2024-03-15",
    description: "MHRD announces phased implementation of NEP 2020 with revised guidelines",
    category: "Policy"
  },
  {
    id: 2,
    title: "Budget Enhancement for PM POSHAN",
    date: "2024-03-01",
    description: "Additional allocation of ₹5,000 crores for the mid-day meal scheme",
    category: "Budget"
  },
  {
    id: 3,
    title: "Digital Education Initiative Expansion",
    date: "2024-02-20",
    description: "SWAYAM platform to cover all higher education courses by 2025",
    category: "Digital"
  },
  {
    id: 4,
    title: "School Infrastructure Development Program",
    date: "2024-02-10",
    description: "New phase of school infrastructure upgrades in 250 aspirational districts",
    category: "Infrastructure"
  }
];
