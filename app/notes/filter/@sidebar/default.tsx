"use client";

import Link from "next/link";
import css from "./SidebarNotes.module.css";
// import { getCategories } from '../../../../lib/api';

const tags = ["Work", "Personal", "Todo", "Meeting", "Shopping"];

export default function SidebarNotes() {

 

  return (
    <aside className={css.sidebar}>
      <ul className={css.menuList}>
     
        <li className={css.menuItem}>
          <Link href="/notes/filter/all" className={css.menuLink}>
            All notes
          </Link>
        </li>

        {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
