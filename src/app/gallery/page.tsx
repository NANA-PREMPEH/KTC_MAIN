"use client";

import Footer from "@/components/Footer";
import { getGalleryImages, GalleryItem } from "@/lib/cms_v2";
import { useEffect, useState } from "react";
import { Tag, Maximize2, Camera } from "lucide-react";

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState("All");

  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    getGalleryImages().then(setImages);
  }, []);

  const categories = ["All", ...new Set(images.map(img => img.category))];
  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 italic">
              Visual <span className="text-primary not-italic">Legacy</span>.
            </h1>
            <p className="text-xl text-secondary/60 leading-relaxed italic border-l-4 border-primary pl-6">
              Capturing the spirit of excellence, training, and innovation at KTC across the decades.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? "bg-primary text-white shadow-xl shadow-primary/20" 
                    : "bg-bg-soft text-secondary/40 hover:text-primary hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-bg-soft shadow-xl cursor-pointer"
            >
              <img 
                src={img.image} 
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                    <Tag size={12} /> {img.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{img.title}</h3>
                </div>
                <button className="absolute top-8 right-8 w-12 h-12 rounded-2xl glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary">
                  <Maximize2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {images.length === 0 && (
          <div className="py-24 text-center space-y-4">
            <Camera size={48} className="text-secondary/10 mx-auto" />
            <p className="text-secondary/40 italic">Initializing media library...</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:right-0 text-white hover:text-primary transition-colors flex items-center gap-2"
            >
              Close <span className="bg-white/10 p-2 rounded-full hover:bg-white/20"><Maximize2 size={16} className="rotate-45" /></span> 
            </button>
            
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="rounded-3xl shadow-2xl max-w-full max-h-[80vh] object-contain"
            />
            
            <div className="mt-6 text-center">
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">{selectedImage.category}</span>
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
