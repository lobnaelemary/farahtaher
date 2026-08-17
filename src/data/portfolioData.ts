import { ProjectData, JourneyMilestone, IndustryExpertise } from '../types';

export const PERSONAL_INFO = {
  name: 'Farah Taher',
  role: 'Analytics Consultant & Data Specialist',
  title: 'Data Analyst & Data Science Professional',
  location: 'Toronto, ON, Canada',
  email: 'fara7.taher89@gmail.com',
  phone: '+1 (437) 000-0000',
  linkedin: 'https://linkedin.com/in/farah-taher',
  github: 'https://github.com/farahtaher',
  // heroTagline: 'I turn data into meaningful insights that drive impact.',
  taglineSecondary: 'Transforming complex, multi-source data into clear insights, automated workflows, and measurable business impact.',
  bio: `I’m Farah, a Toronto-based Data Specialist with 3+ years of experience delivering analytical solutions across financial services, supply chain, transportation, and public-sector environments. I completed my Master of Data Science & Analytics, specializing in Natural Language Processing (NLP) and advanced data visualization. My work focuses on turning messy, fragmented data into clear, actionable insights that help organizations improve efficiency, strengthen decision-making, and achieve measurable results.`,
  aboutDetailed: `Across my roles, I’ve supported operational teams, commercial leaders, and executives by developing automated reporting pipelines, performance dashboards, and analytical frameworks that improve efficiency and strengthen decision-making. My work has contributed to over $1M in cost savings through improved compliance, optimized workflows, and data-driven operational improvements.

I’m passionate about solving real business problems, simplifying complexity, and communicating insights in a way that builds trust and drives action. I bring a blend of technical depth, business understanding, and clear communication to every project I work on.`,
  quote: `Data is more than numbers—it's the story behind every decision.`,
  philosophy: `I believe in curiosity, clarity, and continuous learning. My goal is to bridge the gap between data and impact, empowering businesses and people to make better choices.`
};

export const IMPACT_STATS = [
  { value: '25+', label: 'PROJECTS DELIVERED', sub: 'Across 5+ Industries' },
  { value: '15+', label: 'CLIENTS & TEAMS', sub: 'Cross-functional Reach' },
  { value: '40%', label: 'AVG. KPI GAIN', sub: 'Operational Efficiency' },
  { value: '$1M+', label: 'COST SAVINGS', sub: 'Documented Impact' },
];

export const CORE_PILLARS = [
  {
    title: 'DATA-DRIVEN STRATEGY',
    desc: 'Translating business goals into robust analytical architectures and KPI models.'
  },
  {
    title: 'INSIGHTFUL SOLUTIONS',
    desc: 'Transforming complex multi-source data into actionable executive visibility.'
  },
  {
    title: 'MEASURABLE IMPACT',
    desc: 'Delivering tangible ROI, cost reductions, and operational excellence.'
  },
  {
    title: 'COLLABORATIVE PARTNERSHIP',
    desc: 'Bridging technical depth with business communication to empower teams.'
  }
];

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    year: '2018 – 2020',
    title: 'Master of Data Science & Analytics',
    organization: 'Specialized in NLP & Visualization',
    description: 'Advanced my expertise in statistics, machine learning, and data visualization to solve complex problems and model multi-source data.',
    iconName: 'GraduationCap'
  },
  {
    year: '2020 – 2021',
    title: 'Data Scientist',
    organization: 'Machine Learning & Predictive Modeling',
    description: 'Worked on impactful projects involving predictive modeling, natural language processing (NLP), and data-driven decision making.',
    iconName: 'BookOpen'
  },
  {
    year: '2021 – 2023',
    title: 'Senior Data Analyst',
    organization: 'Enterprise Performance & Pipelines',
    description: 'Led analytics initiatives, built automated reporting pipelines and dashboards, and delivered actionable insights that improved business performance.',
    iconName: 'BarChart3'
  },
  {
    year: '2023 – Present',
    title: 'Analytics Consultant',
    organization: 'Strategic Advisory & Solutions Lead',
    description: 'Partnering with organizations to transform data into strategies, optimize operations, and fuel scalable business growth.',
    iconName: 'Crown'
  }
];

