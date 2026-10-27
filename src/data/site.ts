export const site = {
  name: 'Erick Rodríguez-Esparza', shortName: 'Erick R–E', url: 'https://erickrdze.github.io',
  role: 'Researcher in AI, optimization and intelligent mobility',
  affiliation: 'DeustoTech · University of Deusto', location: 'Bilbao, Spain', email: 'erick.rodriguez@deusto.es',
  description: 'Postdoctoral researcher at DeustoTech developing AI and optimization methods for mobility, logistics, transport planning, and biomedical imaging.',
  profiles: { scholar: 'https://scholar.google.com/citations?user=f9rxCz4AAAAJ&hl=en', orcid: 'https://orcid.org/0000-0002-8761-1626', github: 'https://github.com/erickrdze', linkedin: 'https://www.linkedin.com/in/erick-rdze/' },
};

export const navigation = [
  { label: 'About', href: '/about/' }, { label: 'Research', href: '/research/' }, { label: 'Projects', href: '/projects/' },
  { label: 'Publications', href: '/publications/' }, { label: 'Activities', href: '/activities/' }, { label: 'Contact', href: '/contact/' },
];

export const highlights = [
  { value: '671', label: 'Citations' }, { value: '9', label: 'h-index' }, { value: '9', label: 'Journal articles' }, { value: '3', label: 'Horizon Europe projects' },
];

export const researchAreas = [
  { number: '01', slug: 'optimization', title: 'Evolutionary Computation & Optimization', short: 'Search methods for problems where the solution space is large, uncertain, or shaped by competing objectives.', body: 'My work covers evolutionary algorithms, metaheuristics, hyper-heuristics, Bayesian optimization, reinforcement learning, and operator balance, with applications in routing, scheduling, image processing, and engineering.' },
  { number: '02', slug: 'ai-ml', title: 'Artificial Intelligence & Machine Learning', short: 'Models designed not only to predict, but to support decisions that can be examined and improved.', body: 'I work with predictive modeling, explainable AI, deep learning, image analysis, and data preparation in transport and biomedical applications.' },
  { number: '03', slug: 'mobility', title: 'Intelligent Mobility & Transportation', short: 'Planning transport services around changing demand, disruptions, safety, and day-to-day constraints.', body: 'Current applications include dynamic fleet routing, demand-responsive transport, parcel logistics, roadworks planning, traffic simulation, transport modeling, and geospatial safety analysis.' },
  { number: '04', slug: 'software', title: 'Research Software & Applied Innovation', short: 'Building the software needed to run experiments, compare alternatives, and share results with project teams.', body: 'I develop optimization pipelines, simulation workflows, experimental prototypes, and scenario evaluations for multidisciplinary R&D projects.' },
];

export const projects = [
  { slug: 'acceptremote', title: 'AcceptRemote', period: '2026–2029', programme: 'Horizon Europe', category: 'Connected & automated mobility', challenge: 'Keep on-demand passenger and parcel services moving when new requests, incidents, or operating conditions change the plan.', contribution: 'At DeustoTech, I develop optimization methods for fleet coordination, dynamic routing, and rerouting in the project’s Munich use case.', methods: ['Dynamic routing', 'Fleet optimization', 'Remote operations'], url: 'https://acceptremote.eu/', status: 'Ongoing', priority: 1, featured: true },
  { slug: 'izar', title: 'IZAR', period: '2026–2027', programme: 'Elkartek · Basque Government', category: 'Knowledge-driven manufacturing', challenge: 'Capture and evaluate expert knowledge in factories, then use it to test new hypotheses and identify opportunities for continuous improvement.', contribution: 'I contribute to DeustoTech’s work on multi-fidelity optimization and learning methods for expert-informed factory decisions.', methods: ['Multi-fidelity optimization', 'Reinforcement learning', 'Multi-agent systems'], url: 'https://deustotech.deusto.es/project/izar/', status: 'Ongoing', priority: 2, featured: true },
  { slug: 'renaissance', title: 'RENAISSANCE', period: '2023–2026', programme: 'Spanish national R&D', category: 'Sustainable urban mobility', challenge: 'Make urban mobility and freight transport safer, more efficient, and less energy-intensive without overlooking operational constraints.', contribution: 'I contribute to prediction and optimization modules that combine transport simulation with computational planning methods.', methods: ['Predictive modeling', 'Optimization', 'Simulation-based AI'], url: 'https://deustotech.deusto.es/project/renaissance/', status: 'Ongoing', priority: 3, featured: true },
  { slug: 'synchromode', title: 'SYNCHROMODE', period: '2023–2026', programme: 'Horizon Europe', category: 'Traffic management & planning', challenge: 'Schedule roadworks in South Holland while accounting for their effects across the wider transport network.', contribution: 'I developed a simulation-based workflow that connects roadworks scheduling decisions with traffic-impact assessment.', methods: ['Bayesian optimization', 'Aimsun simulation', 'Schedule optimization'], url: 'https://cordis.europa.eu/project/id/101104171', status: 'Completed', priority: 4, featured: true },
  { slug: 'soteria', title: 'SOTERIA', period: '2022–2026', programme: 'Horizon Europe', category: 'Urban road safety', challenge: 'Understand and reduce the risks faced by vulnerable road users in complex urban transport systems.', contribution: 'My contribution covered transport modeling, geospatial crash analysis, risk prediction, and tools for road-safety assessment.', methods: ['Geospatial analysis', 'Explainable ML', 'Transport modeling'], url: 'https://cordis.europa.eu/project/id/101077433', status: 'Completed', priority: 5, featured: true },
];

