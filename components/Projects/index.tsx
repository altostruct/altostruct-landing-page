import { getPostFromSlug } from "utils/contentful";
import projects from "../../.data/contentful/projects/all.json";
import Image from "next/image";
import { ContentfulImage } from "@components/Contentful";

function Projects(props: any) {
  console.log(projects);
  return (
    <>
      {projects.map((v, index) => {
        return (
          <div key={index}>
            <ContentfulImage
              alt="asd"
              image={v.fields.image}
              className="w-full"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps(context: any) {
  return {
    // Passed to the page component as props
    props: { post: getPostFromSlug(context.params.id, context.locale) },
  };
}

export default Projects;
