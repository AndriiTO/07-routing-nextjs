"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { fetchNotes } from "@/lib/api";
import { FetchNotesResponse } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./NotesClient.module.css";
import type { Tag } from "@/types/note" 
import { useParams } from "next/navigation";

const PER_PAGE = 12;
interface NotesClientProps {
  // slug: string[];
  tag: Tag | "all";
}

const NotesClient = ({ tag }: NotesClientProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const {slug} = useParams<{slug: string[]}>()
  // const tag: Tag | string = slug[0];
  //  useEffect(() => {
  //   setCurrentPage(1);
  // }, [tag]);
  
const { data, isLoading, error } = useQuery<FetchNotesResponse>({
  queryKey: ["notes", currentPage, debouncedSearchQuery, tag],
  queryFn: () =>
    fetchNotes({
      page: currentPage,
      perPage: PER_PAGE,
      search: debouncedSearchQuery,
      // tag
      tag: tag === "all" ? undefined : tag,
    }),
  placeholderData: (previousData) => previousData,
  // keepPreviousData: true,
});


  const handleSearch = (value: string) => {
    setCurrentPage(1);
    setSearchQuery(value);
  };

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error) return <p>Could not fetch the list of notes.</p>;

  return (




    <div className={css.app}>
      <main>
        <section>
          <header className={css.toolbar}>
            <SearchBox onSearch={handleSearch} />
            {data && data.totalPages > 1 && (
                <Pagination
          currentPage={currentPage}
          totalPages={data.totalPages}
          onPageChange={setCurrentPage}
        />
            )}
            <button className={css.button}  onClick={() => setIsModalOpen(true)}>
              Create note +
            </button>
          </header>

          {isModalOpen && (
  <Modal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
  >
    <NoteForm onClose={() => setIsModalOpen(false)} />
  </Modal>
)}
          {data && data.notes.length > 0 && <NoteList notes={data.notes} />}1
          
        </section>
      </main>
    </div>

  );
};

export default NotesClient;