export const SKILLS_DATA = [
  { name: 'Python (Pandas, NumPy, Scikit-Learn, spaCy)', level: 92, category: 'technical', tag: 'Expert' },
  { name: 'SQL (Snowflake, PostgreSQL, Window Functions, CTE)', level: 95, category: 'technical', tag: 'Expert' },
  { name: 'Power BI (DAX Modeling, KPI Dashboards)', level: 90, category: 'tools', tag: 'Advanced' },
  { name: 'Tableau & Sigma Visualization', level: 88, category: 'tools', tag: 'Advanced' },
  { name: 'Natural Language Processing (NLP & spaCy)', level: 86, category: 'technical', tag: 'Advanced' },
  { name: 'Machine Learning (LightGBM, XGBoost, Random Forest)', level: 89, category: 'technical', tag: 'Advanced' },
  { name: 'ETL & Automation (Alteryx, Snowflake, AWS)', level: 87, category: 'tools', tag: 'Advanced' },
  { name: 'Operations Research & Optimization (VRP, PuLP)', level: 85, category: 'technical', tag: 'Specialist' }
];

export const INDUSTRY_EXPERTISE: IndustryExpertise[] = [
  {
    id: 'financial',
    title: 'Financial Services',
    iconName: 'Landmark',
    items: [
      'Loan analytics and AML Compliance monitoring',
      'High-risk movement and residency detection',
      'Claims analysis and automated fraud detection',
      'Customer lifetime value & behavioral segmentation'
    ]
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain ',
    iconName: 'Boxes',
    items: [
      'POS multi-vendor data integration (Circana + NielsenIQ)',
      'Category hierarchy alignment & product mapping',
      'Sales trend analysis & category performance',
      'Executive KPI reporting and demand forecasting'
    ]
  },
  {
    id: 'transportation',
    title: 'Transportation & Logistics',
    iconName: 'Truck',
    items: [
      'GPS & telematics (XRS) fleet analytics across 24 terminals',
      'Driver compliance & on-time departure tracking',
      'Vehicle Routing Problem (VRP) optimization algorithms',
      'Route efficiency & operating cost reduction'
    ]
  },
  {
    id: 'public-sector',
    title: 'Public Sector & Healthcare',
    iconName: 'Building2',
    items: [
      'Workforce attendance & absence analytics dashboard',
      'Emergency Department Length of Stay (LOS) ML prediction (894M visits)',
      'Absence pattern identification & staffing gap mitigation',
      'Public policy and executive leadership reporting'
    ]
  }
];

export const PROFESSIONAL_STRENGTHS = [
  'Strategic problem-solving',
  'Executive-ready communication',
  'Turning complex data into clear insights',
  'Leading analytics projects end-to-end',
  'Storytelling in data problems',
  'Building trust through accuracy and clarity'
];

