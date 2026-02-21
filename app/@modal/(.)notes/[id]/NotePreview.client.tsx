'use client';

import { useQuery } from '@tanstack/react-query';
import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api';
import { useRouter } from 'next/navigation';

import css from './NotePreview.module.css';

interface NotePreviewClientProps {
  id: string;
}

export default function NotePreviewClient({ id }: NotePreviewClientProps) {
  const router = useRouter();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const handleClose = () => {
    router.back();
  };

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <div className={css.container}>
        <div className={css.item}>
          {' '}
          <button className={css.backBtn} onClick={handleClose}>
            Back
          </button>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{note.createdAt}</p>
        </div>
      </div>
    </Modal>
  );
}





// "use client";

// import { useQuery } from "@tanstack/react-query";
// import Modal from "@/components/Modal/Modal";
// import { getSingleNote } from "@/lib/api";
// import { useRouter } from "next/navigation";
// import css from "./NotePreview.module.css";

// type Props = {
//   id: string;
// };

// export default function NotePreviewClient({ id }: Props) {
//   const router = useRouter();

//   const { data: note, isLoading, error } = useQuery({
//     queryKey: ["note", id],
//     queryFn: () => getSingleNote(id),
//   });

//   const handleClose = () => router.back();

//   if (isLoading) return <p>Loading...</p>;
//   if (error || !note) return <p>Something went wrong.</p>;

//   return (
//     <Modal isOpen={true} onClose={handleClose}>
//       <div className={css.container}>
//         <button className={css.backBtn} onClick={handleClose}>Back</button>
//         <h2 className={css.header}>{note.title}</h2>
//         <p className={css.tag}>{note.tag}</p>
//         <p className={css.content}>{note.content}</p>
//         <p className={css.date}>{note.createdAt}</p>
//       </div>
//     </Modal>
//   );
// }











// "use client";

// import { useQuery } from "@tanstack/react-query";
// import Modal from "@/components/Modal/Modal";
// import { getSingleNote } from "@/lib/api"; // твій метод для отримання однієї нотатки
// import { useRouter } from "next/navigation";

// import css from "./NotePreview.module.css";

// interface NotePreviewClientProps {
//   id: string;
// }

// export default function NotePreviewClient({ id }: NotePreviewClientProps) {
//   const router = useRouter();

//   // Запит нотатки через React Query
//   const { data: note, isLoading, error } = useQuery({
//     queryKey: ["note", id],
//     queryFn: () => getSingleNote(id),
//     refetchOnMount: false,
//   });

//   const handleClose = () => {
//     router.back(); // закриває модалку
//   };

//   if (isLoading) return <p>Loading, please wait...</p>;
//   if (error || !note) return <p>Something went wrong.</p>;

//   return (
//     <Modal isOpen={true} onClose={handleClose}>
//       <div className={css.container}>
//         <div className={css.item}>
//           <button className={css.backBtn} onClick={handleClose}>
//             Back
//           </button>
//           <div className={css.header}>
//             <h2>{note.title}</h2>
//           </div>
//           <p className={css.tag}>{note.tag}</p>
//           <p className={css.content}>{note.content}</p>
//           <p className={css.date}>{note.createdAt}</p>
//         </div>
//       </div>
//     </Modal>
//   );
// }