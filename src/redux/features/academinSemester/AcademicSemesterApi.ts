import { baseAPi } from "../../Apis/BaseApi";

const academicSemester = baseAPi.injectEndpoints({
    endpoints:(build)=> ({
        getAllSemester: build.query({
            query: (userInfo)=>({
                url: '/academic-semesters',
                method: 'GET'
            })
        })
    }),
})

export const {useGetAllSemesterQuery} = academicSemester