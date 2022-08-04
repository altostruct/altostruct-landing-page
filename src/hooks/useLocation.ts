import { graphql, useStaticQuery } from "gatsby";

const useLocation = () => {
  const response = useStaticQuery(graphql`
    {
      sitePage {
        path
        context {
          realPath
          lang
        }
      }
    }
  `);
  const { sitePage } = response;

  return sitePage.context?.lang ?? "-";
};

export default useLocation;
