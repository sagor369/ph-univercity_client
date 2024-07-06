import React from 'react';
import { useGetAllSemesterQuery } from '../../../redux/features/academinSemester/AcademicSemesterApi';

const AcademicSemester = () => {
    const {data, error} = useGetAllSemesterQuery(undefined)
    console.log(data)
    return (
        <div>
            ami academic managment
        </div>
    );
};

export default AcademicSemester;