export const developments = [
  { number: '01', title: 'Roadworks Planning Optimization', problem: 'A roadworks schedule can look feasible on paper and still create serious disruption across the network.', approach: 'Bayesian optimization linked to Aimsun simulations and scenario-based impact assessment.', contribution: 'I developed the workflow used to compare candidate schedules through transport simulation.', application: 'South Holland use case · SYNCHROMODE', href: '/publications/#roadworks-scheduling' },
  { number: '02', title: 'Dynamic Fleet Routing & Rerouting', problem: 'Passenger and parcel fleets need to react when requests and operating conditions change during service.', approach: 'Dynamic routing, fleet coordination, and real-time replanning for demand-responsive operations.', contribution: 'I am developing the optimization methods for the project’s Munich passenger-and-parcel use case.', application: 'Munich use case · AcceptRemote', href: '/projects/#acceptremote' },
  { number: '03', title: 'Evolutionary & Metaheuristic Optimization', problem: 'Difficult search spaces demand a careful balance between exploring new regions and refining good solutions.', approach: 'Evolutionary algorithms, hyper-heuristics, adaptive simulated annealing, reinforcement learning, and diversity control.', contribution: 'I design, implement, and benchmark these methods across routing, engineering, and image-analysis problems.', application: 'Computational intelligence research', href: '/publications/#operator-balance' },
];

export const timeline = [
  { period: '2024–present', title: 'Postdoctoral Researcher', place: 'DeustoTech · University of Deusto', detail: 'Optimization and software development for transport, logistics, mobility, fleet management, and industrial applications.' },
  { period: '2020–2024', title: 'PhD in Engineering', place: 'University of Deusto · Spain', detail: 'Outstanding Cum Laude with International Mention. Thesis on optimization methods and models for sustainable, efficient last-mile logistics.' },
  { period: '2022', title: 'International Research Stay', place: 'National Technical University of Athens · Greece', detail: 'Three-month stay in Transportation Planning and Engineering focused on urban freight, transport modeling, and parcel locker systems.' },
  { period: '2018–2020', title: 'MSc in Computer Science & Engineering', place: 'University of Guadalajara · Mexico', detail: 'Research on machine learning and evolutionary computation for breast cancer detection.' },
  { period: '2012–2017', title: 'BSc in Biomedical Engineering', place: 'Autonomous University of San Luis Potosí · Mexico', detail: 'Biomedical engineering foundations and image-based quantitative movement analysis.' },
];

export const capabilities = [
  { title: 'Research methods', items: ['Metaheuristic optimization', 'Evolutionary algorithms', 'Bayesian optimization', 'Reinforcement learning', 'Multi-objective optimization', 'Explainable machine learning'] },
  { title: 'Applied developments', items: ['Fleet routing & rerouting', 'Roadworks scheduling', 'Traffic simulation', 'Transport modeling', 'Geospatial analytics', 'Image processing'] },
  { title: 'Tools & technologies', items: ['Python', 'MATLAB', 'C++', 'R', 'Git', 'Docker', 'Linux', 'AWS', 'LaTeX'] },
];

export const activities = [
  { year: '2026', type: 'Awards', title: 'Ignacio Ellacuría Award for Best Doctoral Thesis', detail: 'University of Deusto, academic year 2024/25.' },
  { year: '2022', type: 'International experience', title: 'Research stay at NTUA', detail: 'Transportation Planning and Engineering, Athens, Greece.' },
  { year: '2021–2024', type: 'Fellowships', title: 'FPI Research Training Fellowship', detail: 'Competitive national research funding in Spain.' },
  { year: '2018–2020', type: 'Fellowships', title: 'Full MSc Fellowship · CONACYT', detail: 'Competitive national research funding in Mexico.' },
  { year: 'Ongoing', type: 'Academic service', title: 'Peer review for international journals', detail: 'Reviewer for Expert Systems with Applications, IEEE Access, Knowledge-Based Systems, and Computer Methods and Programs in Biomedicine.' },
  { year: '2026', type: 'Supervision', title: 'MSc thesis supervision', detail: 'Supervised Beñat Cristóbal Bañares on hybrid RAG systems for natural-language queries over geospatial metadata.' },
  { year: '2027', type: 'Organization', title: 'EvoApplications special session', detail: 'Co-organizer of “Evolutionary Computation and Machine Learning in Humanitarian Logistics and Disaster Forecasting.”' },
];
