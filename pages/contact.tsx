import Form from "@components/Email";
import Footer from "@components/Footer";
import Topbar from "@components/Topbar/Topbar";
import { Content, Row } from "pages";


export function Home() {

return( 
<>
    <Topbar></Topbar>

        <Content className="mt-32">
          <Row className="">
            <div className="flex-1">
              <Form className="flex-1"></Form>
            </div>
          </Row>
        </Content>     
      <Footer></Footer>
    </>

  );
}

export default Home;