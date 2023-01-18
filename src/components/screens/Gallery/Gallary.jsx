import React, {useState} from 'react'
import styles from './gallery.module.css'

import Container from "../../Container/Container";
import Title from "../../UI/Title/Title";
import Input from "../../UI/Input/Input";
import GalleryItems from "./components/GalleryItems/GalleryItems";
import SearchItems from "./components/SearchItems/SearchItems";


const Gallery = ({resource}) => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <section className={styles.wrapper}>
            <Container>
                <div className={styles.search}>
                    <Title classes={styles.title}>{resource}</Title>
                    <Input
                        classes={styles.input}
                        placeholder={'search...'}
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                        }}
                    />
                </div>

                {
                    searchValue
                        ? <SearchItems resource={resource} searchValue={searchValue}/>
                        : <GalleryItems resource={resource}/>
                }
            </Container>
        </section>
    );
};


export default React.memo(Gallery);