import React from "react";
import { useParams } from "react-router-dom";
import photos from "./data/photos.json";

const DownloadPage = () => {
  const { id } = useParams();

  const photo = photos.find((p) => String(p.id) === String(id));

  if (!photo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2>Photo not found</h2>
      </div>
    );
  }

  const handleDownload = () => {
    const forcedDownloadUrl = photo.imageUrl.replace(
      "/upload/",
      "/upload/fl_attachment/"
    );

    window.open(forcedDownloadUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Payment Successful 🎉
        </h2>

        <button
          onClick={handleDownload}
          className="px-8 py-4 bg-green-500 rounded-lg hover:bg-green-600 transition"
        >
          Download Your Photo
        </button>
      </div>
    </div>
  );
};

export default DownloadPage;
