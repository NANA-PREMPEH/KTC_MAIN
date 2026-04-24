import { fetchAPI, getStrapiMedia } from "@/lib/strapi";

export interface NewsItem {
  id: string;
  title: string;
  snippet: string;
  date: string;
  category: string;
  image: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  content: string;
  priority: "High" | "Normal";
  date: string;
  expirationDate: string | null;
  author: string;
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

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

export const getLatestNews = async (): Promise<NewsItem[]> => {
  const response = await fetchAPI("/news-articles", { populate: "*" });
  if (response?.data && response.data.length > 0) {
    return response.data.map((item: any) => ({
      id: item.documentId || item.id.toString(),
      title: item.title,
      snippet: item.content ? item.content.substring(0, 150) + "..." : "",
      date: new Date(item.publishedAt || item.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      category: item.category || "News",
      image: getStrapiMedia(item.coverImage?.url) || "https://images.unsplash.com/photo-1523050338692-7b8352211440?q=80&w=2070&auto=format&fit=crop",
    }));
  }

  // Fallback data when Strapi is unavailable
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
      title: "Road Safety Technology: The 2026 Perspective",
      snippet: "A deep dive into how AI and smart sensors are revolutionizing road safety audits in Ghana...",
      date: "Feb 05, 2026",
      category: "Blog",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "National Workshop on Highway Engineering",
      snippet: "Join industry experts at KTC for a 3-day intensive workshop on modern highway design and transport management...",
      date: "Jan 28, 2026",
      category: "Events",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "4",
      title: "Graduation Ceremony 2025 Highlights",
      snippet: "Relive the precious moments from our recent graduation ceremony where over 500 professionals were certified...",
      date: "Dec 15, 2025",
      category: "News",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
    }
  ];
};

export const getNewsById = async (id: string): Promise<NewsItem | null> => {
  const response = await fetchAPI(`/news-articles/${id}`, { populate: "*" });
  if (response?.data) {
    const item = response.data;
    return {
      id: item.documentId || item.id.toString(),
      title: item.title,
      snippet: item.content || "",
      date: new Date(item.publishedAt || item.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      category: item.category || "News",
      image: getStrapiMedia(item.coverImage?.url) || "https://images.unsplash.com/photo-1523050338692-7b8352211440?q=80&w=2070&auto=format&fit=crop",
    };
  }

  // Fallback: search in static data
  const allNews = await getLatestNews();
  return allNews.find((n) => n.id === id) || null;
};

export const getEvents = async (): Promise<EventItem[]> => {
  const response = await fetchAPI("/events", { populate: "*" });
  if (response?.data && response.data.length > 0) {
    return response.data.map((item: any) => ({
      id: item.documentId || item.id.toString(),
      title: item.title,
      date: new Date(item.date).toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      }),
      time: item.time || "TBD",
      location: item.location,
      category: item.category || "Event",
    }));
  }

  return [
    { id: "e1", title: "Smart City Infrastructure Forum", date: "March 15, 2026", time: "09:00 AM", location: "Main Auditorium", category: "Conference" },
    { id: "e2", title: "Bridge Inspection Workshop", date: "April 02, 2026", time: "10:30 AM", location: "Lab 4", category: "Workshop" },
    { id: "e3", title: "KTC 25th Anniversary Gala", date: "May 10, 2026", time: "06:00 PM", location: "Eastern Premiere Hotel", category: "Social" },
  ];
};

export const getGalleryImages = async (): Promise<GalleryItem[]> => {
  const response = await fetchAPI("/gallery-images", { populate: "*" });
  if (response?.data && response.data.length > 0) {
    return response.data.map((item: any) => ({
      id: item.documentId || item.id.toString(),
      title: item.title,
      category: item.category || "Gallery",
      image: getStrapiMedia(item.image?.url) || "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400",
    }));
  }

  return [
    { id: "g1", title: "Certification Day", category: "Graduation", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400" },
    { id: "g2", title: "Practical Lab Session", category: "Training", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400" },
    { id: "g3", title: "Highway Site Visit", category: "Field", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=400" },
    { id: "g4", title: "Institutional Board Meeting", category: "Management", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400" },
  ];
};

export const getAnnouncements = async (): Promise<AnnouncementItem[]> => {
  const response = await fetchAPI("/announcements", { populate: "*" });
  if (response?.data && response.data.length > 0) {
    return response.data.map((item: any) => ({
      id: item.documentId || item.id.toString(),
      title: item.title,
      content: item.content || "",
      priority: item.priority || "Normal",
      date: new Date(item.publishedAt || item.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      expirationDate: item.expirationDate || null,
      author: item.Write || "KTC Administration",
    }));
  }

  // Fallback data
  return [
    {
      id: "a1",
      title: "New 2026 Intake Applications Now Open",
      content: "KTC is happy to announce that applications for the 2026 academic year are now officially open for all programs. Prospective students can apply online or visit the admissions office.",
      priority: "High",
      date: "Feb 12, 2026",
      expirationDate: null,
      author: "KTC Administration",
    },
    {
      id: "a2",
      title: "Library Hours Extended During Exam Period",
      content: "The KTC library will operate extended hours from 6:00 AM to 10:00 PM during the upcoming examination period to support students.",
      priority: "Normal",
      date: "Feb 08, 2026",
      expirationDate: "Mar 01, 2026",
      author: "Library Services",
    },
    {
      id: "a3",
      title: "Campus Network Maintenance Scheduled",
      content: "A scheduled maintenance of the campus network infrastructure will take place this weekend. Internet services may experience intermittent disruptions.",
      priority: "Normal",
      date: "Feb 05, 2026",
      expirationDate: null,
      author: "ICT Department",
    },
  ];
};

export const getAnnouncementById = async (id: string): Promise<AnnouncementItem | null> => {
  const response = await fetchAPI(`/announcements/${id}`, { populate: "*" });
  if (response?.data) {
    const item = response.data;
    return {
      id: item.documentId || item.id.toString(),
      title: item.title,
      content: item.content || "",
      priority: item.priority || "Normal",
      date: new Date(item.publishedAt || item.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      expirationDate: item.expirationDate || null,
      author: item.Write || "KTC Administration",
    };
  }

  // Fallback: search in static data
  const allAnnouncements = await getAnnouncements();
  return allAnnouncements.find((a) => a.id === id) || null;
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
