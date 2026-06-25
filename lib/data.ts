export const TELEMETRY_STATS = [
  { id: 1, value: "99.999%", label: "Mission-Critical Uptime" },
  { id: 2, value: "< 5ms", label: "Tactical Data Latency" },
  { id: 3, value: "Zero-Day", label: "Vulnerabilities Neutralized" },
  { id: 4, value: "100+", label: "Deployments Secured" },
];

export const DOCTRINES = [
  {
    id: 1,
    label: "DOCTRINE 01",
    title: "Tactical Agility & Engineering",
    desc: "Rapid deployment cycles. We apply battlefield-tested adaptability to commercial product development for unmatched speed to market.",
    image: "/images/agile_engineering_1782072161001.png",
  },
  {
    id: 2,
    label: "DOCTRINE 02",
    title: "Mission-Critical Analytics",
    desc: "From defence threat-detection logic to enterprise growth metrics, our data strategies ensure precise, high-stakes decision making.",
    image: "/images/data_strategy_1782072175430.png",
  },
  {
    id: 3,
    label: "DOCTRINE 03",
    title: "Zero-Trust Architecture",
    desc: "Military-grade cybersecurity frameworks meticulously tailored to protect both national defence networks and sensitive corporate assets.",
    image: "/images/enterprise_security_1782072186176.png",
  },
  {
    id: 4,
    label: "DOCTRINE 04",
    title: "Resilient Infrastructure",
    desc: "Hardened, highly scalable cloud systems designed to withstand high-stress environments, cyber threats, and massive traffic spikes.",
    image: "/images/scalable_architecture_1782072197619.png",
  },
  {
    id: 5,
    label: "DOCTRINE 05",
    title: "Autonomous Systems & AI",
    desc: "Deploying intelligent automation everywhere—scaling seamlessly from autonomous defence operations to complex enterprise workflows.",
    image: "/images/intelligent_automation_1782072210060.png",
  },
];

export const PIPELINE_STEPS = [
  {
    id: 1,
    num: "01",
    title: "Reconnaissance & Strategy",
    desc: "Deep architectural mapping to identify vulnerabilities, bottlenecks, and growth vectors.",
  },
  {
    id: 2,
    num: "02",
    title: "Tactical Engineering",
    desc: "Rapid, secure code development utilizing battlefield-tested design paradigms.",
  },
  {
    id: 3,
    num: "03",
    title: "Hardening & QA",
    desc: "Rigorous penetration testing and zero-trust validation before launch.",
  },
  {
    id: 4,
    num: "04",
    title: "Global Deployment",
    desc: "Pushing to highly scalable, extremely resilient cloud infrastructure.",
  },
];

export const MISSION_BRIEFS = [
  {
    id: 1,
    type: "terminal",
    brief_id: "OP_AURA",
    title: "Threat Detection Engine",
    content: "Syslog monitoring...\n> Anomaly detected at edge.\n> Isolating node [0x9A]...\n> Node isolated successfully.",
    accent: "text-green-400",
    bg: "bg-[#050505]",
  },
  {
    id: 2,
    type: "metric",
    brief_id: "OP_NEXUS",
    title: "Cloud Migration",
    metric: "99.999%",
    subtext: "Uptime SLA Maintained",
    accent: "text-cyan-400",
    bg: "bg-slate-900",
  },
  {
    id: 3,
    type: "graph",
    brief_id: "OP_SENTINEL",
    title: "Zero-Trust Auth System",
    accent: "text-purple-400",
    bg: "bg-[#0a0e17]",
  },
  {
    id: 4,
    type: "diff",
    brief_id: "OP_VALKYRIE",
    title: "Autonomous Drone UI",
    accent: "text-indigo-400",
    bg: "bg-slate-950",
    diffLines: [
      { id: 1, type: "rem", text: "- latency: 15ms" },
      { id: 2, type: "add", text: "+ latency: < 2ms" },
      { id: 3, type: "add", text: "+ autoReroute: true" },
    ],
  },
  {
    id: 5,
    type: "image",
    brief_id: "OP_ECLIPSE",
    title: "Enterprise Warehouse",
    image: "/images/scalable_architecture_1782072197619.png",
    accent: "text-teal-400",
    bg: "bg-black",
  },
];

export const CAPABILITIES = [
  {
    id: 1,
    cap_id: "CAP_01",
    icon: "🛡️",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Strategic Defence AI",
    desc: "Deploying autonomous computational models, automated surveillance systems, and high-frequency real-time intelligence feeds designed explicitly for national defense ecosystems.",
    image: "/images/defence_ai_1782069307313.png",
    tags: ["Threat Detection", "Secure Comms", "Tactical Pipelines"],
  },
  {
    id: 2,
    cap_id: "CAP_02",
    icon: "🧠",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Enterprise AI & Automation",
    desc: "Large-scale database operations, predictive modeling, and business process automation tailored for modern commercial verticals.",
    image: "/images/ai_automation_1782069318007.png",
    tags: ["Predictive Models", "Workflow Auth", "Data Mining"],
  },
  {
    id: 3,
    cap_id: "CAP_03",
    icon: "🌐",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    title: "Modern Web Architecture",
    desc: "High-performance, scalable web applications with sleek UIs, secure backend integrations, and cutting-edge frontend frameworks.",
    image: "/images/web_development_1782069330377.png",
    tags: ["React/Next.js", "Serverless", "Edge Computing"],
  },
  {
    id: 4,
    cap_id: "CAP_04",
    icon: "📱",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Cross-Platform Apps",
    desc: "Native and cross-platform mobile experiences engineered for maximum user engagement, speed, and seamless API synchronization.",
    image: "/images/app_development_1782069342508.png",
    tags: ["iOS Native", "Android", "Flutter"],
  },
];

export const CASE_STUDIES = [
  {
    id: 1,
    client: "Ministry of Defence",
    title: "Project SENTINEL: Autonomous Surveillance",
    challenge: "High-altitude borders required 24/7 monitoring where human deployment was impossible. Existing drone fleets lacked real-time edge processing.",
    solution: "Deployed the Shastra Edge Engine on 500+ UAVs, enabling real-time anomaly detection and autonomous threat assessment.",
    impact_metric: "99.8% Threat Interception Rate",
    image: "/images/defence_ai_1782069307313.png",
  },
  {
    id: 2,
    client: "Global Financial Conglomerate",
    title: "Zero-Trust Data Vault Migration",
    challenge: "Legacy databases were vulnerable to lateral movement attacks. The client needed to migrate 5PB of data without disrupting trading.",
    solution: "Architected a decentralized, zero-trust data mesh. Implemented military-grade encryption on all data-in-transit.",
    impact_metric: "Zero Downtime during 5PB Migration",
    image: "/images/data_strategy_1782072175430.png",
  },
];

export const NEWS_ARTICLES = [
  {
    id: 1,
    title: "Trinetra Unveils Next-Gen AI Drone Swarm Management UI",
    content: "Our latest interface allows single-operator control of up to 50 autonomous UAVs with sub-2ms latency.",
    created_at: "2026-06-25T10:00:00Z",
  },
  {
    id: 2,
    title: "Zero-Trust Architecture Deployed for Global Banking Partner",
    content: "Trinetra successfully migrated 5PB of sensitive financial data into a hardened, zero-trust cloud mesh with 100% uptime.",
    created_at: "2026-06-20T14:30:00Z",
  },
  {
    id: 3,
    title: "Strategic Partnership Announced with MoD",
    content: "Trinetra to provide real-time threat detection analytics for national border surveillance outposts.",
    created_at: "2026-06-15T09:15:00Z",
  }
];
