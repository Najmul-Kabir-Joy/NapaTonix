import { useEffect, useState } from 'react';

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchDoctors, setSearchDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
                setSearchDoctors(data)
            });
    }, [])
    return { doctors, searchDoctors, setSearchDoctors };
};

export default useDoctors;