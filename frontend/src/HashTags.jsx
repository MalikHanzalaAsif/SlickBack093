import React from 'react';
import "./styles/HashTags.css";

const hashTags = () => {
  return (
    <section id="hashTags" className='flex flex-col'>
        <div className="hashTagsText text-center mb-16 mt-6">
            <h1 className='text-3xl'>#instagram #slickback093</h1>
            <p className='text-sm font-mono'>Brand that puts you first. Top Quality Products</p>
        </div>
    <div className="hashTagsImages flex justify-between">
      <div className="w-1/5 aspect-w-1 aspect-h-1 overflow-hidden">
        <img src="/img/hashHoodie1.png" className="object-cover w-full h-full" alt="Image 1" />
      </div>
      <div className="w-1/5 aspect-w-1 aspect-h-1 overflow-hidden">
        <img src="/img/hashTrouser1.png" className="object-cover w-full h-full" alt="Image 2" />
      </div>
      <div className="w-1/5 aspect-w-1 aspect-h-1 overflow-hidden">
        <img src="/img/hashTshirt.png" className="object-cover w-full h-full" alt="Image 3" />
      </div>
      <div className="w-1/5 aspect-w-1 aspect-h-1 overflow-hidden">
        <img src="/img/hashTrouser2.png" className="object-cover w-full h-full" alt="Image 4" />
      </div>
      <div className="w-1/5 aspect-w-1 aspect-h-1 overflow-hidden">
        <img src="/img/hashHoodie2.png" className="object-cover w-full h-full" alt="Image 5" />
      </div>
    </div>
    </section>
  );
};

export default hashTags;