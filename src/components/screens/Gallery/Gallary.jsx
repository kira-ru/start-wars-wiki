import React, {useState} from 'react'
import Container from "../../Container/Container";
import Title from "../../UI/Title/Title";
import Input from "../../UI/Input/Input";
import GalleryItems from "./components/GalleryItems/GalleryItems";
import SearchItems from "./components/SearchItems/SearchItems";
import styles from './gallery.module.css'


const Gallery = ({resource}) => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <section>
            <Container>
                <div className={styles.search}>
                    <Title classes={styles.title}>Star wars {resource}</Title>
                    <Input
                        classes={styles.input}
                        placeholder='search...'
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