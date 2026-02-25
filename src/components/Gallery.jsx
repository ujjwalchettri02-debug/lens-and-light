import React, { useState, useEffect } from "react";
import { Tag } from "lucide-react";
import photosData from "../data/photos.json";
import Lightbox from "./Lightbox";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPhotos(photosData || []);
      setLoading(false);
    }, 300);
  }, []);

  const categories = ["All", ...new Set(photos.map((p) => p.category))];

  const filteredPhotos =
    filter === "All"
      ? photos
      : photos.filter((p) => p.category === filter);

  return (
    <section
      id="gallery"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-950 via-blue-950 to-zinc-900 relative mt-16"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Browse our collection of fine art photography.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                filter === category
                  ? "bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-500 text-white shadow-lg"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              <Tag className="w-4 h-4" />
              {category}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-zinc-800 border-t-white"></div>
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative overflow-hidden rounded-lg bg-zinc-900 shadow-xl transition-all duration-300 hover:scale-[1.02]">

                  {/* Image */}
                  <img
                    src={photo.thumbnailUrl || photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = photo.imageUrl;
                    }}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />

                  {/* Desktop Overlay Only */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 md:hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                    <h3 className="text-xl font-semibold mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-zinc-300 mb-3 line-clamp-2">
                      {photo.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full">
                        {photo.category}
                      </span>
                      <span className="font-bold text-lg">
                        ₹{photo.price}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-lg">
              No photos found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
};

export default Gallery;