import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import type { Tag } from "@/types/note"


export default async function NotesPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
  const tag: Tag | string = slug[0];
  const client = new QueryClient();

  await client.prefetchQuery({
    queryKey: ["notes", 1, "", tag], 
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: "",
        tag
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(client)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}