export const PROJECTS: ProjectData[] = [
  {
    id: 'aml-compliance',
    title: 'AML Compliance: Residency Change & High-Risk Movement Detection',
    subtitle: 'Enterprise SQL pipeline identifying high-risk customer mobility red flags for Enhanced Due Diligence',
    category: 'financial',
    categoryLabel: 'Financial Services',
    tools: ['SQL', 'Snowflake', 'Window Functions', 'CTE Pipelines'],
    role: 'Lead Data Analyst & SQL Architect',
    duration: '8 Weeks',
    featured: true,
    impactMetrics: [
      { label: 'Risk Accuracy', value: '99.4%', subtext: 'Precision across flagged accounts' },
      { label: 'EDD Efficiency', value: '45%', subtext: 'Faster compliance case review' },
      { label: 'Red Flags', value: '100%', subtext: 'Cross-border movement captured' }
    ],
    overview: 'An AML-focused SQL model designed to detect customers who frequently change residency, move across postal codes, or relocate outside the US/Canada — all of which are key Anti-Money Laundering (AML) red flags. This pipeline helps compliance teams quickly prioritize accounts requiring enhanced due diligence (EDD).',
    businessProblem: [
      'Compliance teams lacked automated mechanisms to distinguish genuine relocations from rapid synthetic address churning.',
      'Manual reviews across millions of account logs failed to reliably detect rapid multi-jurisdiction hops.',
      'High-risk regulatory vulnerability due to unmonitored cross-border relocations outside the US and Canada.',
      'Need for standardized AML risk tier scoring (High, Medium, Low) directly feeding investigation dashboards.'
    ],
    solution: [
      'Engineered a multi-step Common Table Expression (CTE) SQL pipeline to standardize dirty address histories.',
      'Employed ROW_NUMBER() and window functions partitioned by customer to compute elapsed days between sequential moves.',
      'Detected postal code transitions and flagged outbound migrations outside regulated US/Canada territories.',
      'Implemented automated multi-factor scoring logic segmenting accounts into AML High/Medium risk tiers for immediate investigative triage.'
    ],
    impactPoints: [
      'Successfully identified hundreds of dormant and high-velocity churning accounts under investigation.',
      'Reduced false-positive compliance workload by over 45% through robust temporal and geospatial filtering.',
      'Delivered audit-ready data outputs for regulatory compliance audits and executive risk committees.'
    ],
    sampleData: {
      headers: ['Customer ID', 'Old Postal', 'New Postal', 'Old Country', 'New Country', 'Days Between', 'Total Moves', 'Left US/CAN', 'AML Risk Tier'],
      rows: [
        ['102344', '94110', 'M5V2T6', 'US', 'Canada', 12, 4, 0, 'High Risk'],
        ['771204', 'M4B1B3', '75001', 'Canada', 'France', 30, 1, 1, 'High Risk'],
        ['550921', '10001', '33101', 'US', 'US', 45, 5, 0, 'Medium Risk'],
        ['998712', 'V6B3K9', 'M5H2N2', 'Canada', 'Canada', 60, 3, 0, 'Medium Risk'],
        ['342109', 'L4W1S9', 'L4W1S9', 'Canada', 'Canada', 320, 0, 0, 'Low Risk'],
        ['881230', '90210', '94016', 'US', 'US', 180, 1, 0, 'Low Risk']
      ]
    },
    sqlQuery: `WITH cleaned_addresses AS (
  SELECT
    customer_id,
    address,
    city,
    province,
    postal_code,
    country,
    address_start_date,
    address_end_date,
    ROW_NUMBER() OVER (
      PARTITION BY customer_id
      ORDER BY address_start_date
    ) AS rn
  FROM customer_address_history
  WHERE address IS NOT NULL
),
address_changes AS (
  SELECT
    c1.customer_id,
    c1.postal_code AS old_postal,
    c2.postal_code AS new_postal,
    c1.country AS old_country,
    c2.country AS new_country,
    c1.address_end_date AS old_end,
    c2.address_start_date AS new_start,
    DATEDIFF(day, c1.address_end_date, c2.address_start_date) AS days_between_moves,
    CASE
      WHEN c1.country IN ('US', 'USA', 'United States', 'CA', 'Canada')
       AND c2.country NOT IN ('US', 'USA', 'United States', 'CA', 'Canada')
      THEN 1 ELSE 0 END AS left_us_canada
  FROM cleaned_addresses c1
  JOIN cleaned_addresses c2
    ON c1.customer_id = c2.customer_id
   AND c2.rn = c1.rn + 1
   AND c1.postal_code <> c2.postal_code
),
risk_scoring AS (
  SELECT
    customer_id,
    COUNT(*) AS total_moves,
    SUM(left_us_canada) AS left_regulated_country,
    AVG(days_between_moves) AS avg_move_interval,
    CASE
      WHEN SUM(left_us_canada) > 0 THEN 'High AML Risk'
      WHEN COUNT(*) > 3 AND AVG(days_between_moves) < 90 THEN 'High AML Risk'
      WHEN COUNT(*) BETWEEN 2 AND 3 THEN 'Medium AML Risk'
      ELSE 'Low AML Risk'
    END AS aml_risk_segment
  FROM address_changes
  GROUP BY customer_id
),
flagged_customers AS (
  SELECT
    a.customer_id,
    a.old_postal,
    a.new_postal,
    a.old_country,
    a.new_country,
    a.days_between_moves,
    r.total_moves,
    r.left_regulated_country AS left_us_canada,
    r.aml_risk_segment
  FROM address_changes a
  JOIN risk_scoring r ON a.customer_id = r.customer_id
  WHERE r.aml_risk_segment IN ('High AML Risk', 'Medium AML Risk')
)
SELECT *
FROM flagged_customers
ORDER BY aml_risk_segment DESC, customer_id;`
  },
  {
    id: 'pos-integration',
    title: 'Automated POS Data Integration & Standardized Pipeline (Circana + NielsenIQ)',
    subtitle: 'End-to-end automated ETL and Alteryx pipeline generating $350K+ in annual vendor licensing savings',
    category: 'supply-chain',
    categoryLabel: 'Supply Chain',
    tools: ['SQL', 'Alteryx', 'Snowflake', 'Data Modeling', 'Excel'],
    role: 'Senior Data Analyst / Pipeline Architect',
    duration: '12 Weeks',
    featured: true,
    impactMetrics: [
      { label: 'Annual Savings', value: '$350K+', subtext: 'Direct vendor licensing reduction' },
      { label: 'Manual Effort', value: '100%', subtext: 'Eliminated manual report processing' },
      { label: 'Data Latency', value: '4x Faster', subtext: 'Accelerated weekly reporting cycles' }
    ],
    overview: 'Designed and deployed an end-to-end automated workflow to streamline POS data integration across multiple vendors. The project involved transitioning one major vendor from NielsenIQ to Circana, while maintaining NielsenIQ feeds for all remaining vendors — eliminating duplicate licensing costs and generating over $350K in annual savings.',
    businessProblem: [
      'Commercial teams struggled with fragmented vendor feeds (Circana vs. NielsenIQ) with conflicting hierarchies and product naming conventions.',
      'Duplicate licensing fees incurred across overlapping retail syndicated data providers.',
      'Manual weekly reconciliation created substantial delay in publishing executive sales performance and market share reports.',
      'Risk of commercial reporting disruptions during supplier vendor transitions.'
    ],
    solution: [
      'Built a centralized, robust Alteryx workflow orchestrating automated ingestion for both delimited CSV and direct vendor feeds.',
      'Developed universal mapping layers: Market Mapping, Category Hierarchy Alignment, Product & Geography Mapping, and Time-Period Harmonization.',
      'Engineered an automated reconciliation & variance validation module guaranteeing 100% data fidelity.',
      'Published a unified, standardized POS output layer feeding downstream commercial dashboards.'
    ],
    impactPoints: [
      '$350K+ direct annual recurring cost savings from vendor feed consolidation.',
      'Completely eliminated manual weekly spreadsheet preparation.',
      'Zero downtime or disruption experienced by commercial leaders during the transition.',
      'Established a scalable foundation ready for future vendor additions and machine learning forecasting.'
    ]
  },
  {
    id: 'driver-compliance',
    title: 'Driver Compliance & On-Time Performance Analytics',
    subtitle: 'Integrated GPS, telematics (XRS), and manifest operational intelligence delivering $650K+ savings',
    category: 'transportation',
    categoryLabel: 'Transportation & Logistics',
    tools: ['Power BI', 'DAX', 'Telematics (XRS)', 'GPS Analytics', 'SQL'],
    role: 'Analytics Consultant / BI Lead',
    duration: '10 Weeks',
    featured: true,
    impactMetrics: [
      { label: 'Cost Savings', value: '$650K+', subtext: 'Annual operational reduction' },
      { label: 'Terminals Covered', value: '24', subtext: 'Unified network visibility' },
      { label: 'Target Drivers', value: '76%', subtext: 'Average meeting on-time benchmarks' }
    ],
    overview: 'Late departures and inconsistent driver compliance were reducing operational efficiency, hurting service reliability, and increasing costs across 24 terminals. Leadership needed high-level visibility for decision-making and driver-level accountability to address recurring issues.',
    businessProblem: [
      'Late departures across 24 regional logistics terminals resulted in cascading shipping delays and contractual SLA penalties.',
      'Discrepancies between physical GPS timestamps and driver manifest logs made root cause attribution contentious.',
      'Terminal managers lacked objective, standardized drill-down visibility into driver-level adherence trends.'
    ],
    solution: [
      'Constructed an automated data integration model merging real-time GPS coordinates, XRS telematics logs, and dispatch manifests.',
      'Formulated custom DAX measures for On-Time Departure Rates, Late Minutes Analysis, and Driver Compliance Indices.',
      'Designed an intuitive Power BI dashboard offering high-level executive summaries alongside terminal and driver-level drilldowns.',
      'Embedded automated discrepancy reconciliation logic to verify authentic departure delays vs manifest reporting lag.'
    ],
    impactPoints: [
      'Generated over $650,000 in recurring annual operational cost savings.',
      'Enabled terminal managers to conduct targeted coaching, lifting average on-time performance to 76%.',
      'Significantly streamlined executive operational review cycles with 100% automated daily refreshes.'
    ]
  },
  {
    id: 'workforce-absence',
    title: 'Workforce Absence & Attendance Analytics Dashboard',
    subtitle: 'Interactive Tableau & SQL diagnostic tool reducing public sector staffing shortages by 8%',
    category: 'public-sector',
    categoryLabel: 'Public Sector & Education',
    tools: ['Tableau', 'SQL', 'Data Modeling', 'Heatmap Visualizations'],
    role: 'Data Specialist / Visualization Lead',
    duration: '6 Weeks',
    featured: false,
    impactMetrics: [
      { label: 'Staffing Shortages', value: '-8%', subtext: 'Direct reduction in staffing gaps' },
      { label: 'Absence Visibility', value: '100%', subtext: 'Full cross-department coverage' },
      { label: 'Refresh Automation', value: 'Daily', subtext: 'Zero manual report generation' }
    ],
    overview: 'HR leadership lacked centralized visibility into employee absence patterns, rates, and causes across departments and job roles. This limited proactive workforce planning, made it difficult to identify emerging staffing gaps, and reduced the ability to manage absence-related risks effectively.',
    businessProblem: [
      'Fragmented absence tracking systems masked recurring seasonal and day-of-week staffing shortfalls.',
      'HR leadership was forced to reactively arrange expensive emergency substitute coverage.',
      'Inconsistent absence classification codes across educational institutions prevented systemic policy interventions.'
    ],
    solution: [
      'Built SQL transformations standardizing disparate absence codes and unifying logs from the enterprise Absence Management Platform.',
      'Constructed dynamic Tableau visualizers including absence heatmaps (day of week vs month), ratio per absence type, and sickness rate trends.',
      'Integrated dynamic role and department drill-down filters with threshold-based staffing alert indicators.',
      'Implemented automated data validation checks and scheduled refresh pipelines.'
    ],
    impactPoints: [
      'Contributed directly to an 8% reduction in workforce shortages through proactive roster balancing.',
      'Empowered department heads with predictive visibility into peak absence periods (e.g. November/December Mondays and Fridays).',
      'Restored executive trust in workforce analytics with unified definitions and robust data governance.'
    ]
  },
  {
    id: 'ed-length-of-stay',
    title: 'Predicting Emergency Department Length of Stay Using Machine Learning (MRP)',
    subtitle: 'National healthcare research analyzing 894M NACRS hospital visits with LightGBM & SHAP explainability',
    category: 'ml',
    categoryLabel: 'Machine Learning & Healthcare',
    tools: ['Python', 'LightGBM', 'Random Forest', 'XGBoost', 'SHAP', 'Scikit-Learn'],
    role: 'Lead ML Researcher / Data Scientist',
    duration: '16 Weeks',
    featured: true,
    impactMetrics: [
      { label: 'LightGBM R²', value: '0.9086', subtext: 'Best predictive accuracy' },
      { label: 'RF MAE', value: '15.05m', subtext: 'Lowest Mean Absolute Error' },
      { label: 'Data Analyzed', value: '894M', subtext: 'Total Canadian ED visits (2003-2022)' }
    ],
    overview: 'Emergency Departments across Canada face persistent crowding, long patient stays, and rising demand. Admitted patients often remain in the ED for up to 48.5 hours. This Major Research Project (MRP) leveraged 20 years of national administrative data (NACRS 2003–2022) to model and predict median Length of Stay (LOS) across Canadian jurisdictions using supervised ML and SHAP explainability.',
    businessProblem: [
      'Severe hospital crowding and prolonged ED wait times jeopardized patient triage outcomes and operational throughput.',
      'Healthcare policymakers lacked empirical understanding of systemic vs patient-level drivers of stay duration.',
      'Existing predictive studies focused narrowly on single hospital EHR data rather than nationwide trends.'
    ],
    solution: [
      'Conducted exhaustive Exploratory Data Analysis (EDA) across 894M visits evaluating triage levels (CTAS), visit dispositions, and age groups.',
      'Trained, optimized, and benchmarked Random Forest, XGBoost, and LightGBM regression models evaluated via MAE and R².',
      'Applied SHAP (SHapley Additive exPlanations) to interpret feature importance and isolate primary drivers.',
      'Demonstrated that visit disposition and triage acuity are the foremost system-level determinants of prolonged hospital stay.'
    ],
    impactPoints: [
      'Achieved exceptional model performance (R² ≈ 0.91, LightGBM R² 0.9086, Random Forest MAE 15.05 minutes).',
      'Delivered evidence-based guidance for national healthcare capacity planning and resource allocation.',
      'Published reusable analytical frameworks demonstrating machine learning for macro health system monitoring.'
    ]
  },
  {
    id: 'vrp-optimization',
    title: 'Route Optimization for Delivery Assignment (Vehicle Routing Problem)',
    subtitle: 'Comparative operations research evaluating Exact ILP, Nearest Neighbor, Genetic Algorithms, & Simulated Annealing',
    category: 'optimization',
    categoryLabel: 'Operations Research & Optimization',
    tools: ['Python', 'PuLP', 'NumPy', 'Pandas', 'Matplotlib', 'ILP', 'Heuristics'],
    role: 'Optimization Specialist',
    duration: '6 Weeks',
    featured: false,
    impactMetrics: [
      { label: 'Best Large Dist.', value: '30.49M', subtext: 'Simulated Annealing route score' },
      { label: 'Fastest Runtime', value: '0.0013s', subtext: 'Nearest Neighbor heuristic' },
      { label: 'Algorithms', value: '4 Tested', subtext: 'ILP, Greedy, GA, Simulated Annealing' }
    ],
    overview: 'Delivery networks require efficient routing to reduce fuel consumption, shorten turnaround times, and optimize fleet utilization. Poorly optimized routes amplify driver fatigue and travel overhead. This project benchmarked four distinct optimization approaches on Kaggle delivery datasets to identify the optimal balance between solution quality and runtime.',
    businessProblem: [
      'Rising logistics fuel expenditures and vehicle idle times constrained last-mile delivery margins.',
      'Combinatorial explosion made traditional exact mathematical programming infeasible for medium and large delivery networks.',
      'Dispatchers needed clear computational benchmarks to select the appropriate routing algorithm based on fleet scale.'
    ],
    solution: [
      'Formulated mathematical optimization models and implemented four algorithms: Exact Integer Linear Programming (ILP), Nearest Neighbor Greedy heuristic, Genetic Algorithm (GA), and Simulated Annealing (SA).',
      'Conducted controlled experiments across Small (1 vehicle) and Large (5 vehicles) benchmark datasets.',
      'Quantified runtime scalability versus route distance minimization tradeoffs.',
      'Developed clear dispatch guidelines for real-time vs pre-scheduled routing operations.'
    ],
    impactPoints: [
      'Proved Nearest Neighbor is ideal for ultra-fast, real-time routing (0.0013s), while Simulated Annealing delivers superior global distance optimization (30.49M distance score).',
      'Demonstrated exponential runtime failure of exact ILP on larger problem spaces, validating metaheuristic adoption.',
      'Provided a practical algorithmic decision matrix for commercial logistics planning.'
    ]
  }
];
