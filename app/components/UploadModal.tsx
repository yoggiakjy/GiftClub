import React, { ReactNode, useState } from "react";
import { GrCloudUpload } from "react-icons/gr";
import { MdClose } from "react-icons/md";

const UploadModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        className="relative bg-neutral-200 rounded-3xl p-6 max-w-[80%] w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-[2rem] right-[2rem] hover:cursor-pointer"
        >
          <MdClose className="text-3xl" />
        </button>
        {/* Header */}
        <div className="w-full flex flex-col">
          <h2 className="text-2xl font-semibold">Upload Video</h2>
          <p className="text-md font-light">Post a video to your account</p>
        </div>

        <div className="w-full flex justify-center items-center gap-8 mt-[3rem]">
          {/* Upload File */}
          <div className="flex flex-col justify-center items-center w-[27rem] px-[2rem] h-[28rem] border rounded-md">
            <GrCloudUpload className="text-gray-500 text-5xl" />
            <p className="text-lg font-semibold">Select video to upload</p>
            <p className="text-gray-600">Or drag and drop a file</p>
            <p className="text-center text-gray-500 font-light leading-8 mt-7">
              MP4 or WebM
              <br />
              720x1280 resolution or higher
              <br />
              Up to 5 minutes
              <br />
              Less than 1 GB
            </p>
            <button className="bg-amber-800 text-neutral-100 font-semibold px-[3rem] py-1.5 rounded-md mt-7">
              Select File
            </button>
          </div>

          {/* Upload Form */}
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

const UploadForm = () => {
  const [formData, setFormData] = useState({ caption: "", tags: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TO DO: Submit logic
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-start items-center w-full space-y-6"
    >
      <div className="w-full">
        <label className="w-full text-lg font-semibold text-zinc-800">
          Caption
        </label>
        <input
          type="text"
          name="caption"
          value={formData.caption}
          onChange={handleChange}
          className="border w-full mt-2 py-3 px-2"
        />
      </div>

      <div className="w-full">
        <label className="w-full text-lg font-semibold text-zinc-800">
          Tags
        </label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="border w-full mt-2 py-3 px-2"
        />
      </div>

      <button
        type="submit"
        className="bg-amber-800 text-neutral-100 font-semibold px-[4rem] py-3 rounded-lg"
      >
        Post
      </button>
    </form>
  );
};

export default UploadModal;
