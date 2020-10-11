import React from 'react';
import {
    Create,
    DateInput,
    LongTextInput,
    SimpleForm,
    required
} from 'react-admin';
import { parse } from 'query-string';
import MovieReferenceInput from './MovieReferenceInput';

const today = new Date();

const ReviewCreate = (props) => {
    // Read the post_id from the location which is injected by React Router and passed to our component by react-admin automatically
    const { movie_id: movie_id_string } = parse(props.location.search);

    // ra-data-fakerest uses integers as identifiers, we need to parse the querystring
    // We also must ensure we can still create a new Review without having a post_id
    // from the url by returning an empty string if post_id isn't specified
    const movie_id = movie_id_string ? parseInt(movie_id_string, 10) : '';

    const redirect = movie_id ? `/movies/${movie_id}/show/reviews` : false;

    return (
        <Create {...props}>
            <SimpleForm
                defaultValue={{ created_at: today, movie_id }}
                redirect={redirect}
            >
                <MovieReferenceInput
                    source="movie_id"
                    reference="movies"
                    allowEmpty
                    validate={required()}
                    perPage={10000}
                />
                <DateInput source="created_at" />
                <LongTextInput source="review" />
            </SimpleForm>
        </Create>
    );
};

export default ReviewCreate;
