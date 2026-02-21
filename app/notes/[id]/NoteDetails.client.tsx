"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import css from "./NoteDetails.module.css"

export default function NoteDetailsClient() {

  const params = useParams();

  const id = params.id as string;

  const { data, isLoading, error } =
    useQuery({
      queryKey: ["note", id],
      queryFn: () => fetchNoteById(id),
      refetchOnMount: false,
    });

  if (isLoading)
    return <p>Loading, please wait...</p>;

  if (error || !data)
    return <p>Something went wrong.</p>;

  return (

    <div className={css.container}>

      <h2 className={css.header}>{data.title}</h2>

      <p className={css.content}>{data.content}</p>

      <p className={css.tag}>{data.tag}</p>

      <p>{data.createdAt}</p>

    </div>

  );

}