import { Layout, Menu } from "antd";
import { AdminPaths, FacultyPaths, StudentPaths } from "../../router/Routs";
import { CreateSidebar } from "../../utils/SiteBar.Genetator";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/AuthSlice";
const { Sider } = Layout;
const userRole = {
  Admin: "admin",
  Faculty: "faculty",
  Student: "student",
};

const SiteBar = () => {
  const user = useAppSelector(selectCurrentUser);
  let sidebarItems;
  switch (user?.role) {
    case userRole.Admin:
      {
        sidebarItems = CreateSidebar(AdminPaths, userRole.Admin);
      }
      break;
    case userRole.Faculty:
      {
        sidebarItems = CreateSidebar(FacultyPaths, userRole.Faculty);
      }
      break;
    case userRole.Student:
      {
        sidebarItems = CreateSidebar(StudentPaths, userRole.Student);
      }
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
      onCollapse={(collapsed, type) => {}}
    >
      <div
        className="demo-logo-vertical"
        style={{
          font: "25px",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Ph- Ui</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SiteBar;
