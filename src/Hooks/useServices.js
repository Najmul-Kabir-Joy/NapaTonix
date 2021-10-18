import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useServices = () => {
    const { successAlert } = useFirebase();
    const [services, setServices] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setSearchProducts(data)
            })
    }, [])
    return { services, searchProducts, setSearchProducts, successAlert };
};

export default useServices;