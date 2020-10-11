import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
    TextField
} from 'react-admin';

const ReviewList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    linkType="show"
                    primaryText={(record) => record.body}
                    tertiaryText={(record) =>
                        new Date(record.created_at).toLocaleDateString()
                    }
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <DateField source="created_at" />
                    <TextField source="review" />
                    <ReferenceField
                        resource="comments"
                        source="movie_id"
                        reference="movies"
                    >
                        <TextField source="title" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
        />
    </List>
);

export default ReviewList;
