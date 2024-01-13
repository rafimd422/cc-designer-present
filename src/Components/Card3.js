import { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';

const Card3 = ({ social }) => {
  const { name, authorImg, design, theme, title } = social;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="flex flex-col max-w-lg md:p-5 p-3 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900">
      <div className="flex space-x-3">
        <Image
          alt="Designer Name"
          src={authorImg}
          width={100}
          height={100}
          className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">
            {name}
          </a>
          <span className="text-xs text-gray-400">
            Graphics Designer || Organiser || Cultural Clasistists
          </span>
        </div>
      </div>
      <div>
        <Image
          src={design}
          width={100}
          height={100}
          alt="The Art By Designer"
          className="w-full mb-4 h-60 sm:h-96 object-cover cursor-pointer"
          onClick={() => setModalIsOpen(true)}
        />
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-400">{theme}</p>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Full View"
      >
        <div className="flex justify-end">
          <button className="text-white" onClick={() => setModalIsOpen(false)}>
            Close
          </button>
        </div>
        <div>
          <Image
            src={design}
            width={500} // Adjust the width and height as needed
            height={500}
            alt="Full View"
            className="w-full h-full object-cover"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Card3;
