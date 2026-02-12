// Sample CMS Service for KTC
// This typically connects to Strapi, Contentful, or a custom API.

export interface NewsItem {
  id: string;
  title: string;
  snippet: string;
  date: string;
  category: string;
  image: string;
}

export interface ProgramGroup {
  category: string;
  items: {
    title: string;
    duration: string;
    type: string;
    description?: string;
  }[];
}

export const getLatestNews = async (): Promise<NewsItem[]> => {
  return [
    {
      id: "1",
      title: "New 2026 Intake Applications Now Open",
      snippet: "KTC is happy to announce that applications for the 2026 academic year are now officially open for all programs...",
      date: "Feb 12, 2026",
      category: "Announcements",
      image: "https://images.unsplash.com/photo-1523050338692-7b8352211440?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "National Workshop on Highway Engineering",
      snippet: "Join industry experts at KTC for a 3-day intensive workshop on modern highway design and transport management...",
      date: "Jan 28, 2026",
      category: "Events",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "Graduation Ceremony 2025 Highlights",
      snippet: "Relive the precious moments from our recent graduation ceremony where over 500 professionals were certified...",
      date: "Dec 15, 2025",
      category: "News",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
    }
  ];
};

export const getPrograms = async (): Promise<ProgramGroup[]> => {
  return [
    {
      category: "Engineering",
      items: [
        { title: "Highway Engineering", duration: "12 Months", type: "Certification" },
        { title: "Bridge Design & Maintenance", duration: "6 Months", type: "Professional" },
        { title: "Pavement Analysis", duration: "4 Months", type: "Short Course" }
      ]
    },
    {
      category: "Construction & Labor",
      items: [
        { title: "Labor-Based Methods", duration: "3 Months", type: "Technical" },
        { title: "Road Construction Supervision", duration: "8 Months", type: "Certification" },
        { title: "Equipment Operations", duration: "2 Months", type: "Vocational" }
      ]
    }
  ];
};
