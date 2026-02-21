import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "./NoteDetails.client";

export default async function NotePage({
  params,
}: {
  params: { id: string };
}) {

  const client = new QueryClient();

  await client.prefetchQuery({

    queryKey: ["note", params.id],

    queryFn: () =>
      fetchNoteById(params.id),

  });

  return (

    <HydrationBoundary state={dehydrate(client)}>

      <NoteDetailsClient />

    </HydrationBoundary>

  );

}