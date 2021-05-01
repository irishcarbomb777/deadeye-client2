import {MainLayout} from "./components/MainLayout"
import {Header} from "./components/Header"
import {MainContent} from "./components/MainContent"
import {MQTTTestContainer} from "./components/MQTTTestContainer"
import {MQTTcard} from "./components/MQTTcard"
import GlobalStyle from "./components/GlobalStyle"

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <MainLayout>
        <Header>
        </Header>
        <MainContent>
          <MQTTTestContainer>
            <MQTTcard/>
          </MQTTTestContainer>
        </MainContent>
      </MainLayout>
    </>
  );
}


