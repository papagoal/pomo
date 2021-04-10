import * as React from 'react';
import {Grid, Cell} from 'baseui/layout-grid';
import {Outer, Inner} from "../components/Theme";

export default function Example() {
    return (
        <Grid
            gridGaps={12}
        >
            <Cell skip={1} span={[4, 8, 12]}>
                <Inner h={'5vh'}>1</Inner>
            </Cell>
            <Cell skip={1} span={[4, 8, 12]}>
                <Inner>1</Inner>
            </Cell>
            <Cell skip={1} span={[4, 8, 12]}>
                <Inner h={'5vh'}>1</Inner>
            </Cell>
        </Grid>

    );
}
