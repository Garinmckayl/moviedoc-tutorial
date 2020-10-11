import React from 'react';
import {
    DateField,
    ReferenceField,
    Show,
    SimpleShowLayout,
    TextField
} from 'react-admin';

const ReviewShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="movie_id" reference="movies">
                <TextField source="title" />
            </ReferenceField>
            <DateField source="created_at" />
            <TextField source="review" />
        </SimpleShowLayout>
    </Show>
);

export default ReviewShow;
