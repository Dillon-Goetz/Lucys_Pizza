// src/components/InstagramGrid.tsx
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface InstagramPost {
  imgSrc: string; // Path to the local image, e.g., '/images/instagram/post1.jpg'
  postUrl: string; // Full URL to the Instagram post
}

interface InstagramGridProps {
  posts: InstagramPost[];
}

const InstagramGrid: React.FC<InstagramGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <Link href={post.postUrl} key={index} target="_blank" rel="noopener noreferrer">
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            {/* The Image */}
            <Image
              src={post.imgSrc}
              alt={`Instagram post ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* The Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Instagram className="h-8 w-8 text-white" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default InstagramGrid;