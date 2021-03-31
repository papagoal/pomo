import React from 'react';
import {Outer, Inner} from "../components/Theme";
import {Grid, Cell} from 'baseui/layout-grid';

const Home = () => {
    return (
        <Outer>
            <Grid>
                <Cell span={[1, 2, 4]}>
                    <Inner>1</Inner>
                </Cell>
                <Cell span={[2, 4, 4]}>
                    <Inner>2</Inner>
                </Cell>
                <Cell span={[1, 2, 4]}>
                    <Inner>3</Inner>
                </Cell>
            </Grid>
        </Outer>
    );
};

export default Home;