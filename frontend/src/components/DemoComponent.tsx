import React, { useState } from 'react';
import { useQuery } from 'react-query'
import {getUser} from '../api/user';



function UserComponent({id}: {id: string}) {
    // if (!Number.isNaN(Number.parseInt(id))) {
    //     console.log("not integer")
    //     return null;
    // }

    const { isLoading, isError, data, error } = useQuery('getUser', () => getUser(Number(id)))

    return (
        <div>
            {data && <div>{JSON.stringify(data)} </div>}
            {error && <div>{JSON.stringify(data)} </div>}
        </div>
    )

}

export function DemoComponent() {
  const [id, setId] = useState('');

  return (
    <div>
      <label>Type an ID here:</label>
      <input type="text" value={id} onChange={(ev) => setId(ev.target.value)}></input>

      {id && <UserComponent id={id} /> }
    </div>
  );
}
