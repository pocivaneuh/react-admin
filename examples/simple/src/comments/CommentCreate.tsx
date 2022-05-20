import * as React from 'react';

import {
    Create,
    DateInput,
    TextInput,
    SimpleForm,
    Toolbar,
    SaveButton,
    SaveButtonProps,
    required,
    minLength,
    useNotify,
} from 'react-admin'; // eslint-disable-line import/no-unresolved
import { useFormContext } from 'react-hook-form';
import PostReferenceInput from './PostReferenceInput';

const now = new Date();
const defaultSort = { field: 'title', order: 'ASC' };

const CommentCreateToolbar: React.VFC = () => {
    const { reset } = useFormContext();
    const notify = useNotify();
    const mutationOptions: SaveButtonProps['mutationOptions'] = {
        onSuccess: () => {
            console.debug('SmsCreateToolbar.onSuccess');
            reset();
            window.scrollTo(0, 0);
            notify('SMS envoyé.');
        },
    };

    return (
        <Toolbar>
            <SaveButton
                label="Custom create"
                mutationOptions={mutationOptions}
            />
        </Toolbar>
    );
};

const CommentCreate = () => (
    <Create redirect={false}>
        <SimpleForm toolbar={<CommentCreateToolbar />}>
            <PostReferenceInput
                source="post_id"
                reference="posts"
                validate={required()}
                perPage={10000}
                sort={defaultSort}
            />
            <TextInput source="author.name" validate={minLength(10)} />
            <DateInput source="created_at" defaultValue={now} />
            <TextInput fullWidth source="body" multiline />
        </SimpleForm>
    </Create>
);

export default CommentCreate;
