import { useEffect, useState } from "react";
import { getMemes } from "../services/api";
import { Grid } from "@mui/material";
import Meme from "./Meme";

const Memes = () => {
    const [memes, setMemes] = useState([])

    useEffect(() => {
        const getData = async () => {
            let response = await getMemes();
            setMemes(response.data.children);
        }
        getData();
    }, [])

    return (
        <Grid container margin={3}>
            {
                memes.map(meme => (
                    <Grid item xs={2}>
                        <Meme meme={meme} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Memes;