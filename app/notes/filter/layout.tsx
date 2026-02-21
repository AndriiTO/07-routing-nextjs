// type NotesLayoutProps = {
//   children: React.ReactNode;
//   sidebar: React.ReactNode;
// };

// const NotesLayout = ({ children, sidebar }: NotesLayoutProps) => {
//   return (
//     <section className={css.section}>
//       <aside className={css.sidebar}>{sidebar}</aside>
//       <div className={css.content}>{children}</div>
//     </section>
//   );
// };

// export default NotesLayout;
import css from './layout.module.css';
type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
};

export default NotesLayout;