import React, {useEffect, useState} from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile ,setUrl}) => {
    const { progress, url } = useStorage(file);
    console.log(url);

    useEffect(() => {
        if (url) {
            setFile(null);
            setUrl(url);
            console.log(url);
        }
    }, [url, setFile]);

    return (
        <motion.div className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: progress + '%' }}
        ></motion.div>
    );
}

export default ProgressBar;
