import React from 'react';
import { Spinner } from '../../app/components';
import { useFetchBreedsQuery } from '../../app/queries';

export const DogsBreedList: React.FC = React.memo(function DogsBreedList() {
  const { data = [], isLoading } = useFetchBreedsQuery();

  return (
    <>
      <p>Number of dogs fetched: {data.length}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.map((breed) => (
            <tr key={breed.id}>
              <td>{breed.name}</td>
              <td>
                <img src={breed.image.url} alt={breed.name} height={250} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Spinner visible={isLoading} />
    </>
  );
});
