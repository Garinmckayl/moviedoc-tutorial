import React from 'react';
import {
    Datagrid,
    DateField,
    EditButton,
    ShowButton,
    ReferenceManyField,
    RichTextField,
    Show,
    Tab,
    TabbedShowLayout,
    TextField
} from 'react-admin';
import AddReviewButton from './AddReviewButton';

const MovieShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="genre" />
            </Tab>
            <Tab label="Summary" path="summary">
                <RichTextField
                    source="summary"
                    stripTags={false}
                    label=""
                    addLabel={false}
                />
            </Tab>
            <Tab label="Reviews" path="reviews">
                <ReferenceManyField
                    addLabel={false}
                    reference="reviews"
                    target="movie_id"
                    sort={{ field: 'created_at', order: 'DESC' }}
                >
                    <Datagrid>
                        <DateField source="created_at" />
                        <TextField source="review" />
                        <ShowButton />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddReviewButton />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

export default MovieShow;
