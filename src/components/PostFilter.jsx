import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';


const PostFilter = ({ filter, setFilter }) => {

    return (
        <div>
            <MyInput
                placeholder="Search..."
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            />
            <MySelect
                value={filter.query}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='Filter'
                options={[
                    { value: 'title', name: 'Filter name' },
                    { value: 'body', name: 'Filter description' }
                ]}
            />
        </div>
    )
}

export default PostFilter;