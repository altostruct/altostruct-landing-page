// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { lang: "en" } }, { params: { lang: "swe" } }],
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// // `getStaticPaths` requires using `getStaticProps`
// export async function getStaticProps(context: any) {
//   return {
//     // Passed to the page component as props
//     props: { post: {} },
//   };
// }

function ABC() {
  return <p>asd</p>;
}

export default ABC;
