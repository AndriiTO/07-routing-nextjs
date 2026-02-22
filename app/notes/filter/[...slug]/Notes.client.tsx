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

const PER_PAGE = 12;
interface NotesClientProps {
  tag: Tag | string;
}

const NotesClient = ({ tag }: NotesClientProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  
const { data, isLoading, error } = useQuery<FetchNotesResponse>({
  queryKey: ["notes", currentPage, debouncedSearchQuery, tag],
  queryFn: () =>
    fetchNotes({
      page: currentPage,
      perPage: PER_PAGE,
      search: debouncedSearchQuery,
      tag: tag === "all" ? undefined : tag,
    }),
  placeholderData: (previousData) => previousData,
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
          {data && data.notes.length > 0 && <NoteList notes={data.notes} />}
          
        </section>
      </main>
    </div>

  );
};

export default NotesClient;






