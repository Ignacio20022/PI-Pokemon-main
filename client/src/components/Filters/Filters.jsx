import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/actions";
import styles from './Filters.module.css'

export default function Filters(){

    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false);

    const types = useSelector((state) => state.types)
    useEffect(() => {
        if(!types.length) dispatch(getTypes())
    }, [dispatch, types.length]);

    const handleClick = () => {
      setIsActive((current) => !current);

    }
    
    if(isActive){

        return(
            <div className={styles.buActive}>
                <div>
                    <span className={styles.inside}>FILTROS</span>

                </div>
            </div>
        )
    }
    else{

        return(
            <button className={
            styles.bu
        }
            onClick={handleClick}
            > &#9776;</button>
        )
    }
}