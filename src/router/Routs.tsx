import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import FacultyClass from "../pages/Faculty/FacultyClass";
import StudentDashboard from "../pages/Student/StudentDashboard";
import OfferCourse from "../pages/Student/OfferCourse";
import AcademicSemester from "../pages/Admin/AcademicManagment/AcademicSemester";


export const AdminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard/>,
    },
    {
        name: "User managment",
        children: [
           
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent/>
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty/>
            },
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin/>
            },
        ]
    },
    {
        name: "Academic managment",
        children: [
           
            {
                name: "Academic Semister",
                path: "academic-semister",
                element: <AcademicSemester/>
            },
            
        ]
    },
]

export const FacultyPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashboard/>,
    },
    {
        name: "Class",
        path: "faculty-class",
        element: <FacultyClass/>,
    },
]
export const StudentPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashboard/>,
    },
    {
        name: "OfferCourse",
        path: "offer-course",
        element: <OfferCourse/>,
    },
]

