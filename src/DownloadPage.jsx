import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import photos from "./data/photos.json";

const DownloadPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const photo = photos.find((p) => String(p.id) === String(id));

  if (!photo) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-zinc-950 text-white">
        <h2 className="text-xl">Photo not found</h2>
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
    <div className="min-h-[100dvh] bg-zinc-950 text-white flex flex-col">

      {/* Top Section (Back Button) */}
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="text-sm bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700 transition"
        >
          ← Back
        </button>
      </div>

      {/* Center Content */}
      <div className="flex-grow flex items-center justify-center px-4 text-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Payment Successful 🎉
          </h2>

          <button
            onClick={handleDownload}
            className="px-8 py-4 bg-green-500 rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
          >
            Download Your Photo
          </button>
        </div>
      </div>

    </div>
  );
};

export default DownloadPage;