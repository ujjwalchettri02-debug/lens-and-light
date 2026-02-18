import React, { useState, useEffect } from 'react';
import { Tag } from 'lucide-react';
import photosData from '../data/photos.json';
import Lightbox from './Lightbox';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setPhotos(photosData);
      setLoading(false);
    }, 300);
  }, []);

  const categories = ['All', ...new Set(photos.map((photo) => photo.category))];

  const filteredPhotos =
    filter === 'All' ? photos : photos.filter((photo) => photo.category === filter);

  return (
    <section id="gallery" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-950 via-blue-950 to-zinc-900 relative overflow-hidden backdrop-blur-xl bg-opacity-80 mt-16">
      {/* Blurry gradient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-5xl sm:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="font-sans text-lg text-zinc-400 max-w-2xl mx-auto">
            Browse our collection of fine art photography. Click any image to view details
            and purchase options.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-lg font-sans font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                filter === category
                  ? 'bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-500 text-white shadow-lg shadow-blue-400/50'
                  : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              <Tag className="w-4 h-4" />
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-zinc-800 border-t-zinc-100"></div>
          </div>
        )}

        {/* Masonry Grid */}
        {!loading && (
          <div className="masonry-grid">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="masonry-item group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative overflow-hidden rounded-lg bg-zinc-900 shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-scale-in">
                  {/* Image */}
                  <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="font-display text-2xl font-semibold mb-2">
                      {photo.title}
                    </h3>
                    <p className="font-sans text-sm text-zinc-300 mb-3 line-clamp-2">
                      {photo.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans text-zinc-400 bg-zinc-800/80 px-3 py-1 rounded-full">
                        {photo.category}
                      </span>
                      <span className="font-sans font-bold text-lg">
                        ₹{photo.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="font-sans text-zinc-400 text-lg">
              No photos found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <Lightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </section>
  );
};

export default Gallery;
