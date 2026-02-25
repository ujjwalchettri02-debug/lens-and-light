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
    setPhotos(photosData || []);
    setLoading(false);
  }, []);

  const categories = ["All", ...new Set(photos.map((p) => p.category))];

  const filteredPhotos =
    filter === "All"
      ? photos
      : photos.filter((p) => p.category === filter);

  return (
    <section
      id="gallery"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-950 via-blue-950 to-zinc-900 mt-16"
    >
      <div className="max-w-7xl mx-auto">

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

        {/* Grid */}
        {!loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="rounded-lg overflow-hidden shadow-xl bg-zinc-900 hover:shadow-2xl transition">

                  {/* ✅ FIXED IMAGE (No Cropping) */}
                  <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    className="w-full h-auto object-contain bg-zinc-800"
                    loading="lazy"
                  />

                  {/* Caption */}
                  <div className="p-4 bg-zinc-900">
                    <h3 className="font-semibold text-white">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-zinc-400">
                      ₹{photo.price}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

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