import React from 'react';
import {
    Edit,
    DateInput,
    LongTextInput,
    SimpleForm,
    required
} from 'react-admin';
import { parse } from 'query-string';
import MovieReferenceInput from './MovieReferenceInput';

const ReviewEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <MovieReferenceInput
                    source="movie_id"
                    reference="movies"
                    allowEmpty
                    validate={required()}
                    perPage={10000}
                />
                <DateInput source="created_at" />
                <LongTextInput source="body" />
            </SimpleForm>
        </Edit>
    );
};

export default ReviewEdit;
