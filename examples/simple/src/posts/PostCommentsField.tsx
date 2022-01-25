import React, {
  VFC,
} from 'react';
import {
  Datagrid,
  DateField,
  ReferenceManyField,
  TextField,
  EditButton,
} from 'react-admin';

export const PostCommentsField: VFC = () => (
  <ReferenceManyField
    label="post.form.comments"
    reference="comments"
    target="post_id"
    sort={{ field: 'created_at', order: 'DESC' }}
  >
    <Datagrid>
        <DateField source="created_at" />
        <TextField source="author.name" />
        <TextField source="body" />
        <EditButton />
    </Datagrid>
  </ReferenceManyField>
);

export default null;
