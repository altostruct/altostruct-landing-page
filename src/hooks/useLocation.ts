import { graphql, useStaticQuery } from "gatsby";

const useLocation = () => {
  const response = useStaticQuery(graphql`
    {
      sitePage {
        path
      }
    }
  `);
  const { sitePage } = response;
  return sitePage.path;
};

export default useLocation;
