import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: GoIT student</p>
          <p>
            Contact us:
            <a href="mailto:student@notehub.app">student@notehub.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}



// import css from "./Footer.module.css";

// export default function Footer() {

// return (

// <footer className={css.footer}>

//   <div className={css.content}>

//     <p>
//       © {new Date().getFullYear()} NoteHub.
//     </p>

//     <div>

//       <p>
//         Developer: Andrii
//       </p>

//       <p>

//         Contact:

//         <a href="mailto:student@notehub.app">
//           student@notehub.app
//         </a>

//       </p>

//     </div>

//   </div>

// </footer>

// );

// }