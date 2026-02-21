import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import NotePreviewClient from './NotePreview.client';
import { fetchNoteById } from '@/lib/api';

interface NoteDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function NotePreview({ params }: NoteDetailsProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreviewClient id={id} />
    </HydrationBoundary>
  );
}














// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import NotePreviewClient from "./NotePreview.client";
// import { getSingleNote } from "@/lib/api";

// type Props = { params: { id: string } };

// export default async function NotePreview({ params }: Props) {
//   const { id } = params;

//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["note", id],
//     queryFn: () => getSingleNote(id),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotePreviewClient id={id} />
//     </HydrationBoundary>
//   );
// }










// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import NotePreviewClient from "./NotePreview.client";
// import { getSingleNote } from "@/lib/api";

// type Props = {
//   params: { id: string };
// };

// export default async function NotePreview({ params }: Props) {
//   const { id } = params;

//   const queryClient = new QueryClient();

//   // Попереднє завантаження нотатки
//   await queryClient.prefetchQuery({
//     queryKey: ["note", id],
//     queryFn: () => getSingleNote(id),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotePreviewClient id={id} />
//     </HydrationBoundary>
//   );
// }







// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import NotePreviewClient from "./NotePreview.client";
// import { getSingleNote } from "@/lib/api";

// type Props = {
//   params: { id: string };
// };

// export default async function NotePreview({ params }: Props) {
//   const { id } = params;

//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["note", id],
//     queryFn: () => getSingleNote(id),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotePreviewClient id={id} />
//     </HydrationBoundary>
//   );
// }


// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import NotePreviewClient from "./NotePreview.client";
// import { getSingleNote } from "@/lib/api";

// type Props = {
//   params: { id: string }; // params приходить як об’єкт
// };

// export default async function NotePreview({ params }: Props) {
//   const { id } = params;

//   const queryClient = new QueryClient();

//   // Попереднє завантаження даних на сервері
//   await queryClient.prefetchQuery({
//     queryKey: ["note", id],
//     queryFn: () => getSingleNote(id),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotePreviewClient id={id} />
//     </HydrationBoundary>
//   );
// }














// import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
// import NotePreviewClient from './NotePreview.client';
// import { getSingleNote } from '@/lib/api';

// type Props = {
//   params: { id: string }; 
// };

// export default async function NotePreview({ params }: Props) {
//   const { id } = params;

//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ['note', id],
//     queryFn: () => getSingleNote(id),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotePreviewClient id={id} />
//     </HydrationBoundary>
//   );
// }













// import { getSingleNote } from '@/lib/api';
// import Modal from '@/components/Modal/Modal';

// type Props = {
//   params: Promise<{ id: string }>;
// };

// const NotePreview = async ({ params }: Props) => {
//   const { id } = await params;
//   const note = await getSingleNote(id);

//   return (
//       <Modal
//       isOpen={true}           
//       onClose={() => {
        
//         window.history.back();
//       }}
//     >
//       <h2>{note.title}</h2>
//       <p>{note.content}</p>
//     </Modal>
   
//   );
// };

// export default NotePreview;