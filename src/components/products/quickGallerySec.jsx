// Only ahmed-mohamed can edit this file
import { React, useState } from "react";
function QuickGallerySec() {
    const [image, setImage] = useState(null);
    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        setImage(URL.createObjectURL(file));
    };
    return (
        <section className="rounded-xl border border-[var(--border-main)] bg-[var(--bg-primary)] p-6">
            <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 text-2xl">
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                        Product Gallery
                    </h2>
                    <p className="text-sm text-gray-400">
                        Upload and manage images
                    </p>
                </div>
            </div>

            <div className="mb-6">
                <img
                    src={image || "https://picsum.photos/800/400"}
                    alt="Product"
                    className="h-64 w-full rounded-xl object-cover"
                />

                <p className="mt-2 text-sm text-[var(--text-primary)]">
                    Image 1
                </p>
            </div>


            <div className="flex h-52 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--border-main)] transition hover:border-blue-500">
                <div className="mb-3 text-4xl"></div>

                <p className="text-lg font-medium text-[var(--text-primary)]">
                    Click to upload Images
                </p>

                <p className="mt-2 text-sm text-gray-400">
                    PNG, JPG, WEBP
                </p>
                <input
                    type="file"
                    accept="image"
                    onChange={handleImageUpload}
                />
            </div>
        </section>
    );
}

export default QuickGallerySec