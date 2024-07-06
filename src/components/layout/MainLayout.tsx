import { Button, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import SiteBar from "./SiteBar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/AuthSlice";
const { Header, Content, Footer  } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch()
  const handleLogout = ()=>{
    dispatch(logout())
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
     <SiteBar/>
      <Layout>
      
        <Header >
        <Button onClick={handleLogout}>Logout</Button>
        </Header>
        
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Outlet/>
           <h2>ami main layout</h2>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